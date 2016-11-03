import {createStore, combineReducers } from 'redux';

import feeds from 'src/app/state/feeds/reducer';
import items from 'src/app/state/items/reducer';
import selectedItem from 'src/app/state/selected-item/reducer';
import site from 'src/app/state/site/reducer';

import {makeItemId, parseRoute} from 'src/app/clusterfriend-common';

const clusterfriend = combineReducers({
    feeds,
    items,
    selectedItem,
    site
});

export default class ClusterfriendSite {
    constructor(spec){
        this.store = createStore(clusterfriend);
        
        let s = spec || {};
        this.loader = s.loader || ((b,f)=>{});
        
        this.open(document.location.hash);
        window.addEventListener('popstate', function() {
            this.open(document.location.hash);
        });
    }

    subscribe(fn){
        this.store.subscribe(()=>{
            fn(this.store.getState());
        });
    }
    
    loadFeed(base='',id='feed.xml'){
        this.loader(base,id).then((feed)=>{
            this.store.dispatch({
                type:'receive feed',
                feed
            });
        });
    }

    open(route){
        let feedInfo = parseRoute(route);
        this.loadFeed(feedInfo.base,feedInfo.feed);
        if(!!feedInfo.id) this.selectItemById(feedInfo.base,feedInfo.feed,feedInfo.id);
    }

    selectItemById(base='',feed='feed.xml',id){
        this.selectItemByGuid(makeItemId(location, base, feed ,id));
    }

    selectItemByGuid(guid){
        this.store.dispatch({
            type:'select item',
            guid: guid
        });
    }

    loadNext(base=''){
        let state = this.store.getState();
        if(state.site.nextFeed) this.loadFeed(base,state.site.nextFeed);
    }
}