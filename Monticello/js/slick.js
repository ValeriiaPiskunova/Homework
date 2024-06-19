$(".news-slider__list").slick({
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: true,
  dots: true,
  dotsClass: "news-dots",
  slidesToShow: 3,
  slidesToScroll: 1,
  variableWidth: true,
  centerMode: true,
  lazyLoad: "ondemand",
  focusOnSelect: true,
  prevArrow: $(".news-slider__prev"),
  nextArrow: $(".news-slider__next"),
  responsive: [
    {
      breakpoint: 500,
      settings: {
        dots: true,
        arrows: false,
        slidesToShow: 1,
        variableWidth: true,
      },
      breakpoint: 768,
      settings: {
        dots: true,
        arrows: false,
        slidesToShow: 1,
        variableWidth: true,
        adaptiveHeight: true,
      },
      breakpoint: 1200,
      settings: {
        dots: true,
        arrows: true,
        slidesToShow: 2,
      },
    },
  ],
});

$.getJSON("./news.json", function (data) {
  data.forEach((slide) => {
    let sliderItem = `
    <li class="news-slider__item">
        <img data-lazy="${slide.img}" class="news-slider__img" src="${slide.img}" alt="building">
        <div class="news-slider__info">
            <h2 class="news-slider__title">${slide.heading}</h2>
            <p class="news-slider__text">${slide.text}</p>
                <div class="news-slider__person">
                    <img data-lazy="${slide.photo}" class="news-slider__person-img" src="${slide.photo}" alt="person">
                        <div class="news-slider__person-text">
                            <span class="news-slider__person-name">${slide.name}</span>
                            <span class="news-slider__date">${slide.date}</span>  
                        </div>  
                </div>
        </div>      
    </li>`;

    $(".news-slider__list").slick("slickAdd", sliderItem);
  });
});

$(".header__slider").slick({
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: false,
  dots: true,
  dotsClass: "header-dots",
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  adaptiveHeight: true,
  lazyLoad: "ondemand",
});
