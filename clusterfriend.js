import Channel from 'model/channel';
import Item from 'model/item';

function getLatestItem(items){
    return items.reduce((mostRecent, i)=>{
        if(mostRecent.pubDate<i.pubDate) return i;
        return mostRecent;
    });
}

function nextId(id){
    //depends on what we decide to use for this
    if(!id) return 0;
    return id+1;
}

function getNextItemId(items){
    let current = getLatestItem(items);
    if(!current) return nextId();
    return nextId(current.id);
}