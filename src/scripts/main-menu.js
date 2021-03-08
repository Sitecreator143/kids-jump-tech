export class Menu {
  constructor() {
    this.body = document.querySelector("body");
    this.mainBurger = document.querySelector("[data-main-burger]");
    this.navCross = document.querySelector("[data-nav-cross]");
    this.mainHeader = document.querySelector("[data-main-header]");
    this.mainSocial = document.querySelector("[data-main-social]")
    this.mainBurger.addEventListener("click", () => {
      this.body.classList.toggle("body_lock");
      this.mainHeader.classList.toggle("main__header_active");
      this.mainSocial.classList.toggle("main__social_active");
    });

    this.navCross.addEventListener("click", () => {
      this.body.classList.toggle("body_lock");
      this.mainHeader.classList.toggle("main__header_active");
      this.mainSocial.classList.toggle("main__social_active");
    });
  }
}