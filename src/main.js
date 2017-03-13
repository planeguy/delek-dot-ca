import riot from 'riot';
import './components/clusterfriend-app.tag';

import assign from 'object.assign';
assign.shim();


import ClusterfriendSite from './app/ClusterfriendSite';
import Driver from './app/data/drivers/AjaxDriver';

document.addEventListener('DOMContentLoaded', 
    () => riot.mount('clusterfriend-app', {
        site: new ClusterfriendSite({
            driver: new Driver({
                feed: settings.feedurl
            })
        })
    })
);