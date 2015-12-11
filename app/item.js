class Item{
	constructor(init){
		this.date = init.date || (new Date());
		this.id = init.id || this.date.getTime();
		
		this.poster = init.poster;
		this.text = init.text;
		this.image = init.image;
		this.link = init.link;
		this.re = init.re;
		this.feeling = init.feeling;
		this.sgroup = init.sgroup;
		this.sdata = init.sdata; 
	}
}

export default Item;