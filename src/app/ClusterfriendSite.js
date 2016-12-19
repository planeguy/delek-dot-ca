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

        this.feed = s.feed || this.here()+'/feed';

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
    
    loadFeed(feedUrl=this.feed){
        console.log(feedUrl);
        this.store.dispatch({
            type:'request feed'
        });
        this.loader(feedUrl).then((feed)=>{
            this.store.dispatch({
                type:'receive feed',
                feed
            });
        });
    }

    open(hash){
        let f = cleanHash(hash);
        this.loadFeed(f);
        if(!!f) this.selectItemByUrl(f);
    }

    selectItemByUrl(url){
        this.store.dispatch({
            type:'select item',
            url
        });
    }
}