import gsap from "gsap";

export function initialFX() {
  document.body.style.overflowY = "auto";

  document
    .getElementsByTagName("main")[0]
    ?.classList.add("main-active");

  gsap.to("body", {
    backgroundColor: "#0b080c",
    duration: 0.5,
    delay: 1,
  });

  // 🔥 SIMPLE TEXT ANIMATION (NO SplitText)
  gsap.fromTo(
    [
      ".landing-info h3",
      ".landing-intro h2",
      ".landing-intro h1",
    ],
    {
      opacity: 0,
      y: 50,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2,
      delay: 0.3,
    }
  );

  gsap.fromTo(
    ".landing-info-h2",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      duration: 1,
      ease: "power1.inOut",
      y: 0,
      delay: 0.8,
    }
  );

  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1,
      ease: "power1.inOut",
      delay: 0.2,
    }
  );
}