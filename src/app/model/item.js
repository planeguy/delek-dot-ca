export default class Item {
    constructor(spec){
        let s = spec||{};
        
        this.guid = s.guid;
        this.published = s.published;
        this.text = s.text;
        this.enclosure = s.enclosure;
        
        //clusterfriend-specific
        this.about = s.about;
        this.reply = s.reply;
        this.feels = s.feels;
    }
};