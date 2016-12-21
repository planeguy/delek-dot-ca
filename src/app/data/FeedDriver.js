import moment from 'moment';

// get on your horse and ride
export default class FeedStore {
    constructor(s){
        let spec = s || {}
        this.loadOptions=spec.loadOptions;
        this.saveOptions=spec.saveOptions;
    }
    load(){
        return new Promise((s,j)=>s(new Feed({
            url: 'http://127.0.0.1',
            name: 'De Fault',
            description: 'The greatest two words in social media',
            'items-management':{
                ttl: moment.duration('P2W')
            }
        })));
    }
    loadNext(){
        return new Promise((s,j)=>j(new Error('Not implemented')));
    }
    save(feed){
        return new Promise((s,j)=>s(feed));
    }
}