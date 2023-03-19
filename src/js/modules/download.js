export default class Download {
  constructor(triggersSelectors) {
    this.btns = document.querySelectorAll(triggersSelectors);
    this.path = "assets/img/mainbg.jpg";
  }

  downloadItem(path) {
    const element = document.createElement("a");

    element.setAttribute("href", path);
    element.setAttribute("download", "nice_pictures");

    element.style.display = "none";
    document.body.appendChild(element);

    element.click();
    document.body.removeChild(element);
  }

  init() {
    this.btns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        this.downloadItem(this.path);
      });
    });
  }
}
