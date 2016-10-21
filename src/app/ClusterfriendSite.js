import {createStore, combineReducers } from 'redux';

import channels from 'src/app/state/channels/reducer';
import items from 'src/app/state/items/reducer';
import selectedItem from 'src/app/state/selected-item/reducer';

import {makeItemId, parseRoute} from 'src/app/clusterfriend-common';

const clusterfriend = combineReducers({
    channels,
    items,
    selectedItem
});

export default class ClusterfriendSite {
    constructor(spec){
        this.store = createStore(clusterfriend);
        
        let s = spec || {};
        this.loader = s.loader || ((i)=>{});
        
        this.loadFeed(parseRoute(document.location.hash));
        window.addEventListener('popstate', function() {
            this.loadFeed(parseRoute(document.location.hash));
        });
    }

    subscribe(fn){
        this.store.subscribe(()=>{
            fn(this.store.getState());
        });
    }
    
    loadFeed(i){
        this.loader(i).then((channel)=>{
            this.store.dispatch({
                type:'receive channel',
                channel
            });
        });
        if(!!i.id) this.selectItemByFeedInfo(i);
    }

    selectItemByFeedInfo(i){
        this.store.dispatch({
            type:'select item',
            guid: makeItemId(document.location, i.base, i.feed, i.id)
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