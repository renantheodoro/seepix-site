$(document).ready(function(){
  var itemAtivo = 0;
  var animationJumpTime;
  var animationRestartTime;
  var availability = true;

  setTimeout(function(){
    $('#banner-thumb-items li:first-child').addClass('entra');
  }, 100);
  setTimeout(initAnimation, 1200);

  // Inicia animação
  function initAnimation() {
    if( availability ) {
      animation();
      return 0;
    } else {
      initAnimation();
    }
  }

  // Animação
  function animation() {
    itemAtivo++;

    // console.log(itemAtivo);

    if( itemAtivo == 1 || itemAtivo > 5 ) {
      itemAtivo = 1;
    }

    // mudando a imagem principal
    changeImage(itemAtivo);

    $('#banner-thumb-items li').removeClass('jump active');

    $('#banner-thumb-items li:nth-child('+ itemAtivo +')').addClass('active');

    setTimeout(function(){
      $('#banner-thumb-items li').removeClass('entra');
    }, 1000);

    animationJumpTime = setTimeout(function(){
      // animação de pulo depois de 6 segs
      $('#banner-thumb-items li.active').addClass('jump').removeClass('active');

      if( itemAtivo == 5 ) {
        $('#banner-thumb-items li:first-child').addClass('entra');
      }

      animationRestartTime = setTimeout(initAnimation, 1000);
    }, 6000);

  }

  // Troca imagem principal
  function changeImage(position) {
    var srcImg = $('#banner-thumb-items li:nth-child('+ position +') img').attr('src');
    $('#banner-contents li').removeClass('active');
    $('#banner-contents li:nth-child('+ position +')').addClass('active');
    $('#banner-thumb-items li').removeClass('jump');
  }

  // Para animação
  function stopAnimation() {
    clearInterval(animationJumpTime);
    clearInterval(animationRestartTime);
    $('#banner-thumb-items li').removeClass('entra jump active');
    availability = false;
  }

  // Mouse over das thumbs
  $('#banner-thumb-items a').mouseover(function(){
    stopAnimation();
    itemAtivo = $(this).closest('li').attr('rel');
    changeImage(itemAtivo);
  });

  // Mouse over das thumbs
  $('#banner-thumb-items a').mouseout(function(){
    stopAnimation();
    availability = true;
    itemAtivo = $(this).closest('li').attr('rel') - 1;
    initAnimation();
  });

});
