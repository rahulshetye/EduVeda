document.querySelectorAll('.toggle-button').forEach(button => {
  button.addEventListener('click', () => {
      const card = button.closest('.card');
      const info = card.querySelector('.card-info');
      const uses = card.querySelector('.card-uses');

      if (!card.classList.contains('fullscreen')) {
          card.classList.add('fullscreen');
          info.style.display = 'block';
          uses.style.display = 'block';
          button.textContent = 'Less';
      } else {
          card.classList.remove('fullscreen');
          info.style.display = 'none';
          uses.style.display = 'none';
          button.textContent = 'Click Here';
      }
  });
});
