export default function selectedItem(state={}, action){
    switch(action.type){
        case 'select item':
            return Object.assign({},state,{url: action.url}); 
        default: return state;
    }
}