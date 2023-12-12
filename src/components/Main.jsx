import Project from "./Project";
import { projects } from "../data";

const Main = () => {
  return (
    <>
      <div className="bg-zinc-950 flex flex-col text-gray-400 lg:px-44 xl:px-96 md:px-12 px-8 w-screen h-screen lg:pt-16 pt-6">
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
            <a href="https://shivamr.hashnode.dev/" target="_blank">
              <img src="./globe.svg" alt="x" className="h-6 w-6" />
            </a>
          </div>
        </nav>

        {/* main content */}

        <div className="flex flex-col items-center justify-start h-full w-full text-xl ">
          {/* intro */}
          <div className="lg:pt-12 pt-8 ">
            Hi there, I'm{" "}
            <span className="font-bold text-zinc-200">Shivam.</span> I am an
            independent developer who loves to build things. I like design,
            web-dev and minimalism.
          </div>

          {/* projects */}
          <div className="pt-12 flex flex-col w-full ">
            <div className="text-zinc-200 font-bold text-2xl"> Projects</div>

            <div className="grid grid-rows-auto lg:grid-cols-3 md:grid-cols-2 grid-cols-1 pr-2 gap-2 pt-6 pb-12 ">
              {projects.map((projects) => {
                return (
                  <div key={projects?.id}>
                    <Project
                      title={projects?.title}
                      description={projects?.description}
                      link={projects?.link}
                      github_link={projects?.github_link}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
