window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  const introLogo = document.getElementById('preloader-logo');
  const navLogo = document.querySelector('.site-logo img');

  if (!navLogo) {
    preloader.remove();
    return;
  }

  gsap.set(navLogo, { autoAlpha: 0 });

  gsap.to(introLogo, {
    rotation: 720,
    duration: 1.5,
    ease: 'power2.inOut',
    onComplete: moverParaOCanto
  });

  function moverParaOCanto() {
    const destino = navLogo.getBoundingClientRect();
    const origem = introLogo.getBoundingClientRect();
    const deltaX = (destino.left + destino.width / 2) - (origem.left + origem.width / 2);
    const deltaY = (destino.top + destino.height / 2) - (origem.top + origem.height / 2);
    const escala = destino.width / origem.width;

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.set(navLogo, { autoAlpha: 1 });
        preloader.remove();
      }
    });

    tl.to(preloader, { backgroundColor: 'rgba(8, 25, 45, 0)', duration: 1 }, 0)
      .to(introLogo, { x: deltaX, y: deltaY, scale: escala, duration: 1, ease: 'power3.inOut' }, 0);
  }
});