function updateTitleAndDisplay(display, title, color) {
  display.style.backgroundColor = color;
  title.textContent = color;
}
function updateSliderBackgrounds(slider) {
  let sliderValues = [redSlider.value, greenSlider.value, blueSlider.value];
  for (let i = 0; i < slider.all.length; i++) {
    let sldr = slider.all[i];
    let sldrStartValues = Array.from(sliderValues);
    let sldrEndValues = Array.from(sliderValues);
    sldrStartValues[i] = 0;
    sldrEndValues[i] = 255;

    // Update color of slider bar
    sldr.style.backgroundImage = `linear-gradient(to right, rgb(${sldrStartValues}), rgb(${sldrEndValues}))`;
  }
}

function listenToSliderInput(title, slider, display) {
  document.addEventListener(
    "input",
    () => {
      updateSliderBackgrounds(slider);
      updateTitleAndDisplay(display, title, slider.color);
    },
    false
  );
}
