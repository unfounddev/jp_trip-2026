(() => {
  const boxes = [...document.querySelectorAll('input[type="checkbox"]')];
  boxes.forEach((el, i) => {
    const key = `jp26_check_${i}`;
    try { el.checked = localStorage.getItem(key) === '1'; } catch (_) {}
    el.addEventListener('change', () => {
      try { localStorage.setItem(key, el.checked ? '1' : '0'); } catch (_) {}
    });
  });
})();
