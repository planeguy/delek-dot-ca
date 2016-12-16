export default class Item {
    constructor(spec){
        let s = spec||{};
        this.url = s.url;
        this.published = s.published;

        this.text = s.text;
        this.enclosure = s.enclosure;
        
        //clusterfriend-specific
        this.about = s.about;
        this.reply = s.reply;
        this.feels = s.feels;
        this['ephemeral-expiry']=s['ephemeral-expiry'];
    }
};