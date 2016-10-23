const dflt = {
    channels:[]
};
export default function site(state = dflt, action){
    switch(action.type){
        case 'receive channel':
            return Object.assign({},state,
            {
                channels: ([]
                    .concat(state.channels))
                    .concat([action.channel.id]),
                'end-of-channels': (!action.channel.next),
                nextChannel: action.channel.next,
                'channel-requested': false
            });
        case 'request channel':
            return Object.assign({},state,{'channel-requested':true});
        default: return state;
    }
}