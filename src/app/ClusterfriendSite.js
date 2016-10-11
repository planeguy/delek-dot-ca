import ajax from '../vendor/ajaxpoop';
import {cfFrom} from '../data/cf-rss';

import {createStore, combineReducers } from 'redux';

import channels from '../state/channels/reducer';
import items from '../state/items/reducer';
import selectedItem from '../state/selected-item/reducer';

const clusterfriend = combineReducers({
    channels,
    items,
    selectedItem
});

export default class ClusterfriendSite {
    constructor(spec){
        
        this.store = createStore(clusterfriend);
        
        let s = spec || {};
        this.feedurl = s.feedurl || './feed.xml';
        if(!!s.subscription) this.store.subscribe(s.subscription);
    }
    
    loadFeed(){
        ajax(this.feedurl).errorOn((xhr)=>(xhr.status>399)).get()
        .then((xhr)=>{
            let cf = cfFrom(xhr.response, this.feedurl);
            this.store.dispatch({
                type:'receive channel',
                channel: cf
            });
            console.log(store.getState());
            
            this.store.dispatch({
                type:'select item',
                guid: 'http://chancedixon.ca/?p=173'
            });
        });
    }   
}