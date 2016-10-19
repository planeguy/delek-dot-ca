export default function flatten(a=[], idSelector = (i)=>i.id){
    return a.reduce((f,i)=>{
        f[idSelector(i)] = i;
        return f;
    },{});
}