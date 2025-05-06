document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("toggle-theme");
    const body = document.body;
  
    // Check if the theme preference is saved in localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      body.classList.add(savedTheme); // Apply saved theme on load
    }
  
    // Toggle between dark and light themes
    toggleButton.addEventListener("click", () => {
      body.classList.toggle("dark-theme");
      body.classList.toggle("light-theme");
  
      // Save the current theme in localStorage
      if (body.classList.contains("dark-theme")) {
        localStorage.setItem("theme", "dark-theme");
      } else {
        localStorage.setItem("theme", "light-theme");
      }
    });
  });