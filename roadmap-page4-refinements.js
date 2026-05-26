/* BuySooner Roadmap Page 4 refinements */
(function(){
  function applyPage4Refinements(root){
    if(!root||!root.querySelector)return;

    var title=root.querySelector('.rm4-hero h1');
    if(title){title.innerHTML='What changes when you<br><span>stop chasing?</span>';}

    var heads=root.querySelectorAll('.rm4-compare-head');
    if(heads&&heads[0])heads[0].textContent='If you keep waiting';
    if(heads&&heads[1])heads[1].textContent='If you buy sooner';
  }

  function wrap(){
    if(!window.renderRoadmapPage4||window.renderRoadmapPage4.__bsPage4Refined)return;
    var original=window.renderRoadmapPage4;
    window.renderRoadmapPage4=function(data,root){
      original(data,root);
      applyPage4Refinements(root);
    };
    window.renderRoadmapPage4.__bsPage4Refined=true;
  }

  wrap();
  window.BSApplyPage4Refinements=applyPage4Refinements;
})();
