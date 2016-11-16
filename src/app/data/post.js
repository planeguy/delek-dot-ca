const MAX_ITEMS = 20;

export default function post(item, homefeed, loader, saver, guidpattern, saveapi){
    let home;
    load(homefeed)
    .then((h)=>{ 
        home = h;
        return load(home.next)
    }).then((f)=>{
        if(f.items.length>=MAX_ITEMS){
            let yep = new Feed(f);
            yep.items=[item];
            yep.next=f.guid;
            yep.guid=hogan(guidpattern,{guid:newid()});
            home.next=yep.guid;
            return new Promise.all([
                save(saveapi,yep),
                save(saveapi,f),
                save(saveapi,home)
            ]);
        } else {
            f.items.unshift(item);
            return save(saveapi,f);
        }
    }).then((res)=>{
        return 0;
    }).catch((err)=>{
        return err;
    });
}