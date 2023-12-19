import React from "react";

const Navbar = () => {
  return (
    <nav className="h-16 w-full text-gray-900 flex items-center justify-between">
      <div className="font-bold text-xl">shivam</div>

      {/* profile icons */}

      <div className="font-normal flex gap-x-6 ">
        <a
          className="hover:underline"
          href="https://github.com/shivamhwp"
          target="_blank"
        >
          github
        </a>
        <a
          className="hover:underline"
          href="https://twitter.com/shivamhwp"
          target="_blank"
        >
          twitter
        </a>
        <a
          className="hover:underline"
          href="https://linkedin.com/in/shivamhwp"
          target="_blank"
        >
          linkedin
        </a>
        <a
          className="hover:underline"
          href="https://shivamr.hashnode.dev"
          target="_blank"
        >
          blog
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
