document.addEventListener("DOMContentLoaded", function () {
  const body = document.querySelector("body"),
    sidebar = body.querySelector("nav"),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box"),
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text");

  toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    document.querySelector(".content").classList.toggle("sidebar-close");
  });

  searchBtn.addEventListener("click", () => {
    sidebar.classList.remove("close");
    document.querySelector(".content").classList.remove("sidebar-close");
  });

  modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
      modeText.innerText = "Modo Claro";
    } else {
      modeText.innerText = "Modo Oscuro";
    }
  });
});
