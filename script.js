const inputValue = document.getElementById("user-input");

document.querySelectorAll(".numbers").forEach(function (item) {
  item.addEventListener("click", function (e) {
    if (inputValue.innerText === "0" || inputValue.innerText === "NaN") {
      inputValue.innerText = "";
    }
    inputValue.innerText += e.target.innerText.trim();
  });
});


document.querySelectorAll(".operations").forEach(function (item) {
  item.addEventListener("click", function (e) {
    const operation = e.target.innerText.trim();
    const currentText = inputValue.innerText;
    const lastChar = currentText[currentText.length - 1];

    if (operation === "AC") {
      inputValue.innerText = "0"; 
    } else if (operation === "DEL") {

      inputValue.innerText =
        currentText.length > 1
          ? currentText.slice(0, -1)
          : "0"; 
    } else if (operation === "=") {
      try {
        inputValue.innerText = eval(currentText); 
      } catch (error) {
        inputValue.innerText = "NaN"; 
      }
    } else {

      if (!isNaN(lastChar) || lastChar === ".") {
        inputValue.innerText += operation;
      }
    }
  });
});
