function copydom(dom, classes){
    var cp = dom.cloneNode(true);
    cp.id = cp.id+'_copy';
    cp.className=' '+classes;
    dom.parentNode.insertBefore(cp,dom);
}