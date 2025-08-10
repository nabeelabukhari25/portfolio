document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.nav-btn');
  const modules = document.querySelectorAll('.module');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const target = btn.dataset.target;
      modules.forEach(m => m.classList.toggle('active', m.id === target));

      // sprite wiggle for feedback
      const sprite = document.querySelector('.trainer-img');
      if (sprite) {
        sprite.style.transform = 'translateY(-6px)';
        sprite.style.transition = 'transform 0.18s';
        setTimeout(() => sprite.style.transform = '', 220);
      }
    });
  });

  // default click
  const defaultBtn = document.querySelector('.nav-btn.active');
  if (defaultBtn) defaultBtn.click();
});
