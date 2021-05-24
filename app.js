const outputScreen = document.getElementById("output-screen");

function display(num) {
	outputScreen.value += num;
}

function calculate() {
	outputScreen.value = eval(outputScreen.value);
}
