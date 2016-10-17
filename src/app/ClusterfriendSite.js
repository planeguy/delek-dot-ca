import ajax from 'src/vendor/ajaxpoop';
import {cfFrom, rssFrom} from 'src/data/cf-rss';

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
        this.feedurl = s.feedurl || 'feed.xml';
        if(!!s.subscription) this.store.subscribe(()=>{
            s.subscription(this.store.getState())
        });
    }
    
    loadFeed(){
        console.log('loading ' + this.feedurl);
        ajax('./'+this.feedurl).header('Cache-Control','NO-CACHE').errorOn((xhr)=>(xhr.status>399)).get()
        .then((xhr)=>{
            let cf = cfFrom(xhr.response, this.feedurl);
            this.store.dispatch({
                type:'receive channel',
                channel: cf
            });
        });
    }

    selectItemById(id){
        console.log(id);
        console.log('selecting '+ (location.origin|| (location.origin = location.protocol + "//" + location.host)) + "/#/" + this.feedurl+'/'+id);
        this.store.dispatch({
            type:'select item',
            guid: (location.origin|| (location.origin = location.protocol + "//" + location.host)) + "/#/" + this.feedurl+'/'+id
        });
    }

    selectItemByGuid(guid){
        this.store.dispatch({
            type:'select item',
            guid: guid
        });
    }
}