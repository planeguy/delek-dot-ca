<script>
    import Croppie from 'croppie';
    import swal from 'sweetalert';

    export let photosurl='';

    let content_text='',
        external_url = '',
        photos=[];

    let cropperHost = docuemnt.getElementById('cr');
    let cropper=new Croppie.Croppie(cropperHost,{
        customClass:'cropper',
        viewport:{
            width:250,
            height:250
        },
        showZoomer: false,
        enableExif: true
    });

    function addPhoto(file){
        let purl = photosurl+'/'+file.name+'.jpeg';
        this.photonames=[file.name+'.jpeg'];
        this.opts.item.attachments = [{
            url:purl,
            mime_type:'image/jpeg'
        }];
        let cropped = await cropper.result({
            type:'base64',
            size:{
                width:3366,
                height:3366
            },
            format:'jpeg',
            quality:0.8
        });
        photos.push({
            name:file.name+'.png',
            photo:cropped
        });
    };

    function readFile (input){
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            
            reader.onload = ((e)=>{
                cropper.bind({
                    url: e.target.result
                }).then(()=>{
                    setCroppedPhoto(input.files[0],cropper);
                    console.log('bind complete');
                    cropperelement.addEventListener('update',((ev)=>{
                        this.cropping='cropping';
                        this.update();
                        if(this.cropwait) {
                            clearTimeout(this.cropwait);
                        }
                        this.cropwait=setTimeout(()=>{
                            console.log('croppie changed');
                            this.setCroppedPhoto(input.files[0],cropper);
                        }, 1500);
                    }).bind(this));
                });
            }).bind(this);
            reader.readAsDataURL(input.files[0]);
        }
    }

    function onChangePhotoInput(e){
        readFile(e.currentTarget);
    };
    
</script>

<div class="new-item">
    <div class="field">
        <label for="text">TEXT</label>
        <input name="content_text" id="content_text" type="text" bind:value={content_text}/>
    </div>
    <div class="field">
        <label for="text">PICTURES</label>                
        <div class="uploader">
            <input type="file" id="photopick" value="pick a photo" accept="image/*" on:change={onChangePhotoInput} />
            <div id="cr"></div>
            <button>ADD</button>
        </div>
        {#each photos as photo}
        <input type="hidden" name="photonames[]" id="photonames" value="{photo.name}">
        <input type="hidden" name="photos[]" id="photos" value="{photo.photo}">
        <img src="data:image/png;base64,{photo.photo}">
        {/each}
    </div>
    <div class="field">
        <label for="external_url">URL</label>
        <input name="external_url" id="external_url" type="text" bind:value={external_url}/>
    </div>
</div>