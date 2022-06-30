let config = {
    type: 'carousel',
    perView: 3,
    breakpoints: {
        767: {
            perView:1
        },
        992: {
            perView:2
        }
    }
};
new Glide('._blog_slider', config).mount();

let config1 = {
    type: 'carousel',
    perView: 3,
    peek:{ before: 70, after: -220 },
    breakpoints: {
        767: {
            perView:1,
            peek:{ before: 40, after: -20 }
        },
        992: {
            perView:2
        }
    }
};
new Glide('._testimonial_slider', config1).mount();