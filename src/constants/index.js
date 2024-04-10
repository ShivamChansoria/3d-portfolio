//Contains all the constants defined in the project as experience, skills, roles, etc.

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
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    gfg,
     ecommerce,
    coursesapp,
    amazonclone
   
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
      title: "Web Developer  MERN Stack",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: " Backend Developer {NodeJS}",
      icon: backend,
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "MERN Stack Developement",
      company_name: "Geeks For Geeks",
      icon: gfg,
      iconBg: "#383E56",
      date: "November 2022 - Febraury 2023",
      points: [
        "Enrolled in the GeeksForGeeks Full Stack Web Development professional certification course.",
        "Learned the Version control (git, gitHub) and web development using MERN Stack..",
        "There I implemented responsive design and ensuring cross-browser compatible E-commerce site.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "As a fresher there is no feedbacks available!! :)",
    },
  ];
  
  const projects = [
    {
      name: "E-Commerce",
      description:
        "E-Commerce shopping app helps you select the product from whichever category you want, then add it to the cart and place your order. But you need to logged in for that!!.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Firebase",
          color: "green-text-gradient",
        },
        {
          name: "SCSS",
          color: "pink-text-gradient",
        },
      ],
      image: ecommerce,
      source_code_link: "https://github.com/ShivamChansoria/e-commerce-web-app",
      host_link:"https://e-commerce-app-01-f2eae.web.app/",
    },
    {
      name: "Courses App",
      description:
        "It is the animated web app which is responsive also for mobile screens and lets the user to login/signup and have the product selected which they find to be useful.",
      tags: [
        {
          name: "AppWrite",
          color: "blue-text-gradient",
        },
        {
          name: "Redux-toolkit",
          color: "green-text-gradient",
        },
        {
          name: "Motion-Framer",
          color: "pink-text-gradient",
        },
      ],
      image: coursesapp,
      source_code_link: "https://github.com/ShivamChansoria/courses-app",
      host_link:"https://courses-app-gamma.vercel.app/",
    },
    {
      name: "Amazon-Clone",
      description:
        " Amazon Clone is a highly responsive e-commerce platform that mirrors the user-friendly design of Amazon. It seamlessly integrates 'Razorpay' for secure and efficient payment processing",
      tags: [
        {
          name: "Firebase Auth",
          color: "blue-text-gradient",
        },
        {
          name: "Razorpay",
          color: "green-text-gradient",
        },
        {
          name: "RestAPI",
          color: "pink-text-gradient",
        },
      ],
      image: amazonclone,
      host_link:"https://amazone-clone-1.vercel.app/",
      source_code_link: "https://github.com/ShivamChansoria/amazon-clone",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
