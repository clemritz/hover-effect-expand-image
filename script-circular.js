window.onload = function () {
  let cosmos = document.querySelectorAll(".cosmos");
  let total = cosmos.length;
  let container = document.querySelector(".container");

  for (let i = 0; i < total; i++) {
    let angle = (360 / total) * i;
    let transform = `rotate(${angle}deg) translate(55vh)`;
    cosmos[i].style.transform = transform;
    let cosmosItems = cosmos[i].querySelectorAll(".cosmic-item");

    for (let j = 0; j < cosmosItems.length; j++) {
      cosmosItems[j].style.animationDelay = `${j * 0.5}s`
    }
  }
}
