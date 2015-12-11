class Feed{
	constructor(init){
		this.id = init.id || (new Date()).getTime();
		this.items = init.items || {};
		this.prev = init.prev;
		this.next = init.next;
	}
}

export default Feed;