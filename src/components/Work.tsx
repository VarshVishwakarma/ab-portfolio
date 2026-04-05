import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {

  const flexRef = useRef<HTMLDivElement>(null);

  /* =========================
     🔥 REAL PROJECT DATA
     ========================= */
  const projects = [
    {
      title: "Network Security Analyzer",
      category: "Cybersecurity",
      description: "Built a Python-based tool to analyze network traffic, detect anomalies, and identify potential cyber threats in real-time.",
      image: "/images/project1.webp",
    },
    {
      title: "Linux Security Automation",
      category: "Automation",
      description: "Automated system hardening and vulnerability scanning using Bash scripting and Linux security best practices.",
      image: "/images/project2.webp",
    },
    {
      title: "Cyber Threat Detection Model",
      category: "Machine Learning",
      description: "Developed a machine learning model to detect malicious patterns and predict potential cyber attacks.",
      image: "/images/project3.webp",
    },
    {
      title: "Penetration Testing Toolkit",
      category: "Ethical Hacking",
      description: "Created a custom toolkit for vulnerability assessment and penetration testing using open-source security tools.",
      image: "/images/project4.webp",
    },
    {
      title: "Security Log Analyzer",
      category: "SOC Operations",
      description: "Designed a log monitoring system to analyze security events and assist in incident response workflows.",
      image: "/images/project5.webp",
    },
    {
      title: "Cybersecurity Research Work",
      category: "Research",
      description: "Conducted in-depth research on modern cyber threats, attack vectors, and defense strategies in real-world environments.",
      image: "/images/project6.webp",
    },
  ];

  /* =========================
     GSAP SCROLL
     ========================= */
  useEffect(() => {

    let translateX = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");

      if (!box.length) return;

      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;

      const rect = box[0].getBoundingClientRect();

      const parentWidth =
        box[0].parentElement!.getBoundingClientRect().width;

      const padding =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;

      translateX =
        rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };

  }, []);

  /* =========================
     SLIDER BUTTONS
     ========================= */
  const nextSlide = () => {
    window.scrollTo({
      top: window.scrollY + 500,
      behavior: "smooth",
    });
  };

  const prevSlide = () => {
    window.scrollTo({
      top: window.scrollY - 500,
      behavior: "smooth",
    });
  };

  /* =========================
     UI
     ========================= */
  return (
    <div className="work-section" id="work">

      <div className="work-container section-container">

        <h2>
          My <span>Work</span>
        </h2>

        <div className="work-slider-controls">
          <button className="slider-btn" onClick={prevSlide}>‹</button>
          <button className="slider-btn" onClick={nextSlide}>›</button>
        </div>

        <div className="work-flex" ref={flexRef}>

          {projects.map((project, index) => (

            <div className="work-box" key={index}>

              <div className="work-info">

                <div className="work-title">

                  <h3>{String(index + 1).padStart(2, "0")}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>

                </div>

                <h4>Overview</h4>

                <p>{project.description}</p>

              </div>

              <WorkImage
                image={project.image}
                alt={project.title}
              />

            </div>

          ))}

        </div>

      </div>

    </div>
  );
};

export default Work;
