import FeedDriver from '../FeedDriver';
import ajax from '../../../vendor/ajaxpoop';
import {cfFrom} from '../../data/json-cf';

export default class AjaxDriver extends FeedDriver {
    constructor(loadOptions, saveOptions){
        super(loadOptions, saveOptions);
        this.current = this.loadOptions['feed'];
        this.next;
    }
    load(){
        return ajax(this.current)
        .errorOn((xhr)=>(xhr.status>399))
        .header('Cache-Control','no-cache')
        .get()
        .then((xhr)=>{
            let cf = cfFrom(xhr.response);
            if (!!cf['items-management']['paged']) this.next = cf['items-management']['paged']['prev'];
            return cf;
        });
    }
    loadNext(){
        if (!this.next) return (new Promise((s,j)=>j(new Error('No next feed'))));
        this.current=this.next;
        return this.load();
    }
}