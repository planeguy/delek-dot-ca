import Item from 'src/app/model/Item';
import ajax from 'src/vendor/ajaxpoop';
import loadImage from 'src/vendor/load-image';

<post-item>
<div class="post-item">
    <label for="text">TEXT</label>
    <input type="text" id="text" oninput="{oninputtext}"/>
    <label for="about">ABOUT</label>
    <input type="url" id="about" oninput="{oninputtext}"/>
    <label for="reply">REPLY TO</label>
    <input type="url" id="reply" oninput="{oninputtext}"/>

    <div class="post-item__picture">
        <div class="post-item__picture__select">
            <label for="choosePicture">
                <span>GALLERY PHOTO</span>
                <input id="choosePicutre" type="file" accept="image/*" onchange="{onchangepicture}"/>
            </label>
            <label for="takePicture">
                <span>NEW PHOTO</span>
                <input id="takePicture" type="file" accept="image/*" onchange="{onchangepicture}" capture/><br/>
            </label>
        </div>
        <img src="{picture}" class="post-item__picture__image"/>
    </div>

    <label for="feels">FEELS</label>
    <input type="text" id="feels" oninput="{oninputtext}" list="feels-list"/>
    <datalist id="feels-list">
        <option>like</option>
        <option>dislike</option>
        <option>buckle up</option>
        <option>fffffart</option>
    </datalist>
    <button onclick="{postitem}" id="post-button">POST</button>
</div>
<script>
    this.item = new Item();
    this.picture = null;
    this.picturefile = null;

    this.oninputtext = (e)=>{
        this.item[e.currentTarget.id]=e.value;
    };
    this.onchangepicture = (e)=>{
        this.picturefile = e.currentTarget.files[0]; 
        loadImage(e.currentTarget.files[0])
        .then((data)=>{
            this.picture=data;
            this.update();
        }).catch((err)=>{
            this.picture=undefined;
            this.picturefile = undefined;
            this.update();
        });
    }

    function newid(){
        return 2;
    }

    this.postitem = (e)=>{
        ajax(this.opts.imagepath+'/'+newid()).header('Content-Type',this.picturefile.type).post(this.picturefile)
        .then((xhr)=>{
            let i=xhr.getResponseHeader('Location');
            if(!!i) {
                this.item.enclosure={
                    type:this.picturefile.type,
                    url:i
                }
            }
            return this.opts.poster.post(this.item).bind(this.opts.poster); 
        }).then((feed)=>{
            console.log('posted');
        });
    }
</script>

</post-item>