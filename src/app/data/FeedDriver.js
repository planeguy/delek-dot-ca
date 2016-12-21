import moment from 'moment';

// get on your horse and ride
export default class FeedStore {
    constructor(loadOptions, saveOptions){
        (new Promise((s,j)=>s(loadOptions))).then((o)=>(this.loadOptions=o));
        (new Promise((s,j)=>s(saveOptions))).then((o)=>(this.saveOptions=o));
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