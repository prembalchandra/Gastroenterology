document.addEventListener("DOMContentLoaded", function () {
    /* ==========================================
       All Lead & Appointment Forms Submit Setup
       ========================================== */
    const forms = document.querySelectorAll(".appointment-form, .lead-form");
    forms.forEach(form => {
        form.addEventListener("submit", function (e) {
            // Ensure action and method
            if (!this.getAttribute("action")) {
                this.action = "thank-you.html";
                this.method = "get";
            }
        });
    });

    /* ==========================================
       Reviews Slider (Swiper)
       ========================================== */
    const reviewSlider = document.querySelector(".review-slider");
    const reviewSliderWrapper = reviewSlider?.closest(".review-slider-wrapper");

    if (reviewSlider && typeof Swiper !== "undefined") {
        const reviewSlides = reviewSlider.querySelectorAll(".swiper-slide");
        const totalReviewSlides = reviewSlides.length;
        const isReviewMoreThanThree = totalReviewSlides > 3;

        if (!isReviewMoreThanThree && reviewSliderWrapper) {
            reviewSliderWrapper.classList.add("slider-disabled");
        }

        new Swiper(reviewSlider, {
            slidesPerView: 1,
            spaceBetween: 16,
            loop: isReviewMoreThanThree,
            watchOverflow: true,
            speed: 600,
            grabCursor: isReviewMoreThanThree,

            autoplay: isReviewMoreThanThree ? {
                delay: 4500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
            } : false,

            navigation: isReviewMoreThanThree ? {
                nextEl: reviewSliderWrapper.querySelector(".review-next, .swiper-button-next"),
                prevEl: reviewSliderWrapper.querySelector(".review-prev, .swiper-button-prev")
            } : false,

            pagination: isReviewMoreThanThree ? {
                el: reviewSliderWrapper.querySelector(".review-pagination, .swiper-pagination"),
                clickable: true
            } : false,

            breakpoints: {
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                    allowTouchMove: isReviewMoreThanThree
                }
            }
        });
    }

    /* ==========================================
       Video Slider (Swiper)
       ========================================== */
    const videoSlider = document.querySelector(".video-section");
    const videoSliderWrapper = videoSlider?.closest(".video-slider-wrapper");

    if (videoSlider && videoSliderWrapper && typeof Swiper !== "undefined") {
        const videoSlides = videoSlider.querySelectorAll(".swiper-slide");
        const totalVideoSlides = videoSlides.length;
        const isVideoMoreThanThree = totalVideoSlides > 3;

        if (!isVideoMoreThanThree) {
            videoSliderWrapper.classList.add("slider-disabled");
        }

        new Swiper(videoSlider, {
            slidesPerView: 1,
            spaceBetween: 16,
            loop: isVideoMoreThanThree,
            watchOverflow: true,
            speed: 600,
            grabCursor: isVideoMoreThanThree,

            autoplay: isVideoMoreThanThree ? {
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
            } : false,

            navigation: isVideoMoreThanThree ? {
                nextEl: videoSliderWrapper.querySelector(".video-next, .swiper-button-next"),
                prevEl: videoSliderWrapper.querySelector(".video-prev, .swiper-button-prev")
            } : false,

            pagination: isVideoMoreThanThree ? {
                el: videoSliderWrapper.querySelector(".video-pagination, .swiper-pagination"),
                clickable: true
            } : false,

            breakpoints: {
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                    allowTouchMove: isVideoMoreThanThree
                }
            }
        });
    }

    /* ==========================================
       Smooth Anchor Scrolling
       ========================================== */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#' || targetId === '') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
