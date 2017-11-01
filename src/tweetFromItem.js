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
const TWEETMAX = 140;

function concatenatedTweet(item){
    let intro=`I posted a thing: ${item.url} `;
    return `${intro} "${item.content_text.substring(0,130-intro.length)}..."`;
}

function createTweet(item, exl, pl){
    let cl=item.content_text.length+2;

    if(cl+pl>TWEETMAX) return concatenatedTweet(item);
    if(cl+exl+pl>TWEETMAX) return `${item.content_text} ${item.url}`.replace(/\s+/g,' ').trim();
    return `${item.content_text} ${item.external_url} ${item.url}`.replace(/\s+/g,' ').trim();
}

export default function tweetFromItem(item, tcolength){
    if(!!tcolength) return createTweet(item, (!!item.external_url?tcolength:0), (!!item.url?tcolength:0));
    return createTweet(item, (!!item.external_url?item.external_url.length:0), (!!item.url?item.url.length:0));
}