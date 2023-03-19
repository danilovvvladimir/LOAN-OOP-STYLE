import Slider from "./modules/slider/slider";
import MainSlider from "./modules/slider/slider-main";
import MiniSlider from "./modules/slider/slider-mini";
import VideoPlayer from "./modules/videoPlayer";
import Difference from "./modules/difference";
import Forms from "./modules/forms";

window.addEventListener("DOMContentLoaded", () => {
  const slider = new MainSlider({
    pageSelector: ".page",
    btnsSelectors: ".next",
  });
  slider.render();

  const showUpSlider = new MiniSlider({
    pageSelector: ".showup__content-slider",
    next: ".showup__next",
    prev: ".showup__prev",
    activeClass: "card-active",
    animate: true,
  });
  showUpSlider.init();

  const modulesSlider = new MiniSlider({
    pageSelector: ".modules__content-slider",
    next: ".modules__info-btns .slick-next",
    prev: ".modules__info-btns .slick-prev",
    activeClass: "card-active",
    animate: true,
  });
  modulesSlider.init();

  const feedSlider = new MiniSlider({
    pageSelector: ".feed__slider",
    next: ".feed__slider .slick-next",
    prev: ".feed__slider .slick-prev",
    activeClass: "feed__item-active",
    autoplay: true,
  });
  feedSlider.init();

  const videoPlayer = new VideoPlayer(".showup .play", ".overlay");
  videoPlayer.init();

  const oldOfficer = new Difference(".officerold", ".officer__card-item");
  oldOfficer.init();
  const newOfficer = new Difference(".officernew", ".officer__card-item");
  newOfficer.init();

  const forms = new Forms("form");
  forms.init();
});
