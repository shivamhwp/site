import Project from "./Project";
import { projects } from "../data";

const Main = () => {
  return (
    <>
      <div className="bg-black flex flex-col text-gray-300 lg:px-44 xl:px-80 md:px-12 px-8 w-screen h-screen lg:pt-16 pt-6">
        {/* navbar : proile icons and name*/}

        <nav className="h-16 w-full text-gray-300 flex items-center justify-between">
          <div className="font-bold text-xl">shivam</div>

          {/* profile icons */}

          <div className="font-bold flex gap-x-6">
            <a href="mailto:shivamdevelops@skiff.com" target="_blank">
              <img src="./mail.svg" alt="mail" className="h-6 w-6" />
            </a>
            <a href="https://github.com/shivamhwp" target="_blank">
              <img src="./github.svg" alt="github" className="h-6 w-6" />
            </a>

            <a href="https://linkedin.com/in/shivamhwp" target="_blank">
              <img src="./linkedin.svg" alt="linkedin" className="h-6 w-6" />
            </a>

            <a href="https://x.com/shivamhwp" target="_blank">
              <img src="./x.svg" alt="x" className="h-6 w-6" />
            </a>
          </div>
        </nav>

        {/* main content */}

        <div className="flex flex-col items-center justify-start h-full w-full text-xl ">
          {/* intro */}
          <div className="lg:pt-12 pt-8 ">
            Hi there, I'm <span className="font-bold text-white">Shivam.</span>{" "}
            I am an independent developer who loves to build things. I like
            design, web-development and music.
          </div>
          <div className="lg:pt-12 pt-8 w-full">
            rn I am building an extension that vanishes your social media feed
            at
            <a
              href="https://buildspace.so"
              className="text-white hover:underline px-1"
            >
              buildspace.
            </a>
          </div>

          {/* projects */}
          <div className="pt-12 flex flex-col w-full ">
            <div className="text-white font-bold text-2xl">Projects</div>

            <div className="grid grid-rows-auto lg:grid-cols-3 md:grid-cols-2 grid-cols-1 pr-2 gap-2 pt-6 pb-12 ">
              {projects.map((projects) => {
                return (
                  <div key={projects?.id}>
                    <Project
                      title={projects?.title}
                      description={projects?.description}
                      link={projects?.link}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <hr className="border-gray-400 pb-8 pt-6" />
      </div>
    </>
  );
};

export default Main;
