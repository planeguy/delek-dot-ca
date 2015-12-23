import {fetchFeed} from 'feed/actions';
import ClusterfriendLoader from 'clusterfriend-loader';

function requestProfile(url){
	return {
		type:"request profile",
		url:url
	};
}

function receiveProfile(profile){
	return Object.assign({},{
		type:'profile recieved',
	}, profile);
}

export function fetchProfile(url, options){
	return (dispatch)=>{
		Promise.resolve(url)
		.then((u)=>{
			dispatch(requestProfile(u));
			return u;
		}).then((u)=>{
			return (new ClusterfriendLoader()).loadProfile(url);
		}).then((profile)=>{
			dispatch(receiveProfile(profile));
            if(options && options.fetchFeed) dispatch(fetchFeed(profile.feed));
		});
	};
}