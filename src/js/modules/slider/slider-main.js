import Slider from "./slider";

export default class MainSlider extends Slider {
  constructor(btnsSelectors) {
    super(btnsSelectors);
  }

  showSlides(n) {
    // === Check boundaries
    if (n > this.slides.length) {
      this.slideIndex = 1;
    }

    if (n < 1) {
      this.slideIndex = this.slides.length;
    }
    // === Hide All Slides
    this.slides.forEach((slide) => {
      slide.style.display = "none";
    });

    // === Show Needeed slide
    this.slides[this.slideIndex - 1].style.display = "block";

    // === Timer And Modal
    try {
      this.hanson.style.display = "none";
      if (n === 3) {
        this.hanson.classList.add("animated");
        setTimeout(() => {
          this.hanson.style.display = "block";
          this.hanson.classList.add("slideInUp");
        }, 3000);
      } else {
        this.hanson.classList.remove("slideInUp");
      }
    } catch (error) {}
  }

  plusSlide(direction) {
    this.showSlides((this.slideIndex += direction));
  }

  render() {
    // === Timer Modal Init
    try {
      this.hanson = document.querySelector(".hanson");
    } catch (error) {}

    this.btns.forEach((btn) => {
      // === Switchers Btns
      btn.addEventListener("click", () => {
        this.plusSlide(1);
      });

      // === Slide go to beginning
      btn.parentNode.previousElementSibling.addEventListener("click", (e) => {
        e.preventDefault();
        this.slideIndex = 1;
        this.showSlides(this.slideIndex);
      });
    });

    this.showSlides(this.slideIndex);
  }
}
