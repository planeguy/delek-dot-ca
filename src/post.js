import './components/post-item/post-item.tag';
import 'bluebird';
import assign from 'object.assign';
assign.shim();


import ClusterfriendPoster from './app/ClusterfriendPoster';
import loader from './app/data/feed-loaders/AjaxJSONFeedLoader';
import Saver from './app/data/feed-savers/AjaxJSONFeedSaver';
import getOAuth2Token from './vendor/getOAuth2Token';

riot.mount('post-item', {
    poster: new ClusterfriendPoster({
        base: window.location.protocol+'//'+window.location.host+window.location.pathname,
        loader: loader,
        saver: (new Saver({
            url: 'http://127.0.0.1:1337/'.anchor,
            token: getOAuth2Token('http://127.0.0.1:1337/token', 'ZGVsZWs6dGVzdA==')
        })).save,
    }),
    imagepath: 'http://127.0.0.1:1337/photos'
});