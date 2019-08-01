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
const Twitter = require('twit');
const fs = require('fs');
const TWEETMAX = 140;

const toptions = {
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
};

function concatenatedTweet(item) {
    let intro = `${item.url}`;
    return `${item.content_text.substring(0, 130 - intro.length)}... ${intro}`;
}

function createTweet(item, exl, pl) {
    let cl = item.content_text.length + 2;

    if (cl + pl > TWEETMAX) return {
        status: concatenatedTweet(item)
    };
    if (cl + exl + pl > TWEETMAX) return {
        status: `${item.content_text} ${item.url}`.replace(/\s+/g, ' ').trim()
    };
    return {
        status: `${item.content_text} ${item.external_url} ${item.url}`.replace(/\s+/g, ' ').trim()
    };
}

function tweetFromItem(item, tcolength) {
    if (!!tcolength) return createTweet(item, (!!item.external_url ? tcolength : 0), (!!item.url ? tcolength : 0));
    return createTweet(item, (!!item.external_url ? item.external_url.length : 0), (!!item.url ? item.url.length : 0));
}

module.exports.tweet = async function tweet(item) {
    console.log(toptions);
    try {
        let uploader = new Twitter({ ...toptions, subdomain: 'upload' });
        let photos = await Promise.all(item.photos.map(p => uploader.post('media/upload', { media_data: fs.readFileSync(p.path, { encoding: 'base64' }) }).then(r => { console.log(r); return r.data; })));
        console.log(photos);

        let poster = new Twitter({ ...toptions, subdomain: 'api' });
        let status = { ...tweetFromItem(item), media_ids: photos.map(p => p.media_id_string) };
        console.log(status);
        return await poster.post('statuses/update', status).then(r => r.data);

    } catch (e) { console.log('error thrown'); console.log(e) }
}