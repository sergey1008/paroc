import {domReady} from "./xpage/index"

domReady(async () => {
    const {Swiper, Lazy, Pagination, Keyboard, Navigation} = await import('swiper/dist/js/swiper.esm');

    Swiper.use([Lazy, Pagination, Keyboard, Navigation]);

    new Swiper(".sp-slider", {
        loop: true,
        lazy: {
            loadPrevNext: true
        },
        navigation: {
            prevEl: ".sp-slider .swiper-button-prev",
            nextEl: ".sp-slider .swiper-button-next"
        },
        keyboard: {
            enabled: true,
            onlyInViewport: true
        }
    })
});