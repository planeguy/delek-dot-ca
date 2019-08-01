<script>
    import Croppie from 'croppie';
    import { onMount } from 'svelte';
    import {ULID} from './ulid-es6.js';
    import fetch from 'unfetch';

    export let postingendpoint;
    let newitemform;

    let pics=[], thumbs=[], tags=[], syndicate_to=[];
    let cropper, cropperhost, croppedimage;

    let newid = ULID();
    let postpromise=Promise.resolve({});
    let poststate = null;

    onMount(()=>{
        cropper = new Croppie(cropperhost,{
            customClass:'cropper',
            viewport:{ width:250, height:250 },
            boundary:{ width:300, height:300 },
            showZoomer: false,
            enableExif: true
        });
    });

    function removeDataUrl(data){
        let splitted = data.split('base64,');
        splitted.shift();
        return splitted.join('');
    }

    function blobToBase64(file){
        return new Promise((resolve, reject) => {
            var fr = new FileReader();  
            fr.onload = ()=>{
                resolve(fr.result);
            };  // CHANGE to whatever function you want which would eventually call resolve
            fr.readAsDataURL(file);
        });
    }

    function addThumb(name, blob){
        blobToBase64(blob)
        .then(b64=>{
            thumbs=[...thumbs, {name, data:b64}];
        });
    }

    async function addPhoto(){
        let cropped = await cropper.result({
            type:'blob',
            size:{
                width:3366,
                height:3366
            },
            quality:0.9
        });
        let na = newid();
        addThumb(na,cropped);
        pics = [...pics,{na, data:cropped}];
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

    async function post(){
        let fd = new FormData(newitemform);
        pics.forEach(p=>{
            fd.append('photo',p.data);
            fd.append('photoname',p.name);
        });
        let r = await fetch(postingendpoint, {
            method:'POST',
            body:fd,
            credentials:'include'
        });
        if(!r.ok) throw new Error(`Post Error ${r.status}`);
        return await r.json();
    }

    function submitPost(e){
        e.preventDefault();
        poststate='posting';
        post();
        poststate='posted';
    }
    
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

.new-item .field.uploader {
    min-height:300px;
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
.new-item .uploader .cropper {
    height:300px;
    flex-basis: 100%;
}

.new-item .pics {
    display:flex;
    justify-content: center;
    align-items: center;
    min-height:300px;
}

.new-item .pics>*{
    flex: 0 1 auto;
    max-height:250px;
    max-width:250px;
}

.new-item button.add-photo {
    height:200px;
    width:200px;
}

.new-item button.post{
    font-size: xx-large;
    padding:2em;
    margin-top:3em;
    border:0.5em solid black;
}

</style>

<form id="new-item-form" class="new-item" bind:this="{newitemform}" method="POST" enctype="multipart/form-data" on:submit="{submitPost}">
    <div class="field">
        <label for="text">TEXT</label>
        <input name="content" id="content" type="text"/>
    </div>
    <div class="field">
        <label for="photopick">PICTURES</label>
        <div class="uploader">
            <input type="file" id="photopick" accept="image/*" on:change={onChangePhotoInput} />
            <div class="cropper" bind:this="{cropperhost}"></div>
        </div>
        <div class="pics">
            {#each thumbs as pic}
            <img class="pic" src="{pic.data}" alt="{pic.name}">
            {/each}
            <button class="add-photo" type="button" on:click="{addPhoto}">ADD</button>
        </div>
        <!-- {#each pics as pic}
        <input type="hidden" name="photo[]" id="photo" value="{pic.data}">
        {/each} -->
    </div>
    <!-- <div class="field">
        <label for="external_url">URL</label>
        <input name="external_url" id="external_url" type="text"/>
    </div> -->
    <div class="field">

        <button class="post">JUST POST</button>
        {#if poststate}<p>{poststate}</p>{/if}
    </div>
</form>