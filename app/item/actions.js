export function requestItem(feedurl, id){
	return (dispatch) => {
			dispatch({
				type: 'request item',
				'feed-url':feedurl,
				id:id
			});
	}
}