// Jaya9 — lightweight interactivity
document.addEventListener('DOMContentLoaded', function () {
  var REDIRECT_URL = '/play-now/';
  var redirected = false;

  function goToOffer(e) {
    if (redirected) return;
    redirected = true;
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    window.location.href = REDIRECT_URL;
  }

  // Allow normal typing, autocomplete and paste. Redirect only on Enter or form submit.
  document.querySelectorAll('form input, form textarea, form select').forEach(function (field) {
    field.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        goToOffer(e);
      }
    });
  });

  document.querySelectorAll('form').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      goToOffer(e);
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = this.getAttribute('href');
      if (id.length > 1) {
        var el = document.querySelector(id);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });
});
