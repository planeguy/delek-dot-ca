/*

delek.org cf routes

http://server/whatever/whatever/#/http://server/whatever/feed/item
= base + '#/' + feed + '/' + item

*/

export function makeItemId(base='', feed='feed', item=''){
    return base+'#/'+feed+'/'+item;
}

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

export function getItemFromHash(hash){
    let clean = cleanHash(hash);
    if (!clean) return;
    return clean.split('/').pop();
}