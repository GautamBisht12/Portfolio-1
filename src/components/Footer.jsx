import { Link } from "react-router-dom";
import { selectDarkMode } from "../store/features/darkModeSlice";
import { useSelector } from "react-redux";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFaceLaughBeam } from "react-icons/fa6";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
const Footer = () => {
  const isDarkModeEnabled = useSelector(selectDarkMode);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline();

    const footerAnim = () => {
      tl.from(" .textFoot , .mailFoot ", {
        x: -200,
        duration: 1,

        opacity: 0,
        stagger: 0.4,
        scrollTrigger: {
          scrub: 3,
          trigger: ".footer",
          start: "top 90%",
          end: "top 90%",
        },
      });
    };
    const footerLinksAnim = () => {
      tl.from(" .linkdin , .github ", {
        scale: 0,
        x: 200,
        duration: 1,
        opacity: 0,
        stagger: 0.4,
        scrollTrigger: {
          scrub: 3,
          trigger: ".footer",
          start: "top 90%",
          end: "top 90%",
        },
      });
    };
    footerAnim();
    footerLinksAnim();
  }, []);
  return (
    <>
      <div
        className={`w-full h-[20vh]  ${
          isDarkModeEnabled ? "darkNav" : "lightNav"
        } flex justify-between items-center px-[20px] sm:px-[100px]`}
      >
        <div className="footer left w-[50%] ">
          <span className="textFoot sm:flex items-center justify-start gap-2">
            Made by Gautam Bisht <FaFaceLaughBeam className="inline" /> ©2024
          </span>
          <Link
            to="mailto:bishtgautam012gmail.com"
            className="mailFoot block hover:underline"
          >
            bishtgautam012@gail.com
          </Link>
        </div>
        <div className="overflow-hidden right w-[50%] h-[100px]  flex  justify-end items-center gap-5">
          <Link
            className="github"
            target="_blank"
            to="https://github.com/GautamBisht12"
          >
            <FaGithub className="text-3xl sm:text-4xl" />
          </Link>
          <Link
            className="linkdin"
            target="_blank"
            to="https://www.linkedin.com/in/gautam-bisht-863225277/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          >
            <FaLinkedin className="text-3xl sm:text-4xl" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
