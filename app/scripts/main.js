console.log('\'Allo \'Allo!'); // eslint-disable-line no-console

jQuery("#wowslider-container").wowSlider(
  {
    effect:"rotate",
    prev:"",
    next:"",
    duration:20*100,
    delay:20*100,
    width:580,
    height:212,
    autoPlay:true,
    stopOnHover:false,
    loop:false,
    bullets:true,
    caption:true,
    captionEffect:"blur",
    controls:true,
    logo:"",
    images:0
  }
);
