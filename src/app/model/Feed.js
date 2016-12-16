import Item from './Item';

export default class Feed {
    constructor(spec){
        let s = spec||{};
        this.url = s.url;
        this.name = s.name;
        this['items-management']=s['items-management'];
        this.description = s.description;

        this.image = s.image;
        
        this.items = s.items;
    }
};