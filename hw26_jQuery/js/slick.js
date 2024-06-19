$(".hero-slider").slick({
  autoplay: true,
  infinite: true,
  arrows: false,
  dots: true,
  dotsClass: "hero-dots",
  lazyLoad: "ondemand",
});

$(".arrivals-slider__list").slick({
  autoplay: true,
  arrows: true,
  slidesToShow: 4.99,
  slidesToScroll: 2,
  prevArrow: $(".arrivals-slider__prev"),
  nextArrow: $(".arrivals-slider__next"),
  responsive: [
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        dotsClass: "arrivals-dots",
        arrows: false,
        variableWidth: true,
      },
    },
    {
      breakpoint: 1150,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        variableWidth: true,
        centerMode: true,
      },
    },
  ],
});

$.getJSON("./arrivals.json", function (data) {
  data.forEach((slide) => {
    let isInStock = slide.inStock ? "in stock" : "sold";
    let sliderItem = `
      <li class="arrivals-slider__item">
        <span class="arrivals-slider__label" data-stock ="${isInStock}">${isInStock}</span>
        <img data-lazy="${slide.img}" class="arrivals-slider__img" src="${slide.img}" alt="guitar">
        <h3 class="arrivals-slider__title">${slide.name}</h3>
        <p class="arrivals-slider__price">${slide.price}</p>
    </li>`;

    $(".arrivals-slider__list").slick("slickAdd", sliderItem);
  });
});

$(".partners-slider__list").slick({
  autoplay: true,
  arrows: true,
  slidesToShow: 8.99,
  slidesToScroll: 3,
  prevArrow: $(".partners-slider__prev"),
  nextArrow: $(".partners-slider__next"),
  responsive: [
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 1.99,
        slidesToScroll: 1,
        dots: true,
        dotsClass: "partners-dots",
        arrows: false,
      },
    },
    {
      breakpoint: 1026,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
});

$.getJSON("./partners.json", function (data) {
  data.forEach((slide) => {
    let sliderItem = `
      <li class="partners-slider__item">
        <img data-lazy="${slide.icon}" class="partners-slider__img" src="${slide.icon}" alt="company logo">
    </li>`;

    $(".partners-slider__list").slick("slickAdd", sliderItem);
  });
});
