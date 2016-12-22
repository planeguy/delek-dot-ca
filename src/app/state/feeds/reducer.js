import flatten from '../flatten';

function onlyItemIds(feed){
    return Object.assign({}, feed,
        {
            items: feed.items
                .map((i)=>({url:i.url,published:i.published}))
                .sort((l,r)=>{
                    if(Date.parse(l.published) > Date.parse(r.published)) return -1;
                    if(Date.parse(l.published) < Date.parse(r.published)) return 1;
                    return 0;
                })
                .map((i)=>i.url)
        }
    );
}

export default function feeds(state = {}, action){
    switch(action.type){
        case 'receive feed':
            return Object.assign({},state,
                flatten([onlyItemIds(action.feed)],(c)=>c.url));
        default: return state;
    }
}