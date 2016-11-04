import flatten from '../flatten';

export default function items(state={},action){
    switch(action.type){
        case 'receive feed':
            return Object.assign({},state,
                flatten(action.feed.items,(i)=>i.guid));
        default: return state;
    }
}