export function logo({ parent }) {
    const parentEl = document.querySelector(parent);
    const logoContainer = parentEl.querySelector(".logo-container");
  
    const tl = gsap.timeline();

    tl.from(
      logoContainer,
      {
        yPercent: 100,
        opacity: 0,
        clearProps: "all",
      }
    );
  }
  