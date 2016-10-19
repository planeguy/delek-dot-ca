export default function selectedItem(state={}, action){
    switch(action.type){
        case 'select item':
            return Object.assign({},state,{guid: action.guid}); 
        default: return state;
    }
}