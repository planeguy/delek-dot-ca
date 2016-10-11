import Channel from 'src/model/channel';


function receiveChannelFromAjax(xhr){
    if(xhr.status>=400) throw new Error('http error ' + xhr.status);
    return {
        type: 'channel received',
        payload: {
            channel: new Channel(JSON.parse(xhr.response))
        } 
    };
}

function fakeAjaxReturn(more){
    return {
        status:200,
        response: JSON.stringify(Object.assign({id:1}, more||{}))
    };
}
function ajax(o){ return {
    get: ()=>fakeAjaxReturn(),
    post: (u)=>fakeAjaxReturn()
}};

function saveChannelPromise(channel){
    return ajax('post uri').post(channel)
    .then(receiveChannelFromAjax);
}

function getChannelPromise(uri){
    return ajax(uri).get()
    .then(receiveChannelFromAjax);
}

export function saveChannel(channel){
    return {
        type: 'save channel',
        payload: {
            promise: saveChannelPromise(channel),
            channel: channel
        }
    }
}

export function getChannel(uri){
    return {
        type:'get channel',
        payload: {
            promise: getChannelPromise(uri),
            uri:uri
        }
    };
}