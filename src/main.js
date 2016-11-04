import riot from 'riot';
import 'src/components/clusterfriend-app.tag!';
import 'bluebird';
import assign from 'object.assign';
assign.shim();


import ClusterfriendSite from 'src/app/ClusterfriendSite';
import loader from 'src/app/data/feed-loaders/AjaxJSONFeedLoader';


riot.mount('clusterfriend-app', {
    site: new ClusterfriendSite({
        loader: loader,
        base:'http://127.0.0.1:8080'
    })
});