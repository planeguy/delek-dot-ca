import {fetchProfile} from 'profile/actions';
import {requestItem} from 'item/actions';

import feed from 'feed/reducer';
import items from 'items/reducer';
import item from 'item/reducer';
import people from 'people/reducer';

import {combineReducers, createStore, applyMiddleware} from 'vendor/es5/redux.min';
import thunk from 'vendor/redux-thunk';

const createStoreWithMiddleware = applyMiddleware(
	thunk
)(createStore);

let store = createStoreWithMiddleware(combineReducers({
	feed, items, item, people
}));

export default function startMain(mainAppTag, opts){
	riot.mount(mainAppTag, Object.assign({}, opts, {store}));
	store.dispatch(fetchProfile('123', {fetchFeed:true}));
	//store.dispatch(requestItem('123', '2'));
}