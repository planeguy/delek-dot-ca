import Feed from './Feed.js';
import riot from 'riot';
import cleanHash from './cleanHash.js';
import './components/feed-app.tag';

let fd = new Feed(null,cleanHash(document.location.hash));
addEventListener('hashchange',()=>fd.onSelected(cleanHash(document.location.hash)));

document.addEventListener('DOMContentLoaded', 
    () => {
        riot.mount('feed-app', {
            feed: fd
        });
    }
);