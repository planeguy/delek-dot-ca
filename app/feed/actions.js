import ClusterfriendLoader from 'clusterfriend-loader';

function requestFeed(url){
	return {
		type:"request feed",
		url:url
	};
}

function recieveFeed(feed){
	return Object.assign({},{
		type:'feed recieved',
	}, feed);
}

export function fetchFeed(url){
	return (dispatch)=>{
		Promise.resolve(url)
		.then((u)=>{
			dispatch(requestFeed(u));
			return u;
		}).then((u)=>{
            return (new ClusterfriendLoader()).loadFeed(url);
		}).then((feed)=>{
			dispatch(recieveFeed(feed))
		});
	};
}