import Croppie from 'croppie';

<new-item>
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
        .new-item .photo-list {
            display:flex;
            flex-flow:row nowrap;
        }

        .new-item .photo-list>* {
            height:45vh;
            width:45vh;
            flex: 0 0 auto;
        }

        .new-item .uploader {
            display:flex;
            flex-flow:column nowrap;
        }
        .new-item .uploader>* {
            flex: 1 0 auto;
            align-self:center;
        }

        .new-item .uploader .cropper {
            height:45vh;
            width:45vh;
        }

    </style>
    <div class="new-item">
        <div class="field">
            <label for="text">TEXT</label>
            <input name="content_text" id="content_text" type="text" oninput="{onInput}"/>
        </div>
        <div class="field">
            <label for="text">PICTURES</label>
            <!-- 
                <input type="file" multiple="multiple" accept="image/*" name="itemphoto[]" id="itemphoto" ref="itemphoto" />
            -->
            <div class="uploader">
                <input type="file" id="photopick" ref="photopick" value="pick a photo" accept="image/*" />
                <div ref="cr"></div>
                <p>{cropping}</p>
            </div>
            <input type="hidden" name="photonames[]" id="photonames" ref="photonames" each="{pn in photonames}" value="{pn}">
            <input type="hidden" name="photos[]" id="photos" each="{photo in photos}" value="{photo}">
        </div>
        <div class="field">
            <label for="external_url">URL</label>
            <input name="external_url" id="external_url" type="text" oninput="{onInput}"/>
        </div>
    </div>
    <script>
        this.photos=[];
        this.photonames=[];

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

        this.onSelectPhoto = (e)=>this.refs.photopick.click();

        this.setCroppedPhoto=(file,cropper)=>{
            let purl = this.opts.photosurl+'/'+file.name+'.jpeg';
            this.photonames=[file.name+'.jpeg'];
            this.opts.item.attachments = [{
                url:purl,
                mime_type:'image/jpeg'
            }];
            this.updateItem();
            cropper.result({
                type:'base64',
                size:{
                    width:3366,
                    height:3366
                },
                format:'jpeg'
            }).then((p)=>{
                this.photos=[p];
                this.cropping='finished';
                this.update();
            });
        };

        this.readFile=(input,cropper,cropperelement)=>{
 			if (input.files && input.files[0]) {
	            var reader = new FileReader();
	            
	            reader.onload = ((e)=>{
	            	cropper.bind({
	            		url: e.target.result
	            	}).then(()=>{
                        this.setCroppedPhoto(input.files[0],cropper);
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
	        else {
		        swal("Sorry - you're browser doesn't support the FileReader API");
		    }
        }

        this.on('mount',()=>{
            this.updateItem();
            this.cropper=new Croppie.Croppie(this.refs.cr,{
                customClass:'cropper',
                viewport:{
                    width:250,
                    height:250
                },
                enableExif: true
            });
            this.refs.photopick.addEventListener('change',((e)=>{
                this.readFile(e.currentTarget, this.cropper, this.refs.cr);
            }).bind(this));
        });
    </script>
</new-item>
