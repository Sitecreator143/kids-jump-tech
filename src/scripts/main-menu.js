export class Menu {
  constructor() {
    this.mainBurger = document.querySelector("[data-main-burger]");
    this.cross = document.querySelector("[data-nav-cross]");
    this.header = document.querySelector("[data-main-header]");

    this.mainBurger.addEventListener("click", () => {
      this.header.classList.toggle("main__header_active");
    });

    this.cross.addEventListener("click", () => {
      this.header.classList.toggle("main__header_active");
    });
  }
  
}