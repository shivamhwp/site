import { Github, Twitter, Youtube } from "lucide-react";

export type social = {
  id: number;
  title: string;
  link: string;
  icon?: React.ComponentType;
};
export type movie = {
  title: string;
  description?: string;
};

export type song = {
  title: string;
  link: string;
};

export type code_projects = {
  project_name: string;
  github: string;
  image?: string;
  live_link?: string;
  docs: string;
  description: string;
};

export const code_projects: code_projects[] = [
  {
    project_name: "git-acm",
    description: "generate meaningful commit messages locally using AI.",
    github: "https://github.com/shivamhwp/git-acm",
    docs: "https://git-acm.pages.dev",
  },
  {
    project_name: "isup",
    description: "on-device monitoring, lightweight, instant, and efficient.",
    github: "https://github.com/shivamhwp/isup",
    docs: "https://isup-docs.pages.dev",
  },
];

export const not_found_images = [
  {
    id: 1,
    url: "https://61izvpe5ob.ufs.sh/f/ghNXXt9jhBA7heePrgO1cBmwLdT5ZRyqHtP3IUGSA4gxfQV0",
  },
  {
    id: 2,
    url: "https://61izvpe5ob.ufs.sh/f/ghNXXt9jhBA7gFJs0j9jhBA7aDxcElbpQXquP9kMnvOLZ6Ci",
  },
  {
    id: 3,
    url: "https://61izvpe5ob.ufs.sh/f/ghNXXt9jhBA7qaa9EJEcIaOMeuEbCg1HmlAi9sxSNX24GV7y",
  },
  {
    id: 4,
    url: "https://61izvpe5ob.ufs.sh/f/ghNXXt9jhBA7gz3sS49jhBA7aDxcElbpQXquP9kMnvOLZ6Ci",
  },
  {
    id: 5,
    url: "https://61izvpe5ob.ufs.sh/f/ghNXXt9jhBA7htdZu71cBmwLdT5ZRyqHtP3IUGSA4gxfQV0D",
  },
  {
    id: 6,
    url: "https://61izvpe5ob.ufs.sh/f/ghNXXt9jhBA782wmUSLJcvMWsprOm12CiUPSoX4uyKq307Rn",
  },
  {
    id: 7,
    url: "https://61izvpe5ob.ufs.sh/f/ghNXXt9jhBA7iyZrlBRnAUwghlYnQ36TSrL0EupG5CascFRb",
  },
];

export const songs = [
  {
    title: "Requiem for the Brigadier General",
    link: "https://www.youtube.com/watch?v=G6kSqPpSz1g",
  },
  {
    title: "But Not For Me (Vocal Version) ",
    link: "https://www.youtube.com/watch?v=QwAwtMt8t4s",
  },
  {
    title: "Into the night",
    link: "https://youtu.be/d-ePNt_NlF4",
  },
  {
    title: "Lacrimosa",
    link: "https://youtu.be/k1-TrAvp_xs",
  },
  {
    title: "3.0_1-one2blame.fyc",
    link: "https://www.youtube.com/watch?v=0pux7a1y8xo",
  },
  {
    title: "Piano Black",
    link: "https://youtu.be/ssmYUDYtrKA",
  },
  {
    title: "Tank!",
    link: "https://youtu.be/UFFa0QoHWvE",
  },
  {
    title: "An Ordinary Day",
    link: "https://www.youtube.com/watch?v=dygUU9itPXw",
  },
  {
    title: "YouSeeBIGGIRL/T:T",
    link: "https://youtu.be/vy63u2hKoPE",
  },
  {
    title: "Idea 10",
    link: "https://www.youtube.com/watch?v=5OIeIaAhQOg",
  },
  {
    title: "1.4_1-squ4rewiththeuniverse.wma",
    link: "https://www.youtube.com/watch?v=n3x0GylBOM0",
  },
  {
    title: "Night of the end",
    link: "https://youtu.be/AVgrV4clLTc",
  },

  {
    title: "pseudo",
    link: "https://www.youtube.com/watch?v=9XHVg4GTzPs",
  },
];

export const movies: movie[] = [
  {
    title: "Attack On Titan",
    description: "one of my favourites. heartbound.",
  },
  {
    title: "FA:Brotherhood(2011)",
    description: "one of my favourites.",
  },
  {
    title: "Jujutsu Kaisen",
    description: "super interesting, crazy storyline.",
  },
  {
    title: "Se7en",
    description: "simple and sanguinary. ofc by david fincher.",
  },
  {
    title: "Hunter x Hunter(2011)",
    description: "one of my favourites.",
  },
  {
    title: "Whiplash",
    description: "obsession explained. on the point cast.",
  },
  {
    title: "Mr Robot",
    description: "you should watch this. rami went godmode.",
  },
  {
    title: "Manchester by the Sea",
    description: "casey affleck shows you his acting range.",
  },
  {
    title: "The Prestige",
    description: "an underrated movie by Christopher Nolan.",
  },
  {
    title: "nymphomaniac vol 1&2",
    description:
      "one of the most interesting movies i've seen lately. Charlotte Lucy Gainsbourg & Stacy Martin acting was insane.",
  },
];

export const socials: social[] = [
  {
    id: 1,
    title: "x.com",
    link: "https://x.com/shivamhwp",
    icon: Twitter,
  },
  {
    id: 2,
    title: "github",
    link: "https://github.com/shivamhwp",
    icon: Github,
  },

  // {
  //   id: 3,
  //   title: "linkedin",
  //   link: "https://www.linkedin.com/in/shivamhwp/",
  //   icon: "Linkedin",
  // },

  {
    id: 3,
    title: "youtube",
    link: "https://www.youtube.com/@shivamhwp_",
    icon: Youtube,
  },
];

export const walls = [
  {
    id: 1,
    link: "https://utfs.io/f/cd8841e4-0cd3-4c3a-b260-6c1b416f45bf-ar80q7.png",
  },
];
