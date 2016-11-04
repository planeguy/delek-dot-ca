import {createStore, combineReducers } from 'redux';

import feeds from 'src/app/state/feeds/reducer';
import items from 'src/app/state/items/reducer';
import selectedItem from 'src/app/state/selected-item/reducer';
import site from 'src/app/state/site/reducer';

import {cleanHash, getFeedFromHash} from 'src/app/clusterfriend-common';

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

        this.base = spec.base + (spec.base[spec.base.length-1]=='/'?'':'/') || this.here();
        
        this.open(document.location.hash);
        window.addEventListener('popstate', function() {
            this.open(document.location.hash);
        });
    }

    here(){
        return window.location.protocol+'//'+window.location.host+'/'+window.location.pathname;
    }

    subscribe(fn){
        this.store.subscribe(()=>{
            fn(this.store.getState());
        });
    }
    
    loadFeed(feedGuid=this.base+'feed'){
        console.log(this.base);
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