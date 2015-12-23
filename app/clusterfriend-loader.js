import poop from 'vendor/ajaxpoop';

function jsFromXhr(xhr, options){
	if(xhr.status<400) return new Promise((rs,rj)=>{rs(JSON.parse(xhr.response));}); 
}

export default class ClusterfriendLoader{
	loadProfile(profileUrl){
		//return a promise
		return Promise.resolve(profileUrl)
		.then((url)=>poop(url).get())
		.then((profileXhr)=>jsFromXhr(profileXhr))
	}
    loadFeed(feedUrl){
        return Promise.resolve(feedUrl)
		.then((url)=>poop(url).get())
		.then((feedXhr)=>jsFromXhr(feedXhr))
    }
}