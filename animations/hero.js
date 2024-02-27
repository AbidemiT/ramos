export function hero({ parent }) {
  const parentEl = document.querySelector(parent);
  const h1s = parentEl.querySelectorAll("h1");

//   const tl = gsap.timeline();

//   [...h1s].forEach((h1) => {
//     tl.from(h1,1.8, {
//       y: 100,
//       ease: "power4.out",
//       delay: .5,
//       skewY: 7,
//       stagger: {
//         amount: 0.3,
//       },
//     });
//   });
}
