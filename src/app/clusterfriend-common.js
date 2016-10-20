

export function makeItemId(base, feed, id){
    return (location.origin|| (location.origin = location.protocol + "//" + location.host)) + "/#/" + base + feed +'/'+ id
}