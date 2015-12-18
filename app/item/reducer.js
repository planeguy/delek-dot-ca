export default function items(state={}, action){
	switch(action.type){
		case 'request item':
			console.log('request item');
			return Object.assign({},state,{
				'feed-url':action['feed-url'],
				id:action.id
			});
		case 'show all items':
			return Object.assign({},state,{
				'feed-url':undefined,
				id:undefined
			});
		default:
			return state;
	}
}