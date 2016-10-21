import riot from 'riot';
import 'src/components/clusterfriend-app.tag!';
import 'bluebird';
import assign from 'object.assign';
assign.shim();


import ClusterfriendSite from 'src/app/ClusterfriendSite';
import ajaxFeedLoader from 'src/app/data/feed-loaders/AjaxFeedLoader';


riot.mount('clusterfriend-app', {
    site: new ClusterfriendSite({
        loader: ajaxFeedLoader
    })
});