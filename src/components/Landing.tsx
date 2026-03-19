import { PropsWithChildren, useEffect } from "react";
import "./styles/Landing.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Landing = ({ children }: PropsWithChildren) => {

  useEffect(() => {

    const animation = gsap.to(".character-model", {
      opacity: 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".whatIDO",        // ✅ FIXED (correct section)
        start: "top 90%",           // starts early
        end: "top 40%",             // completes fade
        scrub: true,
      },
    });

    return () => {
      animation.scrollTrigger?.kill();
      animation.kill();
    };

  }, []);

  return (
    <>
      <div className="landing-section" id="landingDiv">

        <div className="landing-container">

          <div className="landing-intro">
            <h2>Hello! I'm</h2>

            <h1>
              ABHISHEK
              <br />
              <span>MAURYA</span>
            </h1>
          </div>

          <div className="landing-info">
            <h3>An Aspiring</h3>

            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Cybersecurity</div>
              <div className="landing-h2-2">Professional</div>
            </h2>

            <h2>
              <div className="landing-h2-info">SOC Analyst</div>
              <div className="landing-h2-info-1">Security Researcher</div>
            </h2>

          </div>

        </div>

        {children}

      </div>
    </>
  );
};

export default Landing;