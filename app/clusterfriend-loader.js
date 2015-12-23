import poop from 'vendor/ajaxpoop';

function jsFromXhr(xhr, options){
	if(xhr.status<400) return new Promise((rs,rj)=>{rs(JSON.parse(xhr.response));}); 
}

class ClusterfriendLoader{
	load(profileUrl){
		//return a promise
		Promise.resolve(profileUrl)
		.then((url)=>poop(url).get())
		.then((profileXhr)=>poop((JSON.parse(profileXhr.response)).feed).get())
		//.then((feedXhr)=>)
	}
}