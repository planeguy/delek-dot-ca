export default class ClusterfriendPoster{
    constructor(s){
        let spec = s ||{};
        this.feedsBase = spec.feedsBase;
        this.photosBase = spec.photosBase;
        (new Promise((r,j)=>{r(spec.loader);})).then((l)=>{this.load=l;});
        (new Promise((r,j)=>{r(spec.saver);})).then((s)=>{this.save=s;});
        this.cached={};
    }

    getFeed(url){
        return this.load(url)
        .then((f)=>{
            this.cached[url]=f;
            return f;
        });
    }

    newid(){
        return 2;
    }

    feedidFromGuid(guid){
        let parts=guid.split('/');
        parts.pop();
        return parts.reduce((g,p)=>g+p,'');
    }

    saveFeed(feed){
        //call save api
        return this.save(feedidFromGuid(feed.guid), feed);
    }

    addItemToFeed(item, feed){
        if(feed.items.length >= MAX_ITEMS){
            let f = new Feed(Object.assign({},feed,{
                guid: this.feedsBase + this.newid(),
                next:feed.guid,
                items:[]
            }));
            return Promise.all([
                this.addItemToFeed(item,f),
                this.saveFeed(Object.assign({},this.cached[feed.home], {next:f.guid}))
            ]).then((fs)=>fs[0]);
        }
        if (!item.posted) item.posted = new Date();
        feed.items.unshift(item);
        return this.saveFeed(feed);
    }

    uploadPicture(file){
        return
    }

    post(item){
        return this.getFeed(this.home)
        .then((f)=>this.getFeed(f.next))
        .then((f)=>this.addItemToFeed(item,f));
    }
}