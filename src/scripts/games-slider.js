export class GamesSlider {
  constructor() {
    this.leftDistance = 0;
    this.gamesMove = document.querySelectorAll("[data-games-move]");
    this.gamesLeft = document.querySelector("[data-games-left]");
    this.gamesRight = document.querySelector("[data-games-right]");

    this.gamesLeft.addEventListener("click", () => {
      if (this.leftDistance > 0) {
        this.leftDistance -= 1;
        this.gamesMove[this.leftDistance].classList.remove("games__move_unactive");
      }
    });

    this.gamesRight.addEventListener("click", () => {
      if (this.leftDistance < 3) {
        this.leftDistance += 1;
        this.gamesMove[this.leftDistance - 1].classList.add("games__move_unactive");
      }
    });
  }
}