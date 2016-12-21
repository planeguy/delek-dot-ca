import {createStore, combineReducers } from 'redux';

import feeds from './state/feeds/reducer';
import items from './state/items/reducer';
import selectedItem from './state/selected-item/reducer';

import {cleanHash} from './clusterfriend-common';

const clusterfriend = combineReducers({
    feeds,
    items,
    selectedItem
});

export default class ClusterfriendSite {
    constructor(spec){
        this.store = createStore(clusterfriend);
        
        let s = spec || {};

        this.load(s.driver, cleanHash(document.location.hash));
        window.addEventListener('popstate', function() {
            this.load(s.driver, cleanHash(document.location.hash));
        });
    }

    subscribe(fn){
        this.store.subscribe(()=>{
            fn(this.store.getState());
        });
    }
    
    load(driver, selectedItemUrl){
        this.store.dispatch({
            type:'request feed'
        });
        driver.load().then((feed)=>{
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