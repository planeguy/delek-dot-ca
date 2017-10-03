import fetch from 'unfetch';
import flatten from './flatten.js';

export default class Feed{
    constructor(url, selected){
        
        this.url = url||'feed.json';

        this.items={};
        this.selecteditem = selected;

        this.subscriptions={};
        this.subscribe('whoops',err=>console.log(err));

        this.load(this.url)
        .then(this.onLoaded.bind(this))
        .catch(this.onWhoops.bind(this));        
    }

    checkResponseStauts(r){
        if (response.ok) {
            return response;
        } else {
            var error = new Error(response.statusText);
            error.response = response;
            return Promise.reject(error);
        }
    }

    cachebuster(){
        return '?cachebuster='+(new Date()).valueOf().toString();
    }

    load(url){
        return fetch(url,{
            credentials: 'include'
        }).then(this.checkResponseStatus)
        .then(r=>r.json());
    }

    sortItems(l,r){
        let ldat = (l.date_published||''>l.date_modified||'')?l.date_published||'':l.date_modified||'';
        let rdat = (r.date_published||''>r.date_modified||'')?r.date_published||'':r.date_modified||'';
        return ldat<rdat?1:-1;
    }

    onLoaded(feed){
        console.log('feed::onLoaded');
        console.log(feed);
        this.feed=feed;
        this.items=flatten(feed.items);
        this.itemsorder=[...feed.items].sort(this.sortItems).map(i=>i.id);
        this.publish('updated');
    }

    onSelected(itemid){
        this.selecteditem=itemid;
        this.publish('updated');
    }

    onWhoops(err){
        this.whoops=true;
        this.publish('whoops');
    }

    subscribe(ev,fn){
        if(this.subscriptions[ev]===undefined) this.subscriptions[ev]=[];
        this.subscriptions[ev].push(fn);
    }
    publish(ev){
        if(this.subscriptions[ev]!=undefined) this.subscriptions[ev].forEach(s=>s());
    }
}