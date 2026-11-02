(() => {
  "use strict";

  const storageKey = "zhe-dong-color-theme";
  const colors = { soft: "#f1f0e9", light: "#ffffff", dark: "#202728" };
  const isTheme = value => Object.prototype.hasOwnProperty.call(colors, value);

  function applyTheme(value) {
    const theme = isTheme(value) ? value : "soft";
    document.documentElement.dataset.theme = theme;
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = colors[theme];
    const picker = document.getElementById("color-theme");
    if (picker) picker.value = theme;
  }

  let savedTheme;
  try {
    savedTheme = localStorage.getItem(storageKey);
  } catch (_) {
    // The theme still works when the browser disables local storage.
  }
  applyTheme(savedTheme);

  document.addEventListener("DOMContentLoaded", () => {
    const picker = document.getElementById("color-theme");
    if (!picker) return;
    picker.value = document.documentElement.dataset.theme;
    picker.closest(".theme-control").hidden = false;
    picker.addEventListener("change", () => {
      applyTheme(picker.value);
      try {
        localStorage.setItem(storageKey, picker.value);
      } catch (_) {
        // Choosing a theme does not depend on being able to save it.
      }
    });
  });

  window.addEventListener("storage", event => {
    if (event.key === storageKey) applyTheme(event.newValue);
  });
})();
