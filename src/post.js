import riot from 'riot';
import 'src/components/post-item/post-item.tag!';
import 'bluebird';
import assign from 'object.assign';
assign.shim();


import ClusterfriendPoster from 'src/app/ClusterfriendPoster';
import loader from 'src/app/data/feed-loaders/AjaxJSONFeedLoader';
import Saver from 'src/app/data/feed-savers/AjaxJSONFeedSaver';

var p = new ClusterfriendPoster({
        base: window.location.protocol+'//'+window.location.host+window.location.pathname,
        home: window.location.protocol+'//'+window.location.host+window.location.pathname+'feed',
        loader: loader,
        saver: (new Saver({url: "http://testsave/"})).save,
    });
riot.mount('post-item', {
    poster: p
});