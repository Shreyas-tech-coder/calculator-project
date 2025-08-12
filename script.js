function appendValue(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    try {
        document.getElementById("display").value = eval(document.getElementById("display").value);
    } catch {
        document.getElementById("display").value = "Error";
    }
}

function square() {
    let currentValue = document.getElementById("display").value;
    if (currentValue) {
        document.getElementById("display").value = Math.pow(currentValue, 2);
    }
}
