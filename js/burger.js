document.addEventListener('DOMContentLoaded', function() {
    const navBtn = document.querySelector('.nav-btn');
    const navLinks = document.querySelector('.nav-links');

    let isOpen = false;

    navBtn.addEventListener('click', function() {
      if (!isOpen) {
        navLinks.classList.add('active');
      } else {
        navLinks.classList.remove('active');
      }
      isOpen = !isOpen;
    });
  });