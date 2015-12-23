export default function items(state={}, action){
	switch(action.type){
		case 'feed recieved':
			console.log('got feed (items reducer)');
			return Object.assign({}, action.items.reduce((m,i)=>{m[i.id]=i; return m;},{}));
		default:
			return state;
	}
}