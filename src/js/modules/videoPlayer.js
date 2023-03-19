export default class VideoPlayer {
  // What do we need?
  // Triggers (open, close), modal(overlay). Close Trigger get from overlay

  // init() with Youtube Iframe API (insert script)
  // createrPlayer(url) по документации создание экземпляра с height, width, videoId = url и overlay.style.display = "flex"
  // bindTriggers() для каждого триггера при клике на кнопку сравниваю, подключен ли уже этот скрипт.
  //      - Если да, то просто overlay.style.display = "flex"
  //      - Если его нет, то получаю url через getAttribute data-url, и вызов createPlayer(с этим url)
  // bindCloseBtn, при клике   this.overlay.style.display = "none"; и this.player.stopVideo()

  constructor(triggerSelectors, overlaySelector) {
    this.triggers = document.querySelectorAll(triggerSelectors);
    this.overlay = document.querySelector(overlaySelector);
    this.closeBtn = this.overlay.querySelector(".close");
  }

  bindTriggers() {
    this.triggers.forEach((btn) => {
      btn.addEventListener("click", () => {
        if (document.querySelector("iframe#frame")) {
          this.overlay.style.display = "flex";
        } else {
          const path = btn.getAttribute("data-url");

          this.createPlayer(path);
        }
      });
    });
  }

  bindCloseBtn() {
    this.closeBtn.addEventListener("click", () => {
      this.overlay.style.display = "none";
      this.player.stopVideo();
    });

    this.overlay.addEventListener("click", () => {
      this.overlay.style.display = "none";
      this.player.stopVideo();
    });
  }

  createPlayer(url) {
    this.player = new YT.Player("frame", {
      height: "100%",
      width: "100%",
      videoId: `${url}`,
    });

    this.overlay.style.display = "flex";
  }

  init() {
    const tag = document.createElement("script");

    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    this.bindTriggers();
    this.bindCloseBtn();
  }
}
