import flatten from '../flatten';

export default function items(state={},action){
    switch(action.type){
        case 'receive channel':
            return Object.assign({},state,
                flatten(action.channel.items,(i)=>i.guid));
        default: return state;
    }
}