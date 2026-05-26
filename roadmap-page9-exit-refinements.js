/* BuySooner Roadmap Page 9 exit-path refinements */
(function(){
  function applyPage9ExitRefinements(root){
    if(!root||!root.querySelector)return;

    var hero=root.querySelector('.rm9-hero');
    if(hero){
      var h1=hero.querySelector('h1');
      var h2=hero.querySelector('h2');
      if(h1)h1.textContent='Your Exit Path';
      if(h2)h2.textContent='BuySooner is your stepping stone to homeownership, not a forever loan.';
    }

    var refi=root.querySelector('.rm9-refi-card');
    if(refi){
      var firstText=refi.querySelector('.rm9-refi-text');
      if(firstText){
        firstText.textContent='Once a standard bank is ready to take over the full position, BuySooner is repaid, steps out, and you move to a traditional mortgage.';
      }
    }

    var tracks=root.querySelectorAll('.rm9-track');
    if(tracks&&tracks[0]){
      var p0=tracks[0].querySelector('p');
      if(p0)p0.textContent='We track your position against the refinance pathway and show whether you are moving closer to a standard bank loan.';
    }
    if(tracks&&tracks[1]){
      var p1=tracks[1].querySelector('p');
      if(p1)p1.textContent='At Year 3, we check if the numbers are ready. If the market is moving slower, your bridge safely continues within your exit window.';
    }

    var estimateCopy=root.querySelector('.rm9-estimate p');
    if(estimateCopy){
      estimateCopy.textContent=String(estimateCopy.textContent||'').replace(
        'A broker would review lender options, valuation, income, repayments and policy settings before confirming whether refinance is workable.',
        'Your broker would review lender options, valuation, income and repayments to confirm whether refinance is workable.'
      );
    }
  }

  function wrap(){
    if(!window.renderRoadmapPage9||window.renderRoadmapPage9.__bsExitRefined)return;
    var original=window.renderRoadmapPage9;
    window.renderRoadmapPage9=function(data,root){
      original(data,root);
      applyPage9ExitRefinements(root);
      setTimeout(function(){applyPage9ExitRefinements(root);},0);
      setTimeout(function(){applyPage9ExitRefinements(root);},100);
      setTimeout(function(){applyPage9ExitRefinements(root);},250);
    };
    window.renderRoadmapPage9.__bsExitRefined=true;
  }

  wrap();
  window.BSApplyPage9ExitRefinements=applyPage9ExitRefinements;
})();
