var drawGrid = function(gridSize) {
  var width = $('.canvas').width()/gridSize;
  var height = width;
  
  $('div.row').remove();

  for(var i = 0; i < gridSize; i++) {
    $('.canvas').append('<div class="row row-'+i+'"></div>');
    for(var j = 0; j < gridSize; j++) {
      $('.row-'+i+'').append('<div class="block col-'+j+'"></div>');
    } 
  }

  $('.row').css({height});
  $('.block').css({width, height});
  
  $('.block').on('mouseenter', function() {
    $(this).addClass('filled');
  });

  $('#erase').on('click', function() {
    $('.filled').removeClass('filled');
  });
};

drawGrid(32);

$('#drawing-area').submit(function(event) {
  drawGrid(66- $('#block-size').val());
  event.preventDefault();
});

$('#color').submit(function() {
  $("head").append('<style type="text/css"></style>');
  var newStyleElement = $("head").children(':last');
  newStyleElement.html('.filled{background:'+$('#color-value').val()+';}');
});