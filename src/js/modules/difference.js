export default class Difference {
  constructor(currentOfficer, items) {
    this.currentOfficer = document.querySelector(currentOfficer);
    this.officerItems = this.currentOfficer.querySelectorAll(items);
    this.counter = 0;
  }

  hideItems() {
    this.officerItems.forEach((item, index, array) => {
      if (index !== array.length - 1) {
        item.style.display = "none";
      }
    });
  }

  bindTriggers() {
    this.currentOfficer
      .querySelector(".card__click")
      .parentNode.addEventListener("click", () => {
        if (this.counter !== this.officerItems.length - 2) {
          this.officerItems[this.counter].style.display = "flex";
          this.counter++;
        } else {
          this.officerItems[this.counter].style.display = "flex";
          this.officerItems[this.officerItems.length - 1].remove();
        }
      });
  }

  init() {
    this.hideItems();
    this.bindTriggers();
  }
}
