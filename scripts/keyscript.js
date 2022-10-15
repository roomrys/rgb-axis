{
  document.addEventListener(
    "keydown",
    (event) => {
      const keyName = event.key;

      const title = document.getElementsByTagName("p")[0];
      let redSlider = document.getElementById("redSlider");
      let blueSlider = document.getElementById("blueSlider");
      let greenSlider = document.getElementById("greenSlider");
      const objectsToChange = document.getElementsByClassName("box-color");
      objToChange = objectsToChange[0];

      let color = objToChange.style.backgroundColor.length
        ? objToChange.style.backgroundColor
        : getComputedStyle(objToChange).backgroundColor;
      let colorValues = color.match(/\d+/g);
      let redValue = Number(colorValues[0]);
      let greenValue = Number(colorValues[1]);
      let blueValue = Number(colorValues[2]);

      // First axis controls red value
      if (keyName == "ArrowRight") {
        redValue += 1;
      }
      if (keyName == "ArrowLeft") {
        redValue -= 1;
      }

      // Second axis controls green value
      if (keyName == "ArrowUp") {
        greenValue += 1;
      }
      if (keyName == "ArrowDown") {
        greenValue -= 1;
      }

      // Third axis controls blue value
      if (keyName == "a") {
        blueValue += 1;
      }
      if (keyName == "w") {
        blueValue -= 1;
      }

      // Update color
      redSlider.value = redValue;
      greenSlider.value = greenValue;
      blueSlider.value = blueValue;

      // Update slider
      color = `rgb(${redValue},${greenValue},${blueValue})`;
      title.textContent = color;
      objToChange.style.backgroundColor = color;
    },
    false
  );
}
