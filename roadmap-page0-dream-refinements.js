/* BuySooner Roadmap Page 0A refinements */
(function(){
  function applyDreamRefinements(root){
    if(!root||!root.querySelector)return;
    Array.prototype.slice.call(root.querySelectorAll('.rmdream-strip-icon')).forEach(function(icon){
      if(icon&&icon.parentNode){icon.parentNode.removeChild(icon);}
    });
    var styleId='roadmap-dream-refinements-style';
    if(!document.getElementById(styleId)){
      var s=document.createElement('style');
      s.id=styleId;
      s.textContent='.rmdream-strip-item{grid-template-columns:1fr!important;gap:0!important;text-align:left!important;padding:20px 28px!important;min-height:96px!important}.rmdream-strip-copy{max-width:220px!important}.rmdream-strip-copy strong{font-size:18px!important}.rmdream-strip-copy span{font-size:14.5px!important}.rmdream-strip.is-visible .rmdream-strip-icon{animation:none!important}@media(max-width:900px){.rmdream-strip-item{padding:18px 20px!important}.rmdream-strip-copy{max-width:none!important}}';
      document.head.appendChild(s);
    }
  }
  function wrap(){
    if(!window.renderRoadmapDreamPage||window.renderRoadmapDreamPage.__bsDreamRefined)return;
    var original=window.renderRoadmapDreamPage;
    window.renderRoadmapDreamPage=function(data,root){
      original(data,root);
      applyDreamRefinements(root);
    };
    window.renderRoadmapDreamPage.__bsDreamRefined=true;
  }
  wrap();
  window.BSApplyDreamRefinements=applyDreamRefinements;
})();
