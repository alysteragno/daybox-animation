document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.buttons button');
  const boxContainer = document.getElementById('box-container');
  let box = null;
  let animationTimeout = null;

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const day = button.getAttribute('data-day');
    });
  });
});
