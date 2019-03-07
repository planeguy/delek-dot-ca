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



export default function peachFromItem(item, posselinkback){
    let peachmessage = [
        {
            type:'text',
            text:`${item.content_text} ${item.external_url} ${posselinkback?item.url:''}`.replace(/\s+/g,' ').trim()
        }
    ];
    if(item.attachments!=undefined){
        item.attachments.forEach(a=>{
            peachmessage.push({
                type:"image",
                width:3366,
                height:3366,
                src:a.url
            });
        });
    }
    return JSON.stringify(peachmessage);
}