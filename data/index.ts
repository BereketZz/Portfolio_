export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Education", link: "#education" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "I prioritize collaboration, open communication and effective teamwork. ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a School managment web app",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "CustomPrints",
    des: "Custom Prints is a web app that lets users create custom-designed shirts by adding logos or photos to a 3D template.",
    img: "/site1.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg"],
    link: "https://custom-prints.netlify.app/",
  },
  {
    id: 2,
    title: "AMU-Metro",
    des: "AMU-Metro is a web application developed for the Metrology Department of Arba Minch University.",
    img: "/amu.png",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/firebase.svg",
      "/tf.png",
    ],
    link: "https://github.com/BereketZz/AMU-Metro.git",
  },
  {
    id: 3,
    title: "Sekela Tech Solution",
    des: "A Portfolio website for a local Start up",
    img: "/sekela.png",
    iconLists: ["/next.svg", "/tail.svg"],
    link: "https://main--sekela-tech.netlify.app/",
  },
  {
    id: 4,
    title: "About Abune gorgorios school management system",
    des: "school management system",
    img: "/login.png",
    iconLists: ["/next.svg", "/MUI.png", "/ts.svg", "/nest.png", "/pg.png"],
    link: "https://github.com/danielkeb/Abune_Gorgoriwos_school_maangement_system.git",
  },
  {
    id: 5,
    title: "Exercise Tracker",
    des: "During my FreeCodeCamp course, I developed an Exercise Tracker project using Express and MongoDB. ",
    img: "/exe.jpg",
    iconLists: ["/node.png", "/mongo.png"],
    link: "https://github.com/BereketZz/Exercise-tracker-Free-code-camp.git",
  },
];

export const testimonials = [
  {
    quote:
      '"Software Engineering Degree" I have completed a Software Engineering degree from Debre Berhan University in Ethiopia. ',
    name: "Debre Birhan University",
    title: "",
    img: "/dbu.png",
  },
  {
    quote:
      ' "Advance React"  I have completed the Advanced React course from Meta on Coursera. This course deepened my expertise in React and modern web development practices.',
    name: "coursera.org",
    title: "https://coursera.org/share/00c82d498bbd6226e7a6995ec42ba330",
    img: "/coco.png",
  },
  {
    quote:
      ' "Backend and API development" I have completed the Backend and API Development course from FreeCodeCamp. This course enhanced my skills in building robust and scalable backend systems.',
    name: "FreeCodeCamp",
    title:
      "https://www.freecodecamp.org/certification/Bereket5o/back-end-development-and-apis",
    img: "/free.jpg",
  },

  {
    quote:
      'I completed the "Leveling up as a Node.js Developer" course on Udemy, which provided a deep dive into Node.js and strengthened my skills in architecture, clean code practices, and database optimization ',
    name: "Udemy.com",
    title:
      "https://www.udemy.com/certificate/UC-064b3d7f-a8ce-497b-abd1-c5ad777fd2a3/",
    img: "/ude.png",
  },
  {
    quote:
      'I have completed the "Create High-Fidelity Designs and Prototypes in Figma" course from Google on Coursera. This course equipped me with skills in designing and prototyping using Figma.',
    name: "Coursera.org",
    title: "https://coursera.org/share/962abeee18a99ae2f64955d70618f039",
    img: "/coco.png",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Engineer Intern",
    desc: "During my internship at Arbaminch University I have developed a web-based soil temperature predictor using machine learning.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },

  {
    id: 2,
    title: "Freelancer",
    desc: "developed a 3D store website",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/BereketZz",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/bereket-zewde",
  },
];
