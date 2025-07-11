export default function useScrollAnimations(sections: HTMLElement[]) {
  const nuxtApp = useNuxtApp();
  const gsap = nuxtApp.$gsap;
  sections.forEach((el, i) => {
    const fromLeft = i % 2 === 0

    gsap.fromTo(el.querySelector('.terminal'),
      { x: fromLeft ? '-100%' : '100%', opacity: 0 },
      {
        x: '0%',
        opacity: 1,
        scrollTrigger: {
          trigger: el,
          start: 'top center',
          end: 'bottom center',
          toggleActions: 'play reverse play reverse'
        }
      }
    )

    gsap.to(el.querySelector('.terminal'),
      {
        x: fromLeft ? '100%' : '-100%',
        opacity: 0,
        scrollTrigger: {
          trigger: el,
          start: 'bottom center',
          end: () => `+=${window.innerHeight}`,
          scrub: true
        }
      }
    )
  })
}
