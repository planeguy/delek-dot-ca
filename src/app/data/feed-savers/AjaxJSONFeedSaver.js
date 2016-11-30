import ajax from 'src/vendor/ajaxpoop';
import {cfFrom} from 'src/app/data/json-cf';

export default class AjaxJSONFeedSaver{
    constructor(s){
        let spec = s||{};
        this.url=spec.url;
    }
    save(name, feed){
        return ajax(this.url+'/'+name).errorOn((xhr)=>(xhr.status>399)).post(feed)
        .then((xhr)=>{
            return cfFrom(xhr.response, name);
        });
    }
}