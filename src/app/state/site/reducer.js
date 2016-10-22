const dflt = {
    channels:[]
};
export default function site(state = dflt, action){
    switch(action.type){
        case 'receive channel':
            let s = Object({},state);
            s.channels = ([]
                .concat(state.channels))
                .concat([action.channel.id]);
            return s;
        default: return state;
    }
}