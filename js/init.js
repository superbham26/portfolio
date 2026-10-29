/* Runs in <head> before first paint: enables reveal animations and applies a saved theme without a flash. */
document.documentElement.classList.add("js");
if (localStorage.getItem("theme")) document.documentElement.dataset.theme = localStorage.getItem("theme");
