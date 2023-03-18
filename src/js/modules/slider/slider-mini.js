import Slider from "./slider";

export default class MiniSlider extends Slider {
  constructor(pageSelector, next, prev, activeClass, animate, autoPlay) {
    super(pageSelector, next, prev, activeClass, animate, autoPlay);
  }

  showNextSlide() {
    if (this.pageSelector == ".feed__slider") {
      this.page.insertBefore(
        this.slides[0],
        this.slides[this.slides.length - 3]
      );
    } else {
      this.page.appendChild(this.slides[0]);
    }
    this.decorizeSliders();
  }
  showPrevSlide() {
    let active;
    if (this.pageSelector == ".feed__slider") {
      active = this.slides[this.slides.length - 3];
    } else {
      active = this.slides[this.slides.length - 1];
    }
    this.page.insertBefore(active, this.slides[0]);
    this.decorizeSliders();
  }

  bindTriggers() {
    this.next.addEventListener("click", () => {
      this.showNextSlide();
    });

    this.prev.addEventListener("click", () => {
      this.showPrevSlide();
    });
  }

  decorizeSliders() {
    this.slides.forEach((slide) => {
      slide.classList.remove(this.activeClass);
      if (this.animate) {
        slide.querySelector(".card__title").style.opacity = "0.4";
        slide.querySelector(".card__controls-arrow").style.opacity = "0";
      }
    });

    this.slides[0].classList.add(this.activeClass);
    if (this.animate) {
      this.slides[0].querySelector(".card__title").style.opacity = "1";
      this.slides[0].querySelector(".card__controls-arrow").style.opacity = "1";
    }
  }

  init() {
    this.page.style.cssText = `
      display: flex;
      flex-wrap: wrap;
      overflow: hidden;
      align-items: flex-start;
    `;

    this.bindTriggers();
    this.decorizeSliders();

    if (this.autoplay) {
      setInterval(() => this.showNextSlide(), 5000);
    }
  }
}
