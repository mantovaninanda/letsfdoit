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

// Logo wall: hide the separator dot on the last brand of each wrapped line.
(function () {
  var items = document.querySelectorAll('.logo-wall li');
  if (!items.length) return;
  function mark() {
    items.forEach(function (li, i) {
      var next = items[i + 1];
      li.classList.toggle('row-end', !!next && next.offsetTop > li.offsetTop);
    });
  }
  mark();
  window.addEventListener('resize', mark);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(mark);
})();
