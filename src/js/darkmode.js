let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.getElementById("toggle");

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
