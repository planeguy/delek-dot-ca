import ajax from 'src/vendor/ajaxpoop';
import getOAuth2Token from 'src/vendor/getOAuth2Token';
import {cfFrom} from 'src/app/data/json-cf';

export default class AjaxJSONFeedSaver{
    constructor(s){
        let spec = s||{};
        this.url=spec.url;
        (new Promise((r,j)=>{r(spec.token);})).then((t)=>{this.token=t;});
    }
    save(name, feed){
        return ajax(this.url+'/'+name)
        .header('Authorization',this.token['token_type']+' '+this.token['access_token'])
        .errorOn((xhr)=>(xhr.status>399))
        .post(feed)
        .then((xhr)=>{
            return cfFrom(xhr.response, name);
        });
    }
}