const Project = (props) => {
  return (
    <div className=" flex flex-col w-auto h-auto ">
      <div className="text-zinc-300 lg:pt-8 pt-6 font-semibold hover:text-zinc-100">
        <a href={props.link} target="_blank">
          {props.title}
        </a>
      </div>
      <div className="text-zinc-400 lg:pt-4 pt-2 overflow-hidden">
        {props.description}
      </div>
    </div>
  );
};

export default Project;
