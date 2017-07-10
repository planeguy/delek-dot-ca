import Feed from './Feed.js';
import riot from 'riot';
import './components/feed-app.tag';

document.addEventListener('DOMContentLoaded', 
    () => {
        riot.mount('feed-app', {
            feed: new Feed()
        });
    }
);