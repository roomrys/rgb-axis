function listenToKeyInput(title, slider, objToChange) {
  document.addEventListener(
    "keydown",
    (event) => {
      const keyName = event.key;

      let redSlider = slider.red;
      let greenSlider = slider.green;
      let blueSlider = slider.blue;

      let redValue = Number(redSlider.value);
      let greenValue = Number(greenSlider.value);
      let blueValue = Number(blueSlider.value);

      // First axis controls red value
      if (keyName == "ArrowRight" || keyName == "ArrowLeft") {
        redValue = Number(redValue) + (-1) ** (keyName == "ArrowLeft");
      }

      // Second axis controls green value
      if (keyName == "ArrowUp" || keyName == "ArrowDown") {
        greenValue = Number(greenValue) + (-1) ** (keyName == "ArrowDown");
      }

      // Third axis controls blue value
      if (keyName == "a" || keyName == "w") {
        blueValue = Number(blueValue) + (-1) ** (keyName == "w");
      }

      // Update slider position
      redSlider.value = redValue;
      greenSlider.value = greenValue;
      blueSlider.value = blueValue;

      // Update title and display
      redSlider.dispatchEvent(new Event("input", { bubbles: true }));
    },
    false
  );
}
