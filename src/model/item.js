export default class Item {
    constructor(spec){
        this.pubDate = spec.pubDate;
        this.description = spec.description;
        this.link = spec.link;
        this.guid = spec.guid;
        this.enclosure = spec.enclosure;
        this.comments = spec.comments;
        
        //clusterfriend-specific
        this.re = spec.re;
        this.feel = spec.feel;
    }
};