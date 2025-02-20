export class Game {
  constructor(element) {
    this._element = element;
  }
  randPosition() {
    const allFields = this._element.querySelectorAll(".col");

    allFields.forEach((field) => {
      const img = field.querySelector("img");
      if (img) {
        img.remove();
      }
    });

    const img = document.createElement("img");
    img.src = "../img/goblin.png";
    img.alt = "Goblin";

    let rand;
    do {
      rand = Math.floor(Math.random() * allFields.length);
    } while (allFields[rand].querySelector("img"));

    allFields[rand].appendChild(img);
  }
}
