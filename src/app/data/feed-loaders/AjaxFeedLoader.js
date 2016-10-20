import ajax from 'src/vendor/ajaxpoop';
import {cfFrom} from 'src/app/data/cf-rss';

export default class AjaxFeedLoader{
    constructor(spec){
        let s = spec || {};
        this.feed = s.feed || 'feed.xml';
        this.base = s.base || '';
    }
    load(){
        return ajax(this.base + this.feed).header('Cache-Control','NO-CACHE').errorOn((xhr)=>(xhr.status>399)).get()
        .then((xhr)=>{
            let cf = cfFrom(xhr.response, this.feed);
            return cf;
        });
    }
}