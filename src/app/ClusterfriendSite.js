import {createStore, combineReducers } from 'redux';

import feeds from './state/feeds/reducer';
import items from './state/items/reducer';
import selectedItem from './state/selected-item/reducer';
import site from './state/site/reducer';

import {cleanHash, getFeedFromHash} from './clusterfriend-common';

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

        this.base = s.base || this.here();
        if (this.base[this.base.length-1]!='/') this.base += '/';

        this.open(document.location.hash);
        window.addEventListener('popstate', function() {
            this.open(document.location.hash);
        });
    }

    here(){
        return window.location.protocol+'//'+window.location.host+window.location.pathname;
    }

    subscribe(fn){
        this.store.subscribe(()=>{
            fn(this.store.getState());
        });
    }
    
    loadFeed(feedGuid=this.base+'feed'){
        console.log(feedGuid);
        this.loader(feedGuid).then((feed)=>{
            this.store.dispatch({
                type:'receive feed',
                feed
            });
        });
    }

    open(hash){
        let f = getFeedFromHash(hash);
        this.loadFeed(f);
        let clean = cleanHash(hash);
        if(!!clean) this.selectItemByGuid(clean);
    }

    selectItemByGuid(guid){
        this.store.dispatch({
            type:'select item',
            guid: guid
        });
    }

    loadNext(){
        let state = this.store.getState();
        if(state.site.nextFeed) this.loadFeed(state.site.nextFeed);
    }
}