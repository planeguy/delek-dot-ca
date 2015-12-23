//import ajax from 'vendor/ajaxpoop';

let ajax = (x)=>{
	return {
	get:()=>{
		console.log('fake ajax '+x);
        
        var fakefeed = {
            items:[
                {
                    id:x+'#1',
                    poster:'http://delek.org/profile',
                    date:'20151214',
                    text:'hello'
                },{
                    id:x+'#2',
                    poster:'http://delek.org/profile',
                    date:'20151214',
                    text:'2',
                    link:'http://google.ca'
                },{
                    id:x+'#3',
                    poster:'http://delek.org/profile',
                    date:'20151214',
                    text:'3',
                    feeling:'like',
                    re:'1'
                }
            ]
        };
        
		return { response: JSON.stringify(fakefeed) };
	}}
};

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
			return ajax(u).get();
		}).then((xhr)=>{
            console.log(xhr.response);
			let f = JSON.parse(xhr.response);
			dispatch(recieveFeed(f))
		});
	};
}