//import riot from 'riot'; //don't include riot it magically appears when using the loaders
import './components/post-item/post-item.tag';

import assign from 'object.assign';
assign.shim();

import Driver from './app/data/drivers/AjaxDriver';

document.addEventListener('DOMContentLoaded', 
    () => (new Driver({feed:settings.feedurl})).load().then((feed)=>
        riot.mount('post-item', {
            feedurl:settings.feedurl,
            feed,
            photosurl:settings.photosurl
        })
    )
);