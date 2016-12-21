import Duration from 'date-duration';

// get on your horse and ride
export default class FeedStore {
    constructor(loadOptions, saveOptions){
        this.loadOptions=loadOptions;
        this.saveOptions=saveOptions;
    }
    load(){
        return new Promise((s,j)=>s(new Feed({
            url: 'http://127.0.0.1',
            name: 'De Fault',
            description: 'The greatest two words in social media',
            'items-management':{
                ttl: Duration('P2W')
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