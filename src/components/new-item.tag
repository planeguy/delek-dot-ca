import loadImage from '../vendor/load-image.js';

<new-item>
    <style>
        .new-item {
            border:double 2vmin black;
            margin: 1em;
            padding: 2em;
            display:flex;
            flex-flow:column;
            justify-content:center;
            align-items:center;
        }
        .new-item .field {
            flex: 1 1 auto;
            align-self:stretch;
        }
        .new-item .field>* {
            width:100%;
        }
        .new-item .photo-list {
            display:flex;
            flex-flow:row wrap;
        }
        .new-item .photo-list .photo {
            max-height:45vh;
            width:auto;
            flex: 0 0 auto;
        }
    </style>
    <form action="" method="POST" class="new-item" enctype="multipart/form-data">
        <div class="field">
            <label for="text">TEXT</label>
            <input name="content_text" id="content_text" type="text" oninput="{onInput}"/>
        </div>
        <div class="field">
            <label for="text">PICTURES</label>
            <input type="file" multiple="multiple" accept="image/*" name="itemphoto[]" id="itemphoto" ref="itemphoto" />
            <div class="photo-list">
                <img each="{photo in photos}" src="{photo}" class="photo"/>
            </div>
        </div>
        <div class="field">
            <label for="external_url">URL</label>
            <input name="external_url" id="external_url" type="text" oninput="{onInput}"/>
        </div>
        <input type="submit" value="POST" />
    </form>
    <script>
        this.photos=[];
        this.updateItem=()=>{
            this.opts.item.date_published=new Date();
            this.opts.updatefeed();
        }

        //when a text field is changed, update
        this.onInput = (e)=>{
            let id=e.currentTarget.id;
            this.opts.item[id]=e.currentTarget.value;
            this.updateItem();
        }

        this.onSelectPhoto = (e)=>this.refs.itemphoto.click();

        this.addPhoto=(photoFile)=>{
            let purl = this.opts.photosurl+'/'+photoFile.name;
            this.opts.item.attachments.push({
                url:purl,
                mime_type:photoFile.type
            });
            return loadImage(photoFile).then((p)=>{
                this.photos=[...this.photos, p];
                this.update();
            });
        }

        this.on('mount',()=>{
            this.updateItem();
            this.refs.itemphoto.addEventListener('change',((e)=>{
                this.opts.item.attachments=[];
                this.photos=[];
                for(let i=0;i<e.currentTarget.files.length;i++){
                    this.addPhoto(e.currentTarget.files[i])
                    .then(this.updateItem.bind(this));
                }
            }).bind(this));
        });
    </script>
</new-item>
