import { collabApps, collabContent, collabText } from "../constants";
import Section from "./design/Section";
import { brainwaveSymbol, check, pomodeouro } from "../assets";
import Button from "./Button";
import { LeftCurve, RightCurve } from "./design/Collaboration";
import { Gradient } from "./design/Hero";
import { GradientLight } from "./design/Benefits";

const Collaboration = () => {
  return (
    <Section crosses>
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          <h2 className="h2 mb-4 md:mb-8 text-color-2 ">All About Quidditch</h2>
          <ul className="mx-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <img src={pomodeouro} width={62} height={62} alt="check" />
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
              </li>
            ))}
          </ul>
          <Button>Come be a champion</Button>
        </div>

        <div
          className="relative left-1/2 flex 
            w-[22rem] aspect-square border border-n-6 
            rounded-full -translate-x-1/2 scale:75 md:scale-100"
        >
          <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
            <div
              className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient
                    rounded-full"
            >
              <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                <img src={pomodeouro} width={60} height={60} alt="pomodeouro" />
              </div>
            </div>
          </div>
          <ul>
            {collabApps.map((app, index) => (
              <li
                key={app.id}
                className={`absolute 
                        top-0 left-1/2 
                        h-1/2 -ml-[1.5rem] origin-bottom 
                        rotate-${index * 45}`}
              >
                <div
                  className={`relative -top-[2.6rem]
                                flex w-[4.2rem] h-[3.2rem] bg-n-7
                               -rotate-${index * 45}
                                }`}
                >
                  <img
                    className="m-auto"
                    width={app.width}
                    height={app.height}
                    alt={app.title}
                    src={app.icon}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
