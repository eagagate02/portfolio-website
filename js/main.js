/* ==========================================================================
   Ernesto Gagate Jr — Personal Portfolio
   Plain browser JavaScript. No libraries beyond the Bootstrap bundle that
   index.html already loads.

   1. Colour mode switch (Bootstrap 5.3 data-bs-theme)
   2. Navigation state
   3. Contact form validation
   ========================================================================== */
(function () {
  "use strict";

  /* ========================================================================
     1. Colour mode switch
     The stored preference wins. Without one, the operating system setting is
     followed and kept in sync while the page is open.
     ======================================================================== */
  var STORAGE_KEY = "portfolio-theme";
  var root = document.documentElement;
  var toggle = document.getElementById("themeToggle");

  // Private browsing and blocked site data both make storage throw.
  function readStoredTheme() {
    try {
      return window.localStorage.getItem(STORAGE_KEY);
    } catch (error) {
      return null;
    }
  }

  function storeTheme(theme) {
    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch (error) {
      /* Preference simply will not persist. Nothing else to do. */
    }
  }

  function systemPrefersDark() {
    return (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  }

  function applyTheme(theme) {
    root.setAttribute("data-bs-theme", theme);

    if (toggle) {
      // The button is a switch: pressed means dark mode is on.
      toggle.setAttribute("aria-pressed", String(theme === "dark"));
      toggle.setAttribute(
        "aria-label",
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      );
    }
  }

  applyTheme(readStoredTheme() || (systemPrefersDark() ? "dark" : "light"));

  if (toggle) {
    toggle.addEventListener("click", function () {
      var next =
        root.getAttribute("data-bs-theme") === "dark" ? "light" : "dark";
      applyTheme(next);
      storeTheme(next);
    });
  }

  // Follow the system setting until the visitor makes an explicit choice.
  if (window.matchMedia) {
    var darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
    var onSystemChange = function (event) {
      if (!readStoredTheme()) {
        applyTheme(event.matches ? "dark" : "light");
      }
    };

    if (typeof darkQuery.addEventListener === "function") {
      darkQuery.addEventListener("change", onSystemChange);
    } else if (typeof darkQuery.addListener === "function") {
      darkQuery.addListener(onSystemChange); // Older Safari
    }
  }

  /* ========================================================================
     2. Navigation state
     ======================================================================== */
  var navList = document.getElementById("mainNav");
  var navCollapse = document.getElementById("mainNavCollapse");

  // Scrollspy adds .active, but assistive technology needs aria-current too.
  if (navList) {
    document.body.addEventListener("activate.bs.scrollspy", function () {
      var links = navList.querySelectorAll(".nav-link");

      Array.prototype.forEach.call(links, function (link) {
        if (link.classList.contains("active")) {
          link.setAttribute("aria-current", "true");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    });
  }

  // On small screens, close the expanded menu once a link is chosen.
  if (navList && navCollapse && window.bootstrap) {
    navList.addEventListener("click", function (event) {
      if (
        event.target.classList.contains("nav-link") &&
        navCollapse.classList.contains("show")
      ) {
        window.bootstrap.Collapse.getOrCreateInstance(navCollapse).hide();
      }
    });
  }

  /* ========================================================================
     3. Contact form validation
     The form carries novalidate, so the browser stays quiet and Bootstrap's
     .was-validated styling shows the messages instead.
     ======================================================================== */
  var forms = document.querySelectorAll(".needs-validation");

  Array.prototype.forEach.call(forms, function (form) {
    form.addEventListener("submit", function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();

        // Move focus to the first problem so it is announced and visible.
        var firstInvalid = form.querySelector(":invalid");
        if (firstInvalid) {
          firstInvalid.focus();
        }
      }

      form.classList.add("was-validated");
    });
  });
})();
