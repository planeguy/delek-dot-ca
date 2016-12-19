const dflt = {
    feeds:[]
};
export default function site(state = dflt, action){
    switch(action.type){
        case 'receive feed':
        console.log('WHOA ' + action.feed.next);
            return Object.assign({},state,
            {
                feeds: [...state.feeds,action.feed.url],
                'end-of-feeds': (!action.feed.next),
                nextFeed: action.feed.next,
                'feed-requested': false
            });
        case 'request feed':
            return Object.assign({},state,{'feed-requested':true});
        default: return state;
    }
}