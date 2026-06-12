window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  const introLogo = document.getElementById('preloader-logo');
  const navLogo = document.querySelector('.site-logo img');

  if (!navLogo) {
    preloader.remove();
    return;
  }

  gsap.set(navLogo, { autoAlpha: 0 });

  const tl = gsap.timeline({
    onComplete: () => {
      gsap.set(navLogo, { autoAlpha: 1 });
      preloader.remove();
    }
  });

  tl.to(introLogo, { scale: 1.15, duration: 0.6, ease: 'power2.out' }, 0)
    .to(introLogo, { scale: 1, duration: 0.5, ease: 'power2.inOut' }, 0.6)
    .to(preloader, { backgroundColor: 'rgba(8, 25, 45, 0)', duration: 0.8 }, 0.8);
});