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
export default function tweetFromItem(item){
    return [
        item.content_text,
        item.external_url,
        (item.tags||[]).map(t=>'#'+t).join(' '),
        item.url
    ].join(' ');
}