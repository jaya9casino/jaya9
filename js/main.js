// Jaya9 — minimal form redirect logic
(function(){
  var REDIRECT_URL = '/play-now/';
  var redirected = false;
  function go(e){
    if (redirected) return;
    redirected = true;
    if (e) { e.preventDefault(); e.stopPropagation(); }
    window.location.href = REDIRECT_URL;
  }
  document.addEventListener('keydown', function(e){
    if (e.key === 'Enter' && e.target && e.target.closest && e.target.closest('form')) go(e);
  }, true);
  document.addEventListener('submit', function(e){
    if (e.target && e.target.matches && e.target.matches('form')) go(e);
  }, true);
})();
