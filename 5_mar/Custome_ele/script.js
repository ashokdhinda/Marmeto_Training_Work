let slidersData = [];
fetch("./db.json")
  .then((response) => response.json())
  .then((slider) => {
    slidersData = slider.data;
    renderSlider(slidersData);
  });

class CustomSlider extends HTMLElement {
  constructor() {
    super();
    this.splideMain = this.querySelector(".splide-main");
    this.splideNav = this.querySelector(".splide-nav");
    this.slidesData = JSON.parse(this.dataset.customSliderData) || [];
  }

  connectedCallback() {
    const classNames = ["first-slide", "second-slide", "third-slide"];
    const slideMainList = this.querySelector(".splide-main .splide__list");
    const slideNavList = this.querySelector(".splide-nav .splide__list");

    slideMainList.innerHTML = this.slidesData
      .map((slide, index) => {
        return `
        <li class="splide__slide">
          <div>
            <div class="content" width="100vw" height="60vh">
              <img src="${slide.src}" alt="${slide.description}" class="slide-image">
              <div class="overlay ${classNames[index]}">
                <button class="first_button_content">${slide.first_button_content}</button>
                <p>${slide.description}</p>
                <button>${slide.second_button_content}</button>
              </div>
            </div>
          </div>
        </li>
      `;
      })
      .join("");

    slideNavList.innerHTML = this.slidesData
      .map((slide) => {
        return `
        <li class="splide__slide">
          <img src="${slide.src}" alt="${slide.description}" class="thumbnail">
        </li>
      `;
      })
      .join("");

    this.mountSpliders();
  }

  mountSpliders() {
    const mainSlider = new Splide(this.splideMain, {
      type: "fade",
      perPage: 1,
      autoplay: true,
      arrows: false,
      pagination: false,
    });

    const navSlider = new Splide(this.splideNav, {
      fixedWidth: 100,
      fixedHeight: 60,
      isNavigation: true,
      gap: 10,
      focus: "center",
      perPage: 4,
      pagination: false,
    });

    mainSlider.sync(navSlider);
    mainSlider.mount();
    navSlider.mount();
  }
}

customElements.define("custom-slider", CustomSlider);

const renderSlider = (slidersData) => {
  document.querySelector("body").innerHTML = `
    <custom-slider data-custom-slider-data='${JSON.stringify(
      slidersData
    ).replace(/'/g, "&apos;")}'>
      <section class="splide splide-main" aria-label="Main Slider">
        <div class="splide__track">
          <ul class="splide__list"></ul>
        </div>
      </section>
      <section class="splide splide-nav" aria-label="Thumbnail Navigation">
        <div class="splide__track">
          <ul class="splide__list"></ul>
        </div>
      </section>
    </custom-slider>
  `;
};
