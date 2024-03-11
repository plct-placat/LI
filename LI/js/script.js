document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector("header").classList.toggle("open")
    })
})
$(document).ready(function() {
    $('.slider').slick({
        dots: true,
        slidesToShow: 3,
        adaptiveHeight: true,
        responsive: [{
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                }
            },
            {
                breakpoint: 376,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]

    });
})