export default function cleanHash(hash){
    if(!hash) return undefined;
    //remove the '#'
    let h=hash.substring(1);

    //remove extra ///////
    while(h[0]=='/') h=h.substring(1);
    return h;
}