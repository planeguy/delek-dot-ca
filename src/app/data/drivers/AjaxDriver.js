import FeedDriver from '../FeedDriver';
import {cfFrom} from '../../data/json-cf';
import fetch from 'unfetch';

function checkResponseStauts(r){
    if (response.ok) {
        return response;
    } else {
        var error = new Error(response.statusText);
        error.response = response;
        return Promise.reject(error);
    }
}

export default class AjaxDriver extends FeedDriver {
    constructor(loadOptions, saveOptions){
        super(loadOptions, saveOptions);
        this.current = this.loadOptions['feed'];
        this.next;
        this.maxage=this.loadOptions.maxage||3600; //an hour
    }
    checkResponseStauts(r){
        if (response.ok) {
            return response;
        } else {
            var error = new Error(response.statusText);
            error.response = response;
            return Promise.reject(error);
        }
    }
    gotJSON(json){
        let cf = cfFrom(json);
        if (!!cf['items-management']['paged']) this.next = cf['items-management']['paged']['prev'];
        return cf;
    }
    load(){
        return fetch(this.current,{
            headers:{
                'Cache-Control':'max-age='+this.maxage
            },
            credentials: 'include'
        }).then(this.checkResponseStatus)
        .then(r=>r.json())
        .then(this.gotJSON);
    }
    loadNext(){
        if (!this.next) return (new Promise((s,j)=>j(new Error('No next feed'))));
        this.current=this.next;
        return this.load();
    }
}