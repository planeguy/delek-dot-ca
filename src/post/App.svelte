<script>
    import Croppie from 'croppie';
    import { onMount } from 'svelte';
    import {ULID} from './ulid-es6.js';
    
    let content_text='', external_url = '';
    let pics=[], tags=[], syndicate_to=[];
    let cropper, cropperhost, croppedimage;

    let newid = ULID();

    onMount(()=>{
        cropper = new Croppie(cropperhost,{
            customClass:'cropper',
            viewport:{ width:250, height:250 },
            showZoomer: false,
            enableExif: true
        });
    });

    function removeDataUrl(data){
        let splitted = data.split('base64,');
        splitted.shift();
        return splitted.join('');
    }

    async function addPhoto(){
        let cropped = await cropper.result({
            type:'base64',
            size:{
                width:3366,
                height:3366
            }
        });
        croppedimage=cropped;
        pics = [...pics,{name:newid(), data:cropped}];
    };

    function readFile (input){
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = (async (e)=>{
                await cropper.bind({
                    url: e.target.result
                });
            });
            reader.readAsDataURL(input.files[0]);
        }
    }

    function onChangePhotoInput(e){
        readFile(e.currentTarget);
    };
    
</script>

<svelte:head>
    <link rel="stylesheet" href="./croppie.css"/>
</svelte:head>

<style>
.new-item {
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

.new-item .uploader {
    display:flex;
    flex-flow:column nowrap;
    min-height:300px;
    max-height:50vh;
}
.new-item .uploader>* {
    flex: 0 0 auto;
    align-self:center;
}

.new-item .pics {
    display:flex;
    justify-content: center;
    align-items: center;
    min-height:250px;
}

.new-item .pics>*{
    flex: 0 1 auto;
    max-height:250px;
    max-width:250px;
}

</style>

<div class="new-item">
    <div class="field">
        <label for="text">TEXT</label>
        <input name="content_text" id="content_text" type="text" bind:value={content_text}/>
    </div>
    <div class="field">
        <label for="text">PICTURES</label>
        <div class="uploader">
            <input type="file" id="photopick" accept="image/*" on:change={onChangePhotoInput} />
            <div class="cropper" style="flex-basis:100%;" bind:this="{cropperhost}"></div>
            <button on:click="{addPhoto}">ADD</button>
        </div>
        <div class="pics">
            {#each pics as pic}
            <img class="pic" src="{pic.data}" alt="{pic.name}">
            {/each}
        </div>
        {#each pics as pic}
        <input type="hidden" name="photonames[]" id="photonames" value="{pic.name}">
        <input type="hidden" name="photos[]" id="photos" value="{removeDataUrl(pic.data)}">
        {/each}
    </div>
    <div class="field">
        <label for="external_url">URL</label>
        <input name="external_url" id="external_url" type="text" bind:value={external_url}/>
    </div>
</div>