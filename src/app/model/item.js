export default class Item {
    constructor(spec){
        this.pubDate = spec.pubDate;
        this.description = spec.description;
        this.link = spec.link;
        this.guid = spec.guid;
        this.enclosure = spec.enclosure;
        
        //clusterfriend-specific
        this.image = spec.image;
        this.about = spec.about;
        this.re = spec.re;
        this.feel = spec.feel;
    }
};