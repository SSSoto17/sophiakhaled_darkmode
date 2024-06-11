let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector(".toggle");

const enableDarkMode = () => {
  darkModeToggle.classList.add("dark");
  document.documentElement.setAttribute("data-theme", "dark");
  localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
  darkModeToggle.classList.remove("dark");
  document.documentElement.setAttribute("data-theme", "light");
  localStorage.setItem("darkMode", "disabled");
};

window.addEventListener("DOMContentLoaded", () => {
  // Check if dark mode enabled
  darkMode = localStorage.getItem("darkMode");

  if (darkMode == "enabled") {
    enableDarkMode();
  }
});

darkModeToggle.addEventListener("click", () => {
  // Check if dark mode enabled
  darkMode = localStorage.getItem("darkMode");

  if (darkMode !== "enabled") {
    // If disabled, turn it on
    enableDarkMode();
  } else {
    // If enabled, turn it off
    disableDarkMode();
  }
});
