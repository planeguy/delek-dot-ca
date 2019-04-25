/*
{
    id:itemid,
    url:this.opts.permaurl+'/#/'+itemid,
    content_text:'',
    external_url:'',
    attachments:[],
    tags:[]
}
*/
const Twitter = require('twitter');
const TWEETMAX = 140;

function concatenatedTweet(item) {
    let intro = `I posted a thing: ${item.url} `;
    return `${intro} "${item.content_text.substring(0, 130 - intro.length)}..."`;
}

function createTweet(item, exl, pl) {
    let cl = item.content_text.length + 2;

    if (cl + pl > TWEETMAX) return concatenatedTweet(item);
    if (cl + exl + pl > TWEETMAX) return `${item.content_text} ${item.url}`.replace(/\s+/g, ' ').trim();
    return `${item.content_text} ${item.external_url} ${item.url}`.replace(/\s+/g, ' ').trim();
}

function tweetFromItem(item, tcolength) {
    if (!!tcolength) return createTweet(item, (!!item.external_url ? tcolength : 0), (!!item.url ? tcolength : 0));
    return createTweet(item, (!!item.external_url ? item.external_url.length : 0), (!!item.url ? item.url.length : 0));
}

module.exports.tweet = async function tweet(item) {
    let client = new Twitter({
        consumer_key: process.env.TWITTER_CONSUMER_KEY,
        consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
        access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
        access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
    });
    let photoposts = item.attachments.map(img => client.post('media/upload', { media: img }));
    let photos = await Promise.all(photoposts);
    return await client.post('statuses/update', Object.assign(tweetFromItem(item), { media_ids: photos.map(p => p.media_id_string) }));
}