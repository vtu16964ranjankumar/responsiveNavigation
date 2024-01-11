const mobile_nav = document.querySelector('.mobile-navbar-btn');
const nav_header = document.querySelector('.header');
const toggleNavbar = () => {
  // alert('clicked');
  nav_header.classList.toggle('active');
};

mobile_nav.addEventListener('click', () => toggleNavbar());