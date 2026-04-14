document.addEventListener('DOMContentLoaded', () => {
    const rating = document.querySelector('.stars');
    const stars = rating.querySelectorAll('.star');
  
    stars.forEach((star, index) => {
      star.addEventListener('mouseenter', () => {
        stars.forEach((s, i) => {
          s.classList.toggle('is-filled', i <= index);
        });
      });
    });
  
    rating.addEventListener('mouseleave', () => {
      stars.forEach(s => s.classList.remove('is-filled'));
    });
  });