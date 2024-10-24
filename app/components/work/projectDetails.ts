import {
    SiCplusplus,
    SiFramer,
    SiGithub, SiNeovim,
    SiNextdotjs,
    SiReact,
    SiRust,
    SiTailwindcss,
    SiTypescript,
    SiWebgl,
    SiVuedotjs,
    SiZig
} from "react-icons/si";
import {IconType} from "react-icons";

export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: IconType[];
  techNames: string[];
  techLinks: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const projects = [
    {
        id: 0,
        name: "BookWorld",
        description:
            "Built with React, Typescript, Tailwind CSS.",
        technologies: [SiTypescript, SiReact, SiTailwindcss],
        techNames: ["TypeScript", "React", "Tailwind CSS"],
        techLinks: ["https://www.typescriptlang.org/", "https://reactjs.org/", "https://tailwindcss.com/"],
        github: "https://github.com/jggajjar11/BookWorld",
        demo: "https://bookworlds.netlify.app/",
        image: "/projects/books-worlds.png",
        available: true,
    },
    {
        id: 1,
        name: "Vue Certification Clone",
        description:
            "Cloned the Vue Certification Website using Vue.js, Tailwind CSS.",
        technologies: [SiVuedotjs, SiTailwindcss],
        techNames: ["Vue","Tailwind CSS"],
        techLinks: ["https://vuejs.org/","https://tailwindcss.com/"],
        github: "https://github.com/jggajjar11/vue_certification_dummy",
        demo: "https://vue-certification.netlify.app/",
        image: "/projects/vue-certification.png",
        available: true,
    },
];
