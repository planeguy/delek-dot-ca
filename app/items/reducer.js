export default function items(state={}, action){
	switch(action.type){
		case 'feed recieved':
		console.log('got feed (items reducer)');
			return Object.assign({}, action.items);
		default:
			return state;
	}
}