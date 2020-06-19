$(document).ready(function() {
  const mMenuBtn = $(".mobile-menu");
  const mMenu = $(".main-menu");
  const tab = $(".tab");

  mMenuBtn.on("click", function() {
    mMenu.toggleClass("active");
    $("body").toggleClass("no-scroll");
    $(".mobile-buttons").toggleClass("active");
  });

  tab.on("click", function() {
    tab.removeClass("active");
    $(this).toggleClass("active");
    let activeTabContant = $(this).attr("data-target");
    $(".tabs-content").removeClass("visible");
    $(activeTabContant).toggleClass("visible");
  });

  var mySwiper = new Swiper(".swiper-container", {
    slidesPerView: 4,
    spaceBetween: 25,
    loop: true,
    breakpoints: {
      992: {
        slidesPerView: 4
      },

      768: {
        slidesPerView: 2
      },

      320: {
        slidesPerView: 1,
        navigation: {
          nextEl: ".button-next"
        }
      }
    }
  });
});
