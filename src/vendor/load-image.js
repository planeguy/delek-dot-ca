export default function read(f){
    return new Promise((resolve, reject)=>{
        let reader = new FileReader();
        reader.onload = (e)=>{
            resolve(e.target.result);
        }
        reader.readAsDataURL(f);
    });
}
