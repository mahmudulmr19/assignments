// random background color
function randomColor() {
  let color = [];
  for (let i = 0; i < 3; i++) {
    color.push(Math.floor(Math.random() * 256));
  }
  return "rgb(" + color.join(", ") + ")";
}
// card background color change onMouseOver
function bgColorChange(bgColorChangeId) {
  const bg_color = document.getElementById(bgColorChangeId);
  bg_color.style.backgroundColor = randomColor();
}

// (common) show area calculate
const areaCalculator = document.getElementById("area-calculation");
let areSerial = 0;
function areCalculator(text, Element) {
  areSerial++;
  const div = document.createElement("div");
  div.innerHTML = `<div class="flex items-center justify-between">  
  <span>${areSerial}. ${text}</span>
  <span>${Element.toFixed(2)}cm <sup>2</sup></span>
  <button class="bg-blue-500 text-[10px] cursor-pointer text-white px-2 py-1 rounded">Covert to m<sup>2</sup></button>
  </div>`;
  areaCalculator.appendChild(div);
}

// (common) area calculate
function calculateArea(zeroPointFive, firstValue, SecondValue) {
  if (zeroPointFive === true) {
    let area = 0.5 * firstValue * SecondValue;
    return area;
  } else {
    let area = firstValue * SecondValue;
    return area;
  }
}
// triangle area calculate
document
  .getElementById("triangle-area-calculate")
  .addEventListener("click", function () {
    const triangleBase = document.getElementById("triangle-base");
    const triangleHeight = document.getElementById("triangle-height");

    const triangleText = document.getElementById("triangle-text").innerText;
    if (!triangleBase.value || !triangleHeight.value) {
      alert("input should be number");
      return;
    } else if (triangleBase.value < 0 || triangleHeight.value < 0) {
      alert("input should be positive number");
      return;
    } else {
      const triangleArea = calculateArea(
        true,
        triangleBase.value,
        triangleHeight.value
      );
      areCalculator(triangleText, triangleArea);
      triangleBase.value = "";
      triangleHeight.value = "";
    }
  });

// Rectangle area calculate button
document
  .getElementById("rectangle-area-calculate")
  .addEventListener("click", function () {
    const rectangleText = document.getElementById("rectangle-text").innerText;
    const rectangleWidth = document.getElementById("rectangle-width");
    const rectangleLength = document.getElementById("rectangle-length");
    if (!rectangleWidth.value || !rectangleLength.value) {
      alert("input should be number");
      return;
    } else if (rectangleWidth.value < 0 || rectangleLength.value < 0) {
      alert("input should be positive number");
      return;
    } else {
      const rectangleArea = calculateArea(
        false,
        rectangleWidth.value,
        rectangleLength.value
      );
      areCalculator(rectangleText, rectangleArea);
      rectangleWidth.value = "";
      rectangleLength.value = "";
    }
  });

// Parallelogram area calculate
document
  .getElementById("parallelogram-area-calculate")
  .addEventListener("click", function () {
    const parallelogramText =
      document.getElementById("parallelogram-text").innerText;
    const parallelogramBase = document.getElementById("parallelogram-base");
    const parallelogramHeight = document.getElementById("parallelogram-height");

    if (!parallelogramBase.value || !parallelogramHeight.value) {
      alert("input should be number");
      return;
    } else if (parallelogramBase.value < 0 || parallelogramHeight.value < 0) {
      alert("input should be positive number");
      return;
    } else {
      const parallelogramArea = calculateArea(
        false,
        parallelogramBase.value,
        parallelogramHeight.value
      );
      areCalculator(parallelogramText, parallelogramArea);
      parallelogramBase.value = "";
      parallelogramHeight.value = "";
    }
  });

// rhombus area calculator
document
  .getElementById("rhombus-area-calculator")
  .addEventListener("click", function () {
    const rhombusText = document.getElementById("rhombus-text").innerText;
    const diagonal1 = document.getElementById("diagonal-1");
    const diagonal2 = document.getElementById("diagonal-2");
    if (!diagonal1.value || !diagonal2.value) {
      alert("input should be number");
      return;
    } else if (diagonal1.value < 0 || diagonal2.value < 0) {
      alert("input should be positive number");
      return;
    } else {
      const rhombusArea = calculateArea(true, diagonal1.value, diagonal2.value);
      areCalculator(rhombusText, rhombusArea);
      diagonal1.value = "";
      diagonal2.value = "";
    }
  });

// Pentagon area calculator
document
  .getElementById("pentagon-area-calculator")
  .addEventListener("click", function () {
    const pentagonText = document.getElementById("pentagon-text").innerText;
    const pentagonPerimeter = document.getElementById("pentagon-perimeter");
    const pentagonApothem = document.getElementById("pentagon-apothem");
    if (!pentagonPerimeter.value || !pentagonApothem.value) {
      alert("input should be number");
      return;
    } else if (pentagonPerimeter.value < 0 || pentagonApothem.value < 0) {
      alert("input should be positive number");
      return;
    } else {
      const pentagonArea = calculateArea(
        true,
        pentagonPerimeter.value,
        pentagonApothem.value
      );
      areCalculator(pentagonText, pentagonArea);
      pentagonPerimeter.value = "";
      pentagonApothem.value = "";
    }
  });

// Ellipse area calculator
function ellipseCalculator(axisA, axisB) {
  let area = 3.14 * axisA * axisB;
  return area;
}

document
  .getElementById("ellipse-area-calculator")
  .addEventListener("click", function () {
    const ellipseText = document.getElementById("ellipse-text").innerText;
    const ellipseAxisA = document.getElementById("ellipse-axis-a");
    const ellipseAxisB = document.getElementById("ellipse-axis-b");

    if (!ellipseAxisA.value || !ellipseAxisB.value) {
      alert("input should be number");
      return;
    } else if (ellipseAxisA.value < 0 || ellipseAxisB.value < 0) {
      alert("input should be positive number");
      return;
    } else {
      const ellipseArea = ellipseCalculator(
        ellipseAxisA.value,
        ellipseAxisB.value
      );
      areCalculator(ellipseText, ellipseArea);
      ellipseAxisA.value = "";
      ellipseAxisB.value = "";
    }
  });
