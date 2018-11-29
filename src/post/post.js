import Feed from '../Feed.js';
import riot from 'riot';
import '../scss/index.css';
import './components/edit-app.tag';

document.addEventListener('DOMContentLoaded',
    () => {
        riot.mount('edit-app', {
            feed: new Feed('../feed.json'),
            photosurl: settings.photosurl,
            permaurl: settings.permaurl
        });
    }
);