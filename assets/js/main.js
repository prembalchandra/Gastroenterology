 document.addEventListener("DOMContentLoaded", function () {
      new Swiper(".review-slider", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        grabCursor: true,
        autoplay: {
          delay: 4500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".review-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".review-next",
          prevEl: ".review-prev",
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        },
      });
    });



     document.addEventListener("DOMContentLoaded", function () {
            const videoSwiper = new Swiper(".video-section", {
                slidesPerView: 1,
                spaceBetween: 20,
                loop: true,
                grabCursor: true,
                navigation: {
                    nextEl: ".video-next",
                    prevEl: ".video-prev",
                },
                breakpoints: {
                    640: {
                        slidesPerView: 1.5,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 24,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 28,
                    },
                },
            });
        });