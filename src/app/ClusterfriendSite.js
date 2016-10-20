import {createStore, combineReducers } from 'redux';

import channels from 'src/app/state/channels/reducer';
import items from 'src/app/state/items/reducer';
import selectedItem from 'src/app/state/selected-item/reducer';

import {makeItemId} from 'src/app/clusterfriend-common';

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
            guid: makeItemId(location, this.loader.base, this.loader.feed ,id)
        });
    }

    selectItemByGuid(guid){
        this.store.dispatch({
            type:'select item',
            guid: guid
        });
    }
}