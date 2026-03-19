import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ParaElement extends HTMLElement {
  anim?: gsap.core.Animation;
}

gsap.registerPlugin(ScrollTrigger);

export default function setSplitText() {
  ScrollTrigger.config({ ignoreMobileResize: true });

  if (window.innerWidth < 900) return;

  const paras: NodeListOf<ParaElement> = document.querySelectorAll(".para");
  const titles: NodeListOf<ParaElement> = document.querySelectorAll(".title");

  const TriggerStart = window.innerWidth <= 1024 ? "top 60%" : "20% 60%";
  const ToggleAction = "play pause resume reverse";

  // 🔥 PARA ANIMATION (NO SplitText)
  paras.forEach((para: ParaElement) => {
    if (para.anim) {
      para.anim.progress(1).kill();
    }

    para.anim = gsap.fromTo(
      para,
      { autoAlpha: 0, y: 50 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: para.parentElement,
          toggleActions: ToggleAction,
          start: TriggerStart,
        },
      }
    );
  });

  // 🔥 TITLE ANIMATION (NO SplitText)
  titles.forEach((title: ParaElement) => {
    if (title.anim) {
      title.anim.progress(1).kill();
    }

    title.anim = gsap.fromTo(
      title,
      { autoAlpha: 0, y: 50, rotate: 5 },
      {
        autoAlpha: 1,
        y: 0,
        rotate: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: title.parentElement,
          toggleActions: ToggleAction,
          start: TriggerStart,
        },
      }
    );
  });

  ScrollTrigger.refresh();
}