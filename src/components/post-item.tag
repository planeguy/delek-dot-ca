import newid from '../vendor/newid.js';
import loadImage from '../vendor/load-image.js';

<post-item>
    <style>
        .photo-list {
            display:flex;
            flex-flow:row wrap;
        }
        .photo {
            max-height:60vh;
            width:auto;
            flex: 0 0 auto;
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
            <input type="file" multiple="multiple" accept="image/*" name="itemphoto" id="itemphoto" ref="itemphoto" />
            <div class="photo-list">
                <img each="{photo in photos}" src="{photo}" class="photo"/>
            </div>
            <div><input type="submit" value="POST" /></div>
            <textarea name="feedtext" id="feedtext" ref="feedtext" rows="10" cols="40" ></textarea>
            <div><input type="reset" value="RESET" /></div>
        </form>
    </div>
    <script>
        //set up new item at top of feed
        let itemid = newid();
        this.feed=this.opts.feed;
        this.item={
            id:itemid,
            url:this.opts.permaurl+'/#/'+itemid,
            content_text:'',
            attachments:[]
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

        this.addPhoto=(photoFile)=>{
            let purl = this.opts.photosurl+'/'+photoFile.name;
            loadImage(photoFile).then((p)=>{
                this.photos=[...this.photos, p];
                this.update();
                console.log('photo loaded');
                console.log(this.photos);
                console.log(p);
            }).catch(err=>console.log(err));
            this.item.attachments.push({
                url:purl,
                type:photoFile.type
            });
        }

        this.on('mount',()=>{
            this.updateItem();
            this.refs.itemphoto.addEventListener('change',((e)=>{
                this.item.attachments=[];
                this.photos=[];
                for(let i=0;i<e.currentTarget.files.length;i++){
                    this.addPhoto(e.currentTarget.files[i]);
                }
                this.updateItem();
            }).bind(this));
        });
    </script>
</post-item>
