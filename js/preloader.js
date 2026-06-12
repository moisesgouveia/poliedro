window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  const navLogo = document.querySelector('.site-logo img');

  if (!navLogo) {
    preloader.remove();
    return;
  }

  gsap.set(navLogo, { autoAlpha: 0 });
  gsap.set(preloader, { backgroundColor: 'rgba(8, 25, 45, 0)' }, 0);
  gsap.set(navLogo, { autoAlpha: 1 });
  preloader.remove();
});