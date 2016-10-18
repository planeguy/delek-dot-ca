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
        this.loader = s.loader || {};
        if(!!s.subscription) this.store.subscribe(()=>{
            s.subscription(this.store.getState())
        });
    }
    
    loadFeed(){
        this.loader.load().then((channel)=>{
            this.store.dispatch({
                type:'receive channel',
                channel
            });
        });
    }

    selectItemById(id){
        this.store.dispatch({
            type:'select item',
            guid: (location.origin|| (location.origin = location.protocol + "//" + location.host)) + "/#/" + this.loader.base + this.loader.feed +'/'+id
        });
    }

    selectItemByGuid(guid){
        this.store.dispatch({
            type:'select item',
            guid: guid
        });
    }
}