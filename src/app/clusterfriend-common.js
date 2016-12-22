/*
delek.org cf routes

http://website-server/whatever/whatever/#/http://server/whatever/feed#item
= base + '#/' + feed + '#' + item

Algorithmically, to load a feed from the item url, we should only need to load the item url (since it is the feed url + # itemid)

*/

export function cleanHash(hash){
    if(!hash) return;
    //remove the '#'
    let h=hash.substring(1);

    //remove extra ///////
    while(h[0]=='/') h=h.substring(1);
    return h;
}

export function getFeedFromHash(hash){
    let clean = cleanHash(hash);
    if(!clean) return;
    let parts = clean.split('/');
    if (parts.length>1) parts.pop();
    return parts.reduce((f,p)=>f+'/'+p);
}

export function newid() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,a=>(a^Math.random()*16>>a/4).toString(16));
}