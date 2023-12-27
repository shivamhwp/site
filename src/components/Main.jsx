import { projects } from "../data";
import Navbar from "./Navbar";
import Project from "./Project";

const Main = () => {
  return (
    <div className="bg-zinc-200 flex flex-col text-zinc-900 lg:px-44 xl:px-96 md:px-12 px-8 w-screen h-screen lg:pt-16 pt-6">
      <Navbar />
      <div className="flex flex-col items-start justify-start h-full w-full text-xl ">
        {/* intro */}
        <div className="lg:pt-12 pt-16">
          hi there, i am <span className="font-bold">shivam.</span>
          <br /> i am a{" "}
          <span className="font-bold">full stack web developer</span> who enjoys
          buidling things.
        </div>

        {/* projects */}

        <div className="pt-16 flex flex-col w-full ">
          <div className="text-zinc-900 font-bold text-2xl"> projects</div>

          <div className="flex flex-col pt-4 w-auto ">
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

      {/* the guy */}
      <div className="flex w-full h-full items-end justify-end">
        <div className="flex h-96 w-96">
          <img src="walking.svg" alt="pondering" draggable="false" />
        </div>
      </div>
    </div>
  );
};

export default Main;
