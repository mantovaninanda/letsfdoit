// Filter chips, "See all work" on mobile, and one video playing at a time.
(function () {
  var grid = document.getElementById('work-grid');
  if (!grid) return;
  var cards = grid.querySelectorAll('.card');

  document.querySelectorAll('.chip').forEach(function (chip) {
    chip.addEventListener('click', function () {
      document.querySelectorAll('.chip').forEach(function (c) { c.classList.remove('is-on'); });
      chip.classList.add('is-on');
      var f = chip.getAttribute('data-filter');
      grid.classList.toggle('filtered', f !== 'all');
      cards.forEach(function (card) {
        card.classList.toggle('is-hidden', f !== 'all' && card.getAttribute('data-niche') !== f);
      });
    });
  });

  var seeAll = document.getElementById('see-all');
  if (seeAll) seeAll.addEventListener('click', function () { grid.classList.add('show-all'); });

  document.addEventListener('play', function (e) {
    document.querySelectorAll('video').forEach(function (v) { if (v !== e.target) v.pause(); });
  }, true);
})();
