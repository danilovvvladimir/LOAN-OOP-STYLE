export default class Slider {
  constructor({
    pageSelector = null,
    btnsSelectors = null,
    next = null,
    prev = null,
    activeClass = "",
    animate,
    autoplay,
  } = {}) {
    this.page = document.querySelector(pageSelector);
    this.slides = this.page.children;
    this.btns = document.querySelectorAll(btnsSelectors);
    this.next = document.querySelector(next);
    this.prev = document.querySelector(prev);
    this.activeClass = activeClass;
    this.animate = animate;
    this.autoplay = autoplay;
    this.slideIndex = 1;
  }
}
