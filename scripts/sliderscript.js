{
  redSlider.addEventListener(
    "input",
    (event) => {
      console.log(event);

      const title = document.getElementsByTagName("p")[0];
      let redSlider = document.getElementById("redSlider");
      let greenSlider = document.getElementById("greenSlider");
      let blueSlider = document.getElementById("blueSlider");
      const objectsToChange = document.getElementsByClassName("box-color");
      objToChange = objectsToChange[0];

      // Update color
      let color = `rgb(${redSlider.value},${greenSlider.value},${blueSlider.value})`;
      title.textContent = color;
      objToChange.style.backgroundColor = color;
      console.log(color);
      console.log(event);
    },
    false
  );
  greenSlider.addEventListener(
    "input",
    (event) => {
      console.log(event);

      const title = document.getElementsByTagName("p")[0];
      let redSlider = document.getElementById("redSlider");
      let blueSlider = document.getElementById("blueSlider");
      let greenSlider = document.getElementById("greenSlider");
      const objectsToChange = document.getElementsByClassName("box-color");
      objToChange = objectsToChange[0];

      // Update color
      let color = `rgb(${redSlider.value},${greenSlider.value},${blueSlider.value})`;
      title.textContent = color;
      objToChange.style.backgroundColor = color;
      console.log(color);
      console.log(event);
    },
    false
  );
  blueSlider.addEventListener(
    "input",
    (event) => {
      console.log(event);

      const title = document.getElementsByTagName("p")[0];
      let redSlider = document.getElementById("redSlider");
      let blueSlider = document.getElementById("blueSlider");
      let greenSlider = document.getElementById("greenSlider");
      const objectsToChange = document.getElementsByClassName("box-color");
      objToChange = objectsToChange[0];

      // Update color
      let color = `rgb(${redSlider.value},${greenSlider.value},${blueSlider.value})`;
      title.textContent = color;
      objToChange.style.backgroundColor = color;
      console.log(color);
      console.log(event);
    },
    false
  );
}
