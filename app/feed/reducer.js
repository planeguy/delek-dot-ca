export default function feed(state={
	isFetching:false
}, action){
	switch (action.type){
		case 'fetch feed':
			console.log('start feed fetch');
			return Object.assign({},state,{
				isFetching: true
			});
		case 'feed recieved':
		console.log('got feed (feed reducer)');
			return Object.assign({},state, {
				isFetching:false,
				prev:action.prev,
				next:action.next
			});
		default:
			return state;
	}
}