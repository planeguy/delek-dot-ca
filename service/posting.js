var MAX_ITEMS=10;

function load(src){
    return {} //a channel
}

function save(channel){

}

function post(item, src){
    var home = load(src);
    var current;
    if (!home.isHome) throw new Error('src must point to the home channel');
    if (home.next) current = load(home.next);
    else current = home;
    if (current.items.length >= MAX_ITEMS) {
        current = Object.assign({}, current, {
            items:[],
            id: newid,
            next:current.id
        });
    }
}