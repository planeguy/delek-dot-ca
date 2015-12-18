import {fetchFeed} from 'feed/actions';
import feed from 'feed/reducer';
import items from 'items/reducer';

import {combineReducers, createStore, applyMiddleware} from 'vendor/es5/redux.min';
import thunk from 'vendor/redux-thunk';
import riot from 'vendor/es5/riot.min';

const createStoreWithMiddleware = applyMiddleware(
	thunk
)(createStore);

let store = createStoreWithMiddleware(combineReducers({
	feed, items
}));

export default ()=>{
	console.log('DO IT');
	riot.mount('*');
	store.dispatch(fetchFeed('123'));
}