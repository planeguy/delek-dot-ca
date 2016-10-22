import flatten from '../flatten';

function onlyItemIds(channel){
    return Object.assign({}, channel,
        {
            items: channel.items
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

export default function channels(state = {}, action){
    switch(action.type){
        case 'receive channel':
            return Object.assign({},state,
                flatten([onlyItemIds(action.channel)]));
        case 'request channel':
            return Object.assign({},state,
                flatten([{id: action.id, requested:true }],(c)=>c.id));
        case 'save channel':
            return Object.assign({},state,
                flatten([{id: action.id, saving:true }],(c)=>c.id));
        default: return state;
    }
}