$(document).ready(function(){
  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $(".back-top").fadeIn("slow");
    } else {
      $(".back-top").fadeOut("slow");
    }
  });
  $(".back-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500);
    return false;
  });
  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 90) {
      $(".nav-bar").addClass("sticky");
      $(".carousel, .page-header").css("margin-top", "73px");
    } else {
      $(".nav-bar").removeClass("sticky");
      $(".carousel, .page-header").css("margin-top", "0");
    }
  });

  // Main carousel
  $(".carousel .owl-carousel").owlCarousel({
    autoplay: true,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    items: 1,
    smartSpeed: 300,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    ],
  });

  // Facts counter
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 2000,
  });

  // Testimonials carousel
  $(".testimonials-carousel").owlCarousel({
    center: true,
    autoplay: true,
    smartSpeed: 2000,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });
});