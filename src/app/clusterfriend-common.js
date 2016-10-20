

export function makeItemId(loc, base, feed, id){
    return (loc.origin|| (loc.origin = loc.protocol + "//" + loc.host)) + "/#/" + base + feed +'/'+ id;
}

export function parsePostInfo(hash, base){
    //remove the '#'
    let h=hash.substring(1);

    //remove extra ///////
    while(h[0]=='/') h=h.substring(1);
    //remove the base
    if(!!base) h=h.substring(base.length);
    
    let firstSlashIdx = h.indexOf('/');
    if (firstSlashIdx > 0){
        // if there is a '/' then the # is in the format feed/id
        return {
            feed:h.substring(0, firstSlashIdx),
            id: h.substring(firstSlashIdx+1)
        }
    }
    else {
        //if there is no '/' the hash is just the feed name
        return {
            feed:h
        };
    }
}