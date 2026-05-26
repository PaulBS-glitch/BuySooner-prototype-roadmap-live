/* BuySooner Roadmap Page 8 refinements */
(function(){
  function esc(v){return String(v==null?'':v).replace(/[&<>'"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c];});}
  function titleCaseCaps(value){
    return String(value||'').replace(/\b([A-Z]{2,})\b/g,function(m){return m.charAt(0)+m.slice(1).toLowerCase();});
  }
  function formatAddress(value){
    var s=String(value||'').trim();
    if(!s)return '';
    s=s.replace(/\s*,\s*/g,', ');
    s=s.replace(/^(Unit\s+\d+)\s+(\d+\s+)/i,'$1, $2');
    return titleCaseCaps(s);
  }
  function applyPage8Refinements(data,root){
    if(!root||!root.querySelector)return;
    var d=data||{},c=d.customer||{},p=d.property||{};
    var customerName=String(c.name||c.fullName||'Customer').trim()||'Customer';
    var address=formatAddress(p.address||'');
    var suburb=formatAddress(p.suburb||'');
    var target=address||suburb;

    var exampleStrong=root.querySelector('.rm8-example strong');
    if(exampleStrong){
      exampleStrong.innerHTML=esc(customerName)+(target?' &mdash; '+esc(target):'');
    }
    var exampleSpan=root.querySelector('.rm8-example span');
    if(exampleSpan){
      exampleSpan.textContent='Using your target price, savings, estimated bank loan and BuySooner Boost.';
    }

    var takeaway=root.querySelector('.rm8-takeaway p');
    if(takeaway){
      takeaway.textContent='Stop waiting, start owning, and move closer to the home and area you want. Buying sooner can help you redirect rent into ownership and start building equity earlier.';
    }
  }
  function wrap(){
    if(!window.renderRoadmapPage8||window.renderRoadmapPage8.__bsPage8Refined)return;
    var original=window.renderRoadmapPage8;
    window.renderRoadmapPage8=function(data,root){
      original(data,root);
      applyPage8Refinements(data,root);
    };
    window.renderRoadmapPage8.__bsPage8Refined=true;
  }
  wrap();
  window.BSApplyPage8Refinements=applyPage8Refinements;
})();
