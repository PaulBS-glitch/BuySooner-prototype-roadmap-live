/* BuySooner Roadmap Page 1 refinements */
(function(){
  function esc(v){return String(v==null?'':v).replace(/[&<>'"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c];});}
  function firstTwoNames(fullName){
    var parts=String(fullName||'').trim().split(/\s+/).filter(Boolean);
    if(parts.length>=2)return parts[0]+' and '+parts[1];
    return parts[0]||'you';
  }
  function formatAddress(value){
    var s=String(value||'').trim();
    if(!s)return '';
    s=s.replace(/\s*,\s*/g,', ');
    s=s.replace(/\b([A-Z]{2,})\b/g,function(m){return m.charAt(0)+m.slice(1).toLowerCase();});
    s=s.replace(/^(Unit\s+\d+)\s+(\d+\s+)/i,'$1, $2');
    return s;
  }
  function applyPage1Refinements(data,root){
    if(!root||!root.querySelector)return;
    var d=data||{},c=d.customer||{},p=d.property||{};
    var customerName=String(c.name||c.fullName||'Customer').trim()||'Customer';
    var heroName=root.querySelector('.rm-hero h1 span');
    if(heroName){heroName.textContent=customerName+'.';}

    var address=formatAddress(p.address||'');
    var suburb=formatAddress(p.suburb||'');
    var target=address||suburb||'';
    var intro=root.querySelector('.rm-intro-lede');
    if(intro){
      intro.innerHTML='This tailored plan shows how you can move from the property chase into your own home'+(target?' at <strong>'+esc(target)+'</strong>':'')+'.';
    }

    var pathwayLines=[
      'BuySooner helps cover the missing deposit piece.',
      'You own the home and start building equity sooner.',
      'A clear pathway to your long-term bank loan.',
      'BuySooner steps out when the numbers work.'
    ];
    Array.prototype.slice.call(root.querySelectorAll('.rm-step')).forEach(function(card,i){
      if(card.querySelector('.rm-step-line'))return;
      var h3=card.querySelector('h3');
      if(h3&&pathwayLines[i]){
        var p=document.createElement('p');
        p.className='rm-step-line';
        p.textContent=pathwayLines[i];
        h3.insertAdjacentElement('afterend',p);
      }
    });

    var styleId='roadmap-page1-refinements-style';
    if(!document.getElementById(styleId)){
      var s=document.createElement('style');
      s.id=styleId;
      s.textContent='.rm-hero h1 span{font-size:.64em!important;white-space:nowrap!important;line-height:1.02!important}.rm-hero>div{max-width:780px!important;padding-right:72px!important}.rm-intro-lede{max-width:860px!important}.rm-step{min-height:286px!important}.rm-step h3{margin-bottom:8px!important}.rm-step-line{margin:0 auto;max-width:260px;color:#526071;font-size:14.6px;line-height:1.35;font-weight:760;text-align:center}@media(max-width:900px){.rm-hero h1 span{white-space:normal!important;font-size:.72em!important}.rm-hero>div{padding-right:0!important}.rm-step{min-height:auto!important}}';
      document.head.appendChild(s);
    }
  }
  function wrap(){
    if(!window.renderRoadmapPage1||window.renderRoadmapPage1.__bsPage1Refined)return;
    var original=window.renderRoadmapPage1;
    window.renderRoadmapPage1=function(data,root){
      original(data,root);
      applyPage1Refinements(data,root);
    };
    window.renderRoadmapPage1.__bsPage1Refined=true;
  }
  wrap();
  window.BSApplyPage1Refinements=applyPage1Refinements;
})();
