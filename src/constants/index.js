import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    java,
    php,
    mysql,
    csharp,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    kbz,
    tesla,
    unity,
    shopify,
    rumo,
    carrent,
    jobit,
    tripguide,
    threejs,
    prj_one,
    prj_two,
    prj_three,
    prj_four,
    prj_five,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Game Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer (MySQL)",
      icon: backend,
    },
    {
      title: "PHP Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "C#",
      icon: csharp,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "PHP",
      icon: php,
    },
    {
      name: "Unity",
      icon: unity,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineering Intern - Client Application Team",
      company_name: "KnowledgeBiz",
      icon: kbz,
      iconBg: "#E6DEDD",
      date: "Feb 2020 - Apr 2021",
      points: [
        "Built a social media application which added functionalities using the C.R.U.D. method for posts, profiles, and content.",
        "Designed and implemented a data base using the Entity Relationship Diagram and the Relational Model, helping with the development of the MySQL code.",
        "Designed and implemented all the UI in this project.",
      ],
    },
    {
      title: "Software Engineering Intern – Web Development Team",
      company_name: "RUMO",
      icon: rumo,
      iconBg: "#E6DEDD",
      date: "Oct 2020 - Dec 2020",
      points: [
        "Re-designed most of the UI, offering better ways to show varieties of content, such as news or information about the company.",
        "Built and implemented a feature where the user can search every school in Barreiro, which the user can filter.",
        "This feature is connected to the Google Maps API and the location of all schools who match the filters are pinpointed and shown in the page when the user searches for a certain school.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "BMI/BMR Calculator",
      description:
        "A tool designed to estimate Basal Metabolic Rate, the energy your body needs to maintain vital functions at rest. Supports most used metrics of measurement.",
      tags: [
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "blue-text-gradient",
        },
      ],
      image: prj_one,
      source_code_link: "https://github.com/Might757/bmir_calculator",
      webp_link: "https://a00313256.z6.web.core.windows.net",
    },
    {
      name: "League of Legends Wiki",
      description:
        "An Unofficial League of Legends Wiki, which breaks down each champion with its own page which shows each one's abilities, with the name of the abilities.",
      tags: [
        {
          name: "css",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "html",
          color: "pink-text-gradient",
        },
      ],
      image: prj_two,
      source_code_link: "https://github.com/Might757/lolWiki",
      webp_link: "https://a00313256.z6.web.core.windows.net",
    },
    {
      name: "REBM",
      description:
        "A user-friendly platform that helps people who didn't have the chance to take higher level studies find a school/course near them. The platform is fully in Portuguese.",
      tags: [
        {
          name: "css",
          color: "blue-text-gradient",
        },
        {
          name: "php",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: prj_three,
      source_code_link: "https://github.com/Might757/rumocasaa",
      webp_link: "https://empregabilidadebm.pt",
    },
    {
      name: "Your Not Generic Knight",
      description:
        "Your not so Generic Knight is a 2D top-down wave-like game who allows you to live in the skin of a Knight who defeats monsters for a living, with his magical staff, obviously.",
      tags: [
        {
          name: "GML",
          color: "blue-text-gradient",
        },
        {
          name: "gamedesign",
          color: "green-text-gradient",
        },
        {
          name: "2D",
          color: "pink-text-gradient",
        },
      ],
      image: prj_four,
      source_code_link: "https://github.com/Might757",
      webp_link: "https://mighht.itch.io/your-not-generic-knight-yngk",
    },
    {
      name: "Delivered",
      description:
        "Delivered is a 2D Platform game which tells the story of D, the envelope. D has to go through some small (or big) challenges to find his Mailbox.",
      tags: [
        {
          name: "GML",
          color: "blue-text-gradient",
        },
        {
          name: "platform",
          color: "green-text-gradient",
        },
        {
          name: "2D",
          color: "pink-text-gradient",
        },
      ],
      image: prj_five,
      source_code_link: "https://github.com/Might757/delivered",
      webp_link: "https://mighht.itch.io/delivered",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };