const outputScreen = document.getElementById("output-screen");

const display = (num) => {
  outputScreen.value += num;
};

const calculate = () => {
  try {
    outputScreen.value = eval(outputScreen.value);
  } catch (err) {
    alert("Invalid equation!");
  }
};

const allClear = () => {
  outputScreen.value = "";
};

const del = () => {
  outputScreen.value = outputScreen.value.slice(0, -1);
};
