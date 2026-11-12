document.addEventListener("DOMContentLoaded", function () {
    // Review Swiper Slider
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

    // Video Section Swiper Slider
    new Swiper(".video-section", {
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

    // Callback Form Submission & Redirect to Thank You Page
    const leadForm = document.getElementById("leadForm");
    if (leadForm) {
        leadForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const nameInput = leadForm.querySelector('input[name="name"]');
            const phoneInput = leadForm.querySelector('input[name="phone"]');
            const citySelect = leadForm.querySelector('select[name="city"]');
            const submitBtn = leadForm.querySelector('button[type="submit"]');

            const nameVal = nameInput ? nameInput.value.trim() : "";
            const phoneVal = phoneInput ? phoneInput.value.trim() : "";
            const cityVal = citySelect ? citySelect.value : "";

            if (!nameVal) {
                alert("कृपया अपना नाम दर्ज करें।");
                if (nameInput) nameInput.focus();
                return;
            }

            if (!phoneVal || !/^[0-9]{10}$/.test(phoneVal)) {
                alert("कृपया 10 अंकों का मान्य मोबाइल नंबर दर्ज करें।");
                if (phoneInput) phoneInput.focus();
                return;
            }

            if (!cityVal) {
                alert("कृपया अपना शहर चुनें।");
                if (citySelect) citySelect.focus();
                return;
            }

            // Show feedback on button
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerHTML = 'अनुरोध भेजा जा रहा है...';
            }

            // Save details to sessionStorage
            try {
                sessionStorage.setItem("lead_name", nameVal);
                sessionStorage.setItem("lead_phone", phoneVal);
                sessionStorage.setItem("lead_city", cityVal);
            } catch (err) {
                console.error(err);
            }

            // Redirect to Thank-You Page
            setTimeout(function () {
                window.location.href = "thank-you.html";
            }, 300);
        });
    }
});
