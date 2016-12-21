import FeedDriver from '../FeedDriver';
import ajax from '../../../vendor/ajaxpoop';
import {cfFrom} from '../../data/json-cf';

export default class AjaxDriver extends FeedDriver {
    constructor(s){
        super(s);
    }
    load(){
        return ajax(this.loadOptions['feed'])
        .errorOn((xhr)=>(xhr.status>399))
        .get()
        .then((xhr)=>cfFrom(xhr.response));
    }
}