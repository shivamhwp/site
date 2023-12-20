import { projects } from "../data";
import Navbar from "./Navbar";
import Project from "./Project";

const Main = () => {
  return (
    <div className="bg-zinc-200 flex flex-col text-zinc-900 lg:px-44 xl:px-96 md:px-12 px-8 w-screen h-screen lg:pt-16 pt-6">
      <Navbar />
      <div className="flex flex-col items-start justify-start h-full w-full text-xl ">
        {/* intro */}
        <div className="lg:pt-12 pt-16 ">
          hi there, i am shivam a full-stack web-dev.
        </div>
        {/* projects */}

        <div className="pt-16 flex flex-col w-full ">
          <div className="text-zinc-900 font-bold text-2xl"> projects</div>

          <div className="flex flex-col   pt-4 pb-12 ">
            {projects.map((projects) => {
              return (
                <div key={projects?.id}>
                  <Project
                    title={projects?.title}
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
  );
};

export default Main;
