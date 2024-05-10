let displayInput = document.querySelector("#display");
let numbersValue = document.querySelectorAll("input");
let output = "";
let operators = ["=", "-", "+", "*", "/"];

const addValuesDisplay = (btnValue) => {
  if (btnValue === "AC") {
    output = "";
  } else if (btnValue === "DE") {
    output = output.toString().slice(0, -1);
  } else if (btnValue === "=" && output !== "") {
    output = eval(output);
  } else if (output === "" && operators.includes(btnValue)) {
    output = "";
  } else {
    output += btnValue;
  }

  displayInput.value = output;
};

numbersValue.forEach((button) => {
  button.addEventListener("click", (event) => {
    addValuesDisplay(event.target.value);
  });
});
