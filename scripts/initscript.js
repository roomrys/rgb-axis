class Slider {
  constructor(sliders) {
    this.all = sliders;
    this.red = sliders[0];
    this.green = sliders[1];
    this.blue = sliders[2];
  }

  get color() {
    return `rgb(${this.red.value}, ${this.green.value}, ${this.blue.value})`;
  }
}

class App {
  constructor(document) {
    this.title = document.getElementsByTagName("p")[0];
    this.sliders = document.getElementsByClassName("slider");
    this.slider = new Slider(this.sliders);
    this.display = document.getElementsByClassName("box-color")[0];
  }
}

function run(app) {
  listenToSliderInput(app.title, app.slider, app.display);
  listenToKeyInput(app.title, app.slider, app.display);
}

let app = new App(document);
run(app);

console.log(
  "Keyboard Shortcuts:\n" +
    "(RED) left/right key: -/+ red value\n" +
    "(GREEN) down/up key: -/+ green value\n" +
    "(BLUE) a/w: -/+ blue value\n"
);
