import newid from '../../vendor/newid.js';
import loadImage from '../../vendor/load-image.js';

<post-item>
    <style>
        .photo {
            border:solid blue 2px;
            min-width:10mm;
            min-height:10mm;
        }
        .wide-load>* {
            width:100%;
        }
    </style>
    <div class="editor">
        <form action="" method="POST" enctype="multipart/form-data">
            <div class="wide-load">
                <label for="text">TEXT</label><br/>
                <input name="content_text" id="content_text" type="text" oninput="{onInput}"/>
            </div>
            <div onclick="{onSelectPhoto}" class="looks-clickable wide-load">
                ADD PHOTO
            </div>
            <img each="" src="{photo}" class="photo"/>
            <div onclick="{onSelectPhoto}" class="looks-clickable wide-load">
                <label for="text">PHOTO</label><br/>
                <img src="{photo}" class="photo"/>
            </div>
            <input type="file" accept="image/*" name="itemphoto" id="itemphoto" ref="itemphoto" style="display:none" />
            <div><input type="submit" value="POST" /></div>
            <textarea name="feedtext" id="feedtext" ref="feedtext" rows="10" cols="40" ></textarea>
            <div><input type="reset" value="RESET" /></div>
        </form>
    </div>
    <script>
        //set up new item at top of feed
        let itemid = newid();
        this.feed=this.opts.feed.feed;
        this.item={
            id:itemid,
            url:this.opts.permaurl+'/#/'+itemid,
            content_text:'',
            attachments:[],
            '_items-management':{type:'ephemeral-rolling','max-items':25}
        }
        this.feed.items.unshift(this.item);
        this.photos=[];

        //when stuff changes update the feed text
        this.updateItem = ()=>{
            this.item.date_published=new Date();
            this.refs.feedtext.value=JSON.stringify(this.feed);
        }

        //when a text field is changed, update
        this.onInput = (e)=>{
            let id=e.currentTarget.id;
            this.item[id]=e.currentTarget.value;
            this.updateItem();
        }

        this.onSelectPhoto = (e)=>this.refs.itemphoto.click();

        this.on('mount',()=>{
            this.updateItem();
            this.refs.itemphoto.addEventListener('change',(e)=>{
                this.item.attachments=e.currentTarget.files.map(f=>(
                    {
                        url:this.opts.photosurl+'/'+f.name,
                        type:f.type
                    })
                );
                e.currentTarget.files.forEach((f)=>{
                    let purl = this.opts.photosurl+'/'+f.name;
                    if(this.items.attachments.filter(a=>a.url==purl).length===0){
                        loadImage(f).then((p)=>{
                            this.photos.push[p];
                        });
                        this.item.attachments.push({
                            url:purl,
                            type:f.type
                        });
                    }
                });
                this.updateItem();
                this.update();
            });
        });
    </script>
</post-item>
