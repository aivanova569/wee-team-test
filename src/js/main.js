$(function(){

  // Easy scroll by links
  $("body").on('click', '[href*="#"]', function(e){
      let fixed_offset = 100;
      $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
      e.preventDefault();
  });
    
    // Mixitup for products section
    let mixer = mixitup('.products__items-content');

    // Tabs for team section
    $(".team-tabs .team-tabs__wrapper .tab").click(function() {
      $(".team-tabs .team-tabs__wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
      $(".team-tabs .team-tabs__item-worker").hide().eq($(this).index()).fadeIn();
    }).eq(0).addClass("active");

    // Burger-menu
    $('.menu__btn').on('click', function(){
      $('.menu__list').slideToggle();
    });

});