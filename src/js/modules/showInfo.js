export default class ShowInfo {
  constructor(triggersSelectors) {
    this.btns = document.querySelectorAll(triggersSelectors);
  }

  toggle(btn) {
    if (btn.classList.contains("open")) {
      btn.closest(".module__info-show").nextElementSibling.style.display =
        "none";
      btn.classList.remove("open");
    } else {
      btn.closest(".module__info-show").nextElementSibling.style.display =
        "block";
      btn.classList.add("open");
    }
  }

  init() {
    this.btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        this.toggle(btn);
      });
    });
  }
}
