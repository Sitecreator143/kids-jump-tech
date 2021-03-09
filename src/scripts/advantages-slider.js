export class Slider {
  constructor() {
    const advantagesInfo = document.querySelectorAll("[data-advantages-info]");
    const advantagesDescription = document.querySelectorAll("[data-advantages-description]");

    this.advantagesCount = 4;
    for (let i = 0; i < this.advantagesCount; i++) {
      advantagesInfo[i].addEventListener("click", () => {
        advantagesInfo[i].classList.toggle("advantages__info_active");
        advantagesDescription[i].classList.toggle("advantages__description_active");
      });
    }

    this.advantagesItem = document.querySelectorAll("[data-advantages-item]");
    this.advantagesLeft = document.querySelector("[data-advantages-left]");
    this.advantagesNumber = document.querySelector("[data-advantages-number]");
    this.advantagesRight = document.querySelector("[data-advantages-right]");
    this.currentItem = 1;
    this.writeCurrentItem();
  }

  pushArrow() {
    this.advantagesLeft.addEventListener("click", () => {
      if (this.currentItem === 2) {
        this.currentItem = 1;
        this.writeCurrentItem();
        this.moveItem("Left", this.currentItem);
      } else if (this.currentItem === 3) {
        this.currentItem = 2;
        this.writeCurrentItem();
        this.moveItem("Left", this.currentItem);
      } else if (this.currentItem === 4) {
        this.currentItem = 3;
        this.writeCurrentItem();
        this.moveItem("Left", this.currentItem);
      }
    });

    this.advantagesRight.addEventListener("click", () => {
      if (this.currentItem === 1) {
        this.currentItem = 2;
        this.writeCurrentItem();
        this.moveItem("Right", this.currentItem);
      } else if (this.currentItem === 2) {
        this.currentItem = 3;
        this.writeCurrentItem();
        this.moveItem("Right", this.currentItem);
      } else if (this.currentItem === 3) {
        this.currentItem = 4;
        this.writeCurrentItem();
        this.moveItem("Right", this.currentItem);
      }
    });
    return this;
  }

  moveItem(direction, currentItem) {
    if (direction === "Right") {
      this.advantagesItem[currentItem - 2].classList.remove("advantages__item_shown");
      this.advantagesItem[currentItem - 2].classList.add("advantages__item_left");
      this.advantagesItem[currentItem - 1].classList.remove("advantages__item_right");
      this.advantagesItem[currentItem - 1].classList.add("advantages__item_shown");
    } else {
      this.advantagesItem[currentItem].classList.remove("advantages__item_shown");
      this.advantagesItem[currentItem].classList.add("advantages__item_right");
      this.advantagesItem[currentItem - 1].classList.remove("advantages__item_left");
      this.advantagesItem[currentItem - 1].classList.add("advantages__item_shown");
    }
  }

  writeCurrentItem() {
    this.advantagesNumber.innerText = `${this.currentItem}/${this.advantagesCount}`;
    return this;
  }
}