import Feed from './Feed.js';
import riot from 'riot';
import './components/feed-app.tag';

document.addEventListener('DOMContentLoaded', 
    () => {
        riot.mount('edit-app', {
            feed: new Feed()
        });
    }
);