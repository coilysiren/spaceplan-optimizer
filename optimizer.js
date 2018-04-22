function sigFigs(n, sig) {
  var mult = Math.pow(10, sig - Math.floor(Math.log(n) / Math.LN10) - 1);
  return Math.round(n * mult / mult);
}

function update_stats(){
  $('#manufacture__container .manufacture__item, #manufacture__container .manufacture__item--locked').each(function() {
    cost = $(this).find("#cost").text().replace(/\,/g,'');
    income = $(this).find("#powerGain").text().replace(/\,/g,'').replace('w/sec','');
    ROI = sigFigs(cost / income, 2);
    $(this).find(".ROI").text(` ${ROI} secs`);
  });
}

function add_ROI(){
  $('#manufacture__container .manufacture__item #costLine, #manufacture__container manufacture__item--locked #costLine').each(function() {
    if ($(this).text().includes('secs') == false) {
      $(this).append("<span class='ROI'> working...</span>");
    }
  });
}

function work(){
  add_ROI();
  update_stats();
}

function setup() {
  work();
  $(document).click(function() {work();});
}

function load_jQuery(callback) {
  if ( window.jQuery )
    return callback();

  var jQuery_element_ID = 'spaceplan-optimizer-jquery';
  
  if ( !document.getElementById(jQuery_element_ID) ) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js';
    script.id = jQuery_element_ID;

    document.getElementsByTagName('head')[0].appendChild(script);
  }

  window.setTimeout(function() { load_jQuery(callback); }, 100);
}

load_jQuery(setup);
