//import ajax from 'vendor/ajaxpoop';
import {fetchFeed} from 'feed/actions';

let ajax = (x)=>{
	return {
	get:()=>{
		console.log('fake ajax '+x);
        
        var fakeprofile = {
            id:x,
            name:'delek',
            feed:'http://delek.org/feeds/1'
        };
        
		return { response: JSON.stringify(fakeprofile) };
	}}
};

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
			return ajax(u).get();
		}).then((xhr)=>{
            console.log(xhr.response);
			let p = JSON.parse(xhr.response);
			dispatch(receiveProfile(p));
            if(options && options.fetchFeed) dispatch(fetchFeed(p.feed));
		});
	};
}