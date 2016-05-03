import ajax from 'vendor/ajaxpoop';
import {cfFrom} from 'data/cf-rss';

import {createStore, combineReducers } from 'redux';

import channels from 'state/channels/reducer';
import items from 'state/items/reducer';
import selectedItem from 'state/selected-item/reducer';

import riot from 'riot';
import 'components/clusterfriend-app.tag!';
import 'components/clusterfriend-channel.tag!';
import 'components/clusterfriend-item.tag!';

const clusterfriend = combineReducers({
    channels,
    items,
    selectedItem
});

let store = createStore(clusterfriend); 

function doIt(rssurl){
    ajax(rssurl).errorOn((xhr)=>(xhr.status>399)).get()
    .then((xhr)=>{
        let cf = cfFrom(xhr.response, rssurl);
        store.dispatch({
            type:'receive channel',
            channel: cf
        });
        console.log(store.getState());
        
        store.dispatch({
            type:'select item',
            guid: 'http://chancedixon.ca/?p=173'
        });
    });
}

const feedurl = 'feed.xml';

riot.mount('clusterfriend-app',{store:store, feed:feedurl});
doIt(feedurl);
