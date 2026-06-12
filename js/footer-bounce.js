gsap.registerPlugin(ScrollTrigger, MorphSVGPlugin);

const curvado = 'M0-0.3C0-0.3,464,156,1139,156S2278-0.3,2278-0.3V683H0V-0.3z';
const reto    = 'M0-0.3C0-0.3,464,0,1139,0s1139-0.3,1139-0.3V683H0V-0.3z';

const initFooterBounce = () => {
  document.querySelectorAll('.footer-bounce').forEach(section => {
    const path = section.querySelector('#bouncy-path');
    if (!path) return;

    ScrollTrigger.create({
      trigger: section,
      start: 'top bottom',
      toggleActions: 'play pause resume reverse',
      onEnter: self => {
        const velocidade = self.getVelocity();
        const variacao = velocidade / 10000;
        gsap.fromTo(path,
          { morphSVG: curvado },
          { duration: 2, morphSVG: reto, ease: `elastic.out(${1 + variacao}, ${1 - variacao})`, overwrite: true }
        );
      }
    });
  });
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initFooterBounce);
} else {
  initFooterBounce();
}
