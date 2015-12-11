export default function feedReducer(state, action){
	switch (action.type){
		case 'fetch feed':
			return Object.assign({},state,{
				isFetching: true
			});
		case 'feed received':
			return Object.assign({},state, {
				isFetching:false,
				feed:action.feed
			});
		default:
			return state;
	}
}