export default function items(state={}, action){
	switch(action.type){
		case 'feed recieved':
		console.log('got feed (people reducer)');
			return Object.assign({}, action.people);
		default:
			return state;
	}
}