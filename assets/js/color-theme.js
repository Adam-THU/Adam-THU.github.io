(() => {
  "use strict";

  const storageKey = "zhe-dong-color-theme";
  const colors = { light: "#f1f0e9", dark: "#202728" };
  const isTheme = value => Object.prototype.hasOwnProperty.call(colors, value);

  function applyTheme(value) {
    const theme = isTheme(value) ? value : "light";
    document.documentElement.dataset.theme = theme;
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = colors[theme];
    const toggle = document.getElementById("color-theme-toggle");
    if (toggle) {
      toggle.setAttribute("aria-pressed", String(theme === "dark"));
      toggle.title = theme === "dark" ? "Switch to light mode" : "Switch to dark mode";
    }
  }

  let savedTheme;
  try {
    savedTheme = localStorage.getItem(storageKey);
  } catch (_) {
    // The theme still works when the browser disables local storage.
  }
  applyTheme(savedTheme);

  document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("color-theme-toggle");
    if (!toggle) return;
    applyTheme(document.documentElement.dataset.theme);
    toggle.hidden = false;
    toggle.addEventListener("click", () => {
      const theme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      applyTheme(theme);
      try {
        localStorage.setItem(storageKey, theme);
      } catch (_) {
        // Choosing a theme does not depend on being able to save it.
      }
    });
  });

  window.addEventListener("storage", event => {
    if (event.key === storageKey) applyTheme(event.newValue);
  });
})();
