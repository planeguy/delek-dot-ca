import flatten from '../flatten';

function onlyItemIds(feed){
    return Object.assign({}, feed,
        {
            items: feed.items
                .map((i)=>({guid:i.guid,pubDate:i.pubDate}))
                .sort((l,r)=>{
                    if(Date.parse(l.pubDate) > Date.parse(r.pubDate)) return -1;
                    if(Date.parse(l.pubDate) < Date.parse(r.pubDate)) return 1;
                    return 0;
                })
                .map((i)=>i.guid)
        }
    );
}

export default function feeds(state = {}, action){
    switch(action.type){
        case 'receive feed':
            return Object.assign({},state,
                flatten([onlyItemIds(action.feed)],(c)=>c.guid));
        case 'request feed':
            return Object.assign({},state,
                flatten([{id: action.guid, requested:true }],(c)=>c.guid));
        case 'save feed':
            return Object.assign({},state,
                flatten([{id: action.guid, saving:true }],(c)=>c.guid));
        default: return state;
    }
}