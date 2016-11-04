export default class Item {
    constructor(spec){
        this.guid = spec.guid;
        this.published = spec.published;
        this.description = spec.description;
        this.enclosure = spec.enclosure;
        
        //clusterfriend-specific
        this.about = spec.about;
        this.re = spec.re;
        this.feel = spec.feel;
    }
};