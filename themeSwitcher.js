const switcherCircle = document.querySelector(".switcherCircle");
let switcherTheme = true;
document
  .querySelector(".buttonSwitcher")
  .addEventListener("click", function () {
    if (switcherTheme == true) {
      switcherTheme = false;
      this.style.justifyContent = "end";
      this.style.backgroundColor = "#f0f0f0";
      switcherCircle.style.backgroundColor = "#181818";

      document.querySelector("#stylesheetLight").href = "darkMode.css";
    } else {
      switcherTheme = true;
      this.style.justifyContent = "start";
      this.style.backgroundColor = "#181818";
      switcherCircle.style.backgroundColor = "#f0f0f0";

      document.querySelector("#stylesheetLight").href = "LightMode.css";
    }
  });
