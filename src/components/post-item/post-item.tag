import Item from 'src/app/model/Item';

<post-item>
<div>
    <input type="text" id="text" oninput="{oninputtext}"/>
    <input type="url" id="about" oninput="{oninputtext}"/>
    <input type="url" id="re" oninput="{oninputtext}"/>

    <div class="postitem-picture">
        <label for="choosePicture">
            <input id="choosePicutre" type="file" accept="image/*" onchange="{onchangepicture}"/>
            GALLERY PHOTO
        </label>
        <label for="takePicture">
            <input id="takePicture" type="file" accept="image/*" onchange="{onchangepicture}" capture/>
            TAKE PHOTO
        </label>
    </div>

    <input type="text" id="feels" oninput="oninputtext" list="feels-list"/>
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
    this.onchangepicture(e)=>{

    }

    this.postitem = (item){
        this['post-button'].enabled=false;
        post(item).then(()=>{
            this['post-button'].enabled=true;
        });
    }
</script>

</post-item>