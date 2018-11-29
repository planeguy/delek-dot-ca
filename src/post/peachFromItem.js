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



export default function peachFromItem(item){
    return `${item.content_text} ${item.external_url} ${item.url}`.replace(/\s+/g,' ').trim();
}