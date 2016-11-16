import Item from './Item';

export default class Feed {
    constructor(spec){
        let s = spec||{};
        this.guid = s.guid;
        this.title = s.title;
        this.description = s.description;
        this.image = s.image;
        
        this.items = s.items;
        
        //clusterfriend-specific
        this.home = s.home;
        this.next = s.next;
    }
};