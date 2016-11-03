import Item from './item';

export default class Feed {
    constructor(spec){
        this.guid = spec.guid;
        this.title = spec.title;
        this.description = spec.description;
        this.image = spec.image;
        
        this.items = spec.items;
        
        //clusterfriend-specific
        this.home = spec.home;
        this.next = spec.next;
    }
};