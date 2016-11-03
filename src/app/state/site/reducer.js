const dflt = {
    feeds:[]
};
export default function site(state = dflt, action){
    switch(action.type){
        case 'receive feed':
            return Object.assign({},state,
            {
                feeds: ([]
                    .concat(state.feeds))
                    .concat([action.channel.guid]),
                'end-of-feeds': (!action.channel.next),
                nextFeed: action.channel.next,
                'feed-requested': false
            });
        case 'request feed':
            return Object.assign({},state,{'feed-requested':true});
        default: return state;
    }
}