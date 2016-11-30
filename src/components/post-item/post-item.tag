import Item from 'src/app/model/Item';

<post-item>
<div class="post-item">
    <label for="text">TEXT</label>
    <input type="text" id="text" oninput="{oninputtext}"/>
    <label for="about">ABOUT</label>
    <input type="url" id="about" oninput="{oninputtext}"/>
    <label for="reply">REPLY TO</label>
    <input type="url" id="reply" oninput="{oninputtext}"/>

    <div class="post-item__picture">
        <label for="choosePicture">
            <span>GALLERY PHOTO</span>
            <input id="choosePicutre" type="file" accept="image/*" onchange="{onchangepicture}"/>
        </label>
        <label for="takePicture">
            <span>NEW PHOTO</span>
            <input id="takePicture" type="file" accept="image/*" onchange="{onchangepicture}" capture/><br/>
        </label>
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

    this.oninputtext = (e)=>{
        this.item[e.currentTarget.id]=e.value;
    };
    this.onchangepicture = (e)=>{

    }

    this.postitem = (e)=>{
        this.opts.poster.post(this.item).bind(this.opts.poster);
    }
</script>

</post-item>