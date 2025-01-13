import Section from "./design/Section";
import Heading from "./Heading";
import {
  service1,
  service2,
  service3,
  taca,
  aula1,
  aula2,
  check,
} from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import Generating from "./Generating";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="Triwizard Tournament."
          text="Hogwarts is the greatest champion of the Triwizard Tournament in the wizarding world."
        />

        <div className="relative">
          <div
            className="relative z-1 flex items-center 
                h-[39rem] mb-5 p-8 border border-n-1/10
                rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]"
          >
            <div
              className="absolute top-0 left-0 w-full 
                    h-full pointer-events-none md:w-3/5 xl:w-auto"
            >
              <img
                className="w-full h-full object-cover
                        md:object-right"
                width={800}
                alt="Taca"
                height={730}
                src={taca}
              />
            </div>
            <div
              className="relative z-1 max-w-[17rem]
                    ml-auto"
            >
              <h4 className="h4 mb-4 text-color-1 text-center">
                Triwizard Tournament.
              </h4>
              <ul className="body-2">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-8"
                  >
                    <img width={24} height={24} src={taca} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border  border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolutes inset-0">
                <img
                  src={aula1}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>

              <div
                className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b
                            from-n-8/0 to-n-8/90 lg:p-15"
              >
                <h4 className="h4 mb-4">Advanced Classes</h4>

                <p className="body-2 mb-[3rem] text-n-1">
                  We have the best classes! Hogwarts is the best wizarding
                  school for your child to study!
                </p>
              </div>
            </div>

            <div className="p-4 bg-n-7 rounded-3-xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4 text-center text-color-4">
                  The best school in the wizarding world
                </h4>
                <p className="body-2 mb-[2rem] text-n-1">
                  Our classes: Spells, Transfiguration, Potions, Herbology,
                  Astronomy, Defense Against the Dark Arts, History of Magic,
                  Divination, Muggle Studies, Care of Magical Creatures.
                </p>

                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((item, index) => (
                    <li
                      key={index}
                      className={`rounded-2xl flex items-center justify-center ${
                        index === 2
                          ? "w-[3rem] h-[3rem] p-0.25 md:w-[4.5rem] md:h-[4.5rem]"
                          : "flex w-10 h-10 md:w-35 md:h-35"
                      }`}
                    >
                      <div
                        className={
                          index === 2
                            ? "flex items-center justify-center w-full h-full"
                            : ""
                        }
                      >
                        <img src={item} width={72} height={72} alt={item} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className="relative h-[20rem] bg-n-8
                            rounded-xl overflow-hidden md:h-[25rem]"
              >
                <img
                  src={aula2}
                  className="w-full
                                h-full object-cover"
                  width={1080}
                  height={920}
                  alt="Scary robot"
                />
                <VideoChatMessage />
              </div>
            </div>
          </div>
          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
