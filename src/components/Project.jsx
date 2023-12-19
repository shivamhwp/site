const Project = (props) => {
  return (
    <div className=" flex flex-col w-auto h-auto ">
      <div className="text-zinc-900 lg:pt-8 pt-6 font-medium  ">
        <a className="hover:underline" href={props.link} target="_blank">
          {props.title}
        </a>
        <a
          href={props.github_link}
          className="text-zinc-600 px-4 hover:underline font-normal"
        >
          repo
        </a>
      </div>
    </div>
  );
};

export default Project;
