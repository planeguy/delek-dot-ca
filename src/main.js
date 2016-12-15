//import riot from 'riot'; //don't include riot it magically appears when using the loaders
import './components/clusterfriend-app.tag';

import 'bluebird';
import assign from 'object.assign';
assign.shim();


import ClusterfriendSite from './app/ClusterfriendSite';
import loader from './app/data/feed-loaders/AjaxJSONFeedLoader';

document.addEventListener('DOMContentLoaded', () => riot.mount('clusterfriend-app', {
    site: new ClusterfriendSite({
        loader: loader
    })
}));