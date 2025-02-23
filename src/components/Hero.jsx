import { heroBackground, castelo } from "../assets";
import Button from "./Button";
import Section from "./design/Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "./Generating";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";

const Hero = () => {
  const parallaxRef = useRef(null);
  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div
          className="relative z-1 max-w-[62rem] 
        mx-auto text-center mb-[4rem] md:mb-20 lg:mb:
        [6rem]"
        >
          <h1 className="h1 mb-6 text-color-6">
            The best wizarding school {``} is
            <span className="inline-block relative">
              Hogwarts{" "}
              <div
                className="relative w-full mt-2 h-1 bottom-0 bg-gradient-to-r from-yellow-900 via-yellow-300 to-yellow-900 rounded-full transform hover:scale-x-110 transition-transform duration-300"
                style={{
                  clipPath:
                    "polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0 50%)",
                }}
              />{" "}
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Hogwarts is a legendary school of magic, where young witches and
            wizards learn powerful spells.
          </p>
          <Button href="#pricing" white>
            Get started
          </Button>
        </div>
        <div
          id="hat"
          className="relative max-w-[23rem] mx-auto 
        md:max-w-5xl xl:mb-24"
        >
          <div
            className="relative z-1 p-0.5 rounded-2xl
        bg-conic-gradient"
          >
            <div className="aspect-[33/40] rounded-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
              <img
                src={castelo}
                className="w-full h-full"
                alt="Hogwarts Castle"
              />
              <Generating
                className="absolute left-4 right-4
                    bottom-5 md:left-1/2
                    md:right-auto md:bottom-8 md:w-[31rem] 
                    md:-translate-x-1/2"
              />

              <ScrollParallax isAbsolutelyPositioned>
                <ul
                  className="hidden absolute -left-
                        [5.5rem] bottom-[7.5rem] px-1 py-1 
                        bg-hogwarts-silver/20 backdrop-blur border
                        border-hogwarts-silver/10 rounded-2xl xl:flex"
                >
                  {heroIcons.map((icon, index) => (
                    <li className="p-5" key={index}>
                      <img src={icon} width={24} height={25} alt={icon} />
                    </li>
                  ))}
                </ul>
              </ScrollParallax>

              <ScrollParallax isAbsolutelyPositioned>
                <Notification
                  className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] 
                        xl:flex"
                  title="Students"
                />
              </ScrollParallax>
            </div>

            {/* <Gradient /> */}
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={heroBackground}
              className="w-full"
              width={1440}
              height={1800}
              alt="hero"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle,transparent 30%, rgba(0,0,0,0.7) 60% ,black 100%)",
              }}
            />
          </div>

          <BackgroundCircles />
        </div>

        <CompanyLogos
          className="hidden relative z-10 
        mt-20 lg:block"
        />
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
