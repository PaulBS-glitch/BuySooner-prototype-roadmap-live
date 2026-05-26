/* BuySooner Roadmap Page 1 refinements */
(function(){
  function esc(v){return String(v==null?'':v).replace(/[&<>'"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c];});}
  function formatAddress(value){
    var s=String(value||'').trim();
    if(!s)return '';
    s=s.replace(/\s*,\s*/g,', ');
    s=s.replace(/\b([A-Z]{2,})\b/g,function(m){return m.charAt(0)+m.slice(1).toLowerCase();});
    s=s.replace(/^(Unit\s+\d+)\s+(\d+\s+)/i,'$1, $2');
    return s;
  }
  function normaliseLocation(value){
    return String(value||'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
  }
  function buildLocation(property){
    var p=property||{};
    var address=formatAddress(p.address||p.propertyAddress||p.targetAddress||p.targetPropertyAddress||'');
    var suburb=formatAddress(p.suburb||p.targetSuburb||p.targetArea||p.preferredSuburb||p.targetLocation||p.area||'');
    var addressNorm=normaliseLocation(address);
    var suburbNorm=normaliseLocation(suburb);
    if(address&&suburb&&suburbNorm&&addressNorm.indexOf(suburbNorm)===-1){
      return {text:address+', '+suburb, preposition:'at'};
    }
    if(address){return {text:address, preposition:'at'};}
    if(suburb){return {text:suburb, preposition:'in'};}
    return {text:'', preposition:'at'};
  }
  function applyPage1Refinements(data,root){
    if(!root||!root.querySelector)return;
    var d=data||{},c=d.customer||{},p=d.property||{};
    var customerName=String(c.name||c.fullName||'Customer').trim()||'Customer';

    var heroHeading=root.querySelector('.rm-hero h1');
    if(heroHeading){heroHeading.textContent='Welcome Home,';}

    var heroSubheading=root.querySelector('.rm-hero h2');
    if(heroSubheading){
      heroSubheading.classList.add('rm-page1-subheader');
      heroSubheading.innerHTML='<span class="rm-page1-name-highlight">'+esc(customerName)+'</span>, this is your Personalised Path to Ownership.';
    }

    var heroBody=root.querySelector('.rm-hero p');
    if(heroBody){
      heroBody.textContent='Discover your strategy to buy sooner, with a clear deposit bridge and a defined refinance pathway.';
    }

    var location=buildLocation(p);
    var intro=root.querySelector('.rm-intro-lede');
    if(intro){
      intro.innerHTML='This tailored plan shows how you can move from the property chase into your own home'+(location.text?' '+location.preposition+' <strong>'+esc(location.text)+'</strong>':'')+'.';
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
      s.textContent='.rm-hero h1{margin-bottom:10px!important}.rm-hero>div{max-width:820px!important;padding-right:72px!important}.rm-page1-subheader{margin:0 0 10px!important;color:#071f3a!important;font-size:25px!important;line-height:1.2!important;font-weight:900!important;letter-spacing:-.02em!important}.rm-page1-name-highlight{color:#087a78!important}.rm-hero p{max-width:760px!important;font-size:17px!important;line-height:1.45!important}.rm-intro-lede{max-width:860px!important}.rm-step{min-height:286px!important}.rm-step h3{margin-bottom:8px!important}.rm-step-line{margin:0 auto;max-width:260px;color:#526071;font-size:14.6px;line-height:1.35;font-weight:760;text-align:center}@media(max-width:900px){.rm-hero>div{padding-right:0!important}.rm-page1-subheader{font-size:22px!important}.rm-hero p{font-size:16px!important}.rm-step{min-height:auto!important}}';
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
