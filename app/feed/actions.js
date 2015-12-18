//import ajax from 'vendor/ajaxpoop';

let ajax = (x)=>{
	return {
	get:()=>{
		console.log('fake ajax '+x);
		return { response: '{"items":{"1":1, "2":2, "3":3}, "prev": 4, "next": 9}'};
	}}
};

function requestFeed(url){
	return {
		type:"fetch feed",
		url:url
	};
}

function recieveFeed(items, prev, next){
	return {
		type:'feed recieved',
		items, prev, next
	};
}

export function fetchFeed(url){
	return (dispatch)=>{
		Promise.resolve(url)
		.then((u)=>{
			dispatch(requestFeed(u));
			return u;
		}).then((u)=>{
			return ajax(u).get();
		}).then((xhr)=>{
			let f = JSON.parse(xhr.response);
			dispatch(recieveFeed(f.items, f.prev, f.next))
		});
	};
}