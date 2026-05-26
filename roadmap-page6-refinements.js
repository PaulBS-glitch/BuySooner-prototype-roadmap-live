/* BuySooner Roadmap Page 6 refinements */
(function(){
  function esc(v){return String(v==null?'':v).replace(/[&<>'"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c];});}
  function applyPage6Refinements(data,root){
    var d=data||{},c=d.customer||{};
    var customerName=String(c.name||'Customer').trim()||'Customer';
    var heading=root&&root.querySelector?root.querySelector('.rm6-map-intro h2'):null;
    if(heading){heading.innerHTML='<span>'+esc(customerName)+'</span>, let&rsquo;s map this out together&hellip;';}
  }
  function wrap(){
    if(!window.renderRoadmapPage6||window.renderRoadmapPage6.__bsRefined)return;
    var original=window.renderRoadmapPage6;
    window.renderRoadmapPage6=function(data,root){
      original(data,root);
      applyPage6Refinements(data,root);
    };
    window.renderRoadmapPage6.__bsRefined=true;
  }
  wrap();
  window.BSApplyPage6Refinements=applyPage6Refinements;
})();
