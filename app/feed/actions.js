//import ajax from 'vendor/ajaxpoop';

let ajax = (x)=>{
	return {
	get:()=>{
		console.log('fake ajax '+x);
		var fakestore = {
            feed: {
                items:['1','2','3']
            },
            items:{
                '1':{
                    poster:'http://delek.org/profile',
                    date:'20151214',
                    text:'hello'
                },
                '2':{
                    poster:'http://delek.org/profile',
                    date:'20151214',
                    text:'2',
                    link:'http://google.ca'
                },
                '3':{
                    poster:'http://delek.org/profile',
                    date:'20151214',
                    text:'3',
                    feeling:'like',
                    re:'1'
                }
            },
            people:{
                'http://delek.org/profile': 'Delek'
            }
        };
		return { response: JSON.stringify(fakestore) };
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