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
        this.driver = s.driver;

        load(cleanHash(document.location.hash));
        window.addEventListener('popstate', function() {
            load(cleanHash(document.location.hash));
        });
    }

    here(){
        return window.location.protocol+'/'+window.location.host+window.location.pathname;
    }

    subscribe(fn){
        this.store.subscribe(()=>{
            fn(this.store.getState());
        });
    }
    
    load(selectedItemUrl){
        this.store.dispatch({
            type:'request feed'
        });
        this.driver.load().then((feed)=>{
            this.store.dispatch({
                type:'receive feed',
                feed
            });
            this.store.dispatch({
                type:'select item',
                url: selectedItemUrl
            });
        });
    }
}