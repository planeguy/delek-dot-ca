import ajax from 'vendor/ajaxpoop';
import {cfFrom} from 'data/cf-rss';

import {createStore, combineReducers } from 'redux';

import channels from 'state/channels/reducer';
import items from 'state/items/reducer';

import riot from 'riot';
import 'components/clusterfriend-channel.tag!';

const clusterfriend = combineReducers({
    channels,
    items
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
    });
}


doIt('feed.xml');
riot.mount('clusterfriend-channel',{state:store.getState()});