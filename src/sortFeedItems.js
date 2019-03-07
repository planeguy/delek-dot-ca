export function sortFeedItems(l,r){
    let ldat = (l.date_published||''>l.date_modified||'')?l.date_published||'':l.date_modified||'';
    let rdat = (r.date_published||''>r.date_modified||'')?r.date_published||'':r.date_modified||'';
    return ldat<rdat?1:-1;
}