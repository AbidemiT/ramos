export function nav({ parent }) {
  const parentEl = document.querySelector(parent);
  const navbar = parentEl.querySelector(".navbar");
  const navLinks = parentEl.querySelector(".nav-links");
  const logoContainer = parentEl.querySelector(".logo-container");
  const signUp = parentEl.querySelector(".signup");

  const tl = gsap.timeline();

  tl.from(
    navbar,
    {
      yPercent: 100,
      clearProps: "all",
    },
    "<"
  );

  tl.from(
    navLinks,
    {
      yPercent: 100,
      opacity: 0,
      clearProps: "all",
    }
  );
  tl.from(
    signUp,
    {
      yPercent: 100,
      opacity: 0,
      clearProps: "all",
    }
  );
}
