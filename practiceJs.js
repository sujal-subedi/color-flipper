const button = document.querySelector(".button");
const color_text = document.querySelector(".color_text");

const hexacode = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function getRandomNumber() {
  return Math.floor(Math.random() * hexacode.length);
}

button.addEventListener("click", () => {
  let hexacolor = "#";

  for (let i = 0; i < 6; i++) {
    hexacolor += hexacode[getRandomNumber()];
  }
  document.body.style.backgroundColor = hexacolor;
  color_text.textContent = hexacolor;
});
