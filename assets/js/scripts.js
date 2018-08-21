(function(){
  // loading
  setTimeout(function(){
    $('#loading').addClass('out');
  }, 4000);
  // loading out
  setTimeout(function(){
    $('#loading').remove();
  }, 5000);

  // open menu
  $(document).on('click', '#openMenu', function(){
    $('body').addClass('openMenu');
    $('#overlay').fadeIn();
  });

  $(document).on('click', '#overlay', function(){
    $('body').removeClass('openMenu');
    $('#overlay').fadeOut();
  });

  // search animation
  $(document).on('click', '#openSearch', openSearchArea);


  $(document).on('click', '#closeSearch', closeSearchArea);
  var c = 1;

  function openSearchArea() {
    $('#search-area').addClass('active');
    setTimeout(animationBox, 500);
  }

  function closeSearchArea() {
    $('#search-area').removeClass('active');
    setTimeout(function(){
      $('.search-list li').removeClass('active');
      $('#search-box').scrollTop(0);
    }, 500);
    c = 1;
  }

  function animationBox() {
    $('.search-list').each(function(){
      var childs = $(this).find('li').length;
      if ( c <= childs ) {
        $('.search-list li:nth-child('+c+')').addClass('active');
        c++;
        setTimeout(animationBox, 200);
        console.log(c);
      } else {
        return 0;
      }
    });
  }

})();
