$(document).ready(function() {

    //project sample animation:
    $('body').on('click','.project', function(){
        var height = $(this).css('height');
        if (height == '600px') {
            $(this).animate({height:'300px', width:'400px', scrollTop: $(this).offset().top
            },'slow');
            $(this).find('.projecttitle').removeClass('hidden');
            $(this).find('.projscrip').addClass('hidden');
        } else {
            $(this).animate({height:'600px', width:'800px', scrollTop: $(this).offset().top
            },'slow');
            $(this).find('.projscrip').removeClass('hidden');
            $(this).find('.projecttitle').addClass('hidden');
        }   
    });

    //mouse fade color:
    $('a').mouseleave(function() {
        $(this).fadeTo('slow', 1)
    });

    //smooth scrolling to links on page:
    $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 2000);
        return false;
      }
    }
  });

});  