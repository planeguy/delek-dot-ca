import riot from 'riot';
import './components/clusterfriend-app.tag';
import 'bluebird';
import assign from 'object.assign';
assign.shim();


import ClusterfriendSite from './app/ClusterfriendSite';
import loader from './app/data/feed-loaders/AjaxJSONFeedLoader';

riot.mount('clusterfriend-app', {
    site: new ClusterfriendSite({
        loader: loader
    })
});