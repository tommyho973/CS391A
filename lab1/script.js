function checkAge() {
  let input = document.getElementById("input").value;
  let altOutput = document.getElementById("alt-output");
  let mainOutput = document.getElementById("main-output");

  if (isNaN(input)) {
    altOutput.style.display = "block";
    altOutput.innerHTML = "<h3>Please enter a number.</h3>";
  } else if (input < 0) {
    altOutput.style.display = "block";
    altOutput.innerHTML = "<h3>Negative numbers are not acceptable.</h3>";
  } else if (input % 1 != 0) {
    altOutput.style.display = "block";
    altOutput.innerHTML = "<h3>Enter a valid age.</h3>";
  } else if (input >= 18 && input <= 120) {
    mainOutput.style.display = "block";
    altOutput.style.display = "none";
  } else {
    altOutput.style.display = "block";
    altOutput.innerHTML = "<h3>You may not see the content.</h3>";
  }
}
