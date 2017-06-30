import fetch from 'unfetch';
import cleanHash from './cleanHash.js';
import flatten from './flatten.js';
import route from 'riot-route';

export default class Feed{
    constructor(url){
        
        this.url = url||'feed.json';
        
        this.selecteditem = cleanHash(document.location.hash);
        this.items={};

        this.subscriptions={};
        this.subscribe('whoops',err=>console.log(err));

        this.load(this.url)
        .then(this.onLoaded.bind(this))
        .catch(this.onWhoops.bind(this));

        route(this.onSelected.bind(this));
        route.start();
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
            headers:{
                'Cache-Control':'max-age='+this.maxage
            },
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
        if(this.subscriptions['updated']!=undefined) this.subscriptions['updated'].forEach(s=>s());
    }

    onSelected(itemid){
        this.selecteditem=itemid;
        if(this.subscriptions['updated']!=undefined) this.subscriptions['updated'].forEach(s=>s());
    }

    onWhoops(err){
        this.whoops=true;
        if(this.subscriptions['whoops']!=undefined) this.subscriptions['whoops'].forEach(s=>s(err));
    }

    subscribe(ev,fn){
        if(this.subscriptions[ev]===undefined) this.subscriptions[ev]=[];
        this.subscriptions[ev].push(fn);
    }
}