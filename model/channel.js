import Item from './item';

export default class Channel {
    constructor(spec){
        this.title = spec.title;
        this.description = spec.description;
        this.link = spec.link;
        this.image = spec.image;
        
        this.items = spec.items;
        
        //clusterfriend-specific
        this.id = spec.id;
        this.profile = spec.profile;
        this.isFull = spec.isFull;
    }
};