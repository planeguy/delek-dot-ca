export default function feed(state={
	isFetching:false
}, action){
	switch (action.type){
		case 'request feed':
			console.log('start feed fetch');
			return Object.assign({},state,{
				isFetching: true,
				url: action.url
			});
		case 'feed recieved':
		console.log('got feed (feed reducer)');
			return Object.assign({},state,{
				isFetching:false,
				items:action.feed.items,
				prev:action.prev,
				next:action.next
			});
		default:
			return state;
	}
}