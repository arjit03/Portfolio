/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Arjit Sasan",
  title: "Hi, I'm Arjit Sasan",
  subTitle: emoji(
    "I’m a frontend-focused MERN developer with experience building responsive applications using React.js and Next.js. I’m currently expanding my skills toward backend development with Node.js and MongoDB to become a full-stack developer."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1YegusR802m6uo3u_UpBkggBam-pMRk18/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/arjit03",
  linkedin: "https://www.linkedin.com/in/arjit-sasan-8b6863392/",
  gmail: "arjit.sasan@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "I create modern, responsive websites and web apps with clean UI and solid functionality.",
  skills: [
    emoji("⚡ Build modern, responsive, and user-friendly web interfaces"),
    emoji("⚡ Develop full-stack web applications using React, Next.js, Express.js, and modern JavaScript"),
    emoji("⚡ Integrate APIs and third-party services for real-world functionality"),
    emoji("⚡ Create clean and responsive UI designs using Tailwind CSS"),
    emoji("⚡ Build reusable and scalable frontend components"),
    emoji("⚡ Develop RESTful APIs and backend functionality using Node.js and Express.js"),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },

    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "React.js",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Next.js",
      imageSrc: require("./assets/images/nextjs.webp")
    }, {
      skillName: "Tailwind CSS",
      imageSrc: require("./assets/images/tailwindcss.webp")
    }, {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    }, {
      skillName: "MongoDB",
      imageSrc: require("./assets/images/MongoDB.png")
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Quantum University",
      logo: require("./assets/images/logo.png"),
      subHeader: "Master of Computer Applications",
      duration: "2024 - 2026",
      desc: "CGPA - 8.05",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "Quantum University",
      logo: require("./assets/images/logo.png"),
      subHeader: "Bachelor of Computer Applications",
      duration: "2021 - 2024",
      desc: "CGPA - 7.89",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Front-End Developer Intern",
      company: "SoftKwit",
      companylogo: require("./assets/images/softkwit.png"),
      date: "June 2025 – August 2025",
      desc: "Worked on building responsive and interactive web applications using React.js, Next.js and modern frontend tools.",
      descBullets: [
        "Developed reusable UI components using React.js",
        "Improved application performance and user experience"
      ]
    }
    ,
    {
      role: "Web Developer Intern",
      company: "Techonical Infotech Pvt Ltd",
      companylogo: require("./assets/images/techonical.jfif"),
      date: "July 2023 – August 2023",
      desc: "Worked on developing dynamic web applications using PHP with a focus on functionality and backend integration.",
      descBullets: [
        "Built and maintained server-side functionality using PHP",
        "Integrated frontend components with backend logic"
      ]
    }
    ,

  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Some Projects that i made",
  projects: [
    {
      image: require("./assets/images/Party.png"),
      projectName: "PartyVerse",
      projectDesc:
        "A modern party and entertainment directory platform built with Next.js that allows users to explore mascots, superheroes, princess characters, party rentals, and entertainment services through a responsive and interactive interface.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://partyverseproject.netlify.app/"
        },
        {
          name: "GitHub",
          url: "https://github.com/arjit03/PartyVerse"
        }
      ]
    },
    {
      image: require("./assets/images/Vfilms.png"),
      projectName: "Varnan Films",
      projectDesc:
        "A modern and cinematic film production website designed for showcasing movies, media projects, and creative content with smooth animations, responsive layouts, and an engaging visual experience.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://varnanfilms.com/"
        },
        {
          name: "GitHub",
          url: "https://github.com/arjit03/VarnanFilms"
        }
        // You can add extra buttons here
      ]
    },
    {
      image: require("./assets/images/ChatRex.png"),
      projectName: "ChatRex",
      projectDesc:
        "An interactive and intelligent chatbot application built with React that provides conversational replies, tech-related answers, fun utilities, jokes, motivation, and a smooth real-time chatting experience.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://chatrex.netlify.app/"
        },
        {
          name: "GitHub",
          url: "https://github.com/arjit03/ChatRex"
        }
      ]
    },
    {
      image: require("./assets/images/plant.png"),
      projectName: "FloraVision",
      projectDesc:
        "A modern plant products showcase website built with React and Vite that allows users to explore and view different plant and gardening products through a clean and responsive interface.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://floravision.netlify.app/"
        },
        {
          name: "GitHub",
          url: "https://github.com/arjit03/FloraVision"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements & Certifications 🏆"),
  subtitle:
    "Internships, certifications, and professional experiences that showcase my development journey.",

  achievementsCards: [
    {
      title: "Frontend Development Internship",
      subtitle:
        "Successfully completed a Frontend Development internship at Softkwit Solutions, working on modern frontend development and UI implementation using ReactJS and NextJS.",
      image: require("./assets/images/softkwit.png"),
      imageAlt: "Softkwit Solutions Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1qo80dKOmy2Xpw0av_DUEtn-H1jQr5Fkz/view?usp=sharing"
        }
      ]
    },

    {
      title: "Web Development Internship",
      subtitle:
        "Successfully completed a Web Development internship at Techonical Infotech Pvt Ltd, working on frontend and backend development using PHP and web technologies.",
      image: require("./assets/images/techonical.jfif"),
      imageAlt: "Techonical Infotech Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1CojHsCgoKfrYMRDXEq-jvefv3CwGzyKE/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  // title: "Blogs",
  // subtitle:
  //   "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  // displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  // blogs: [
  //   {
  //     url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
  //     title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
  //     description:
  //       "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
  //   },
  //   {
  //     url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
  //     title: "Why REACT is The Best?",
  //     description:
  //       "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
  //   }
  // ],
  // display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  // title: "TALKS",
  // subtitle: emoji(
  //   "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  // ),

  // talks: [
  //   {
  //     title: "Build Actions For Google Assistant",
  //     subtitle: "Codelab at GDG DevFest Karachi 2019",
  //     slides_url: "https://bit.ly/saadpasta-slides",
  //     event_url: "https://www.facebook.com/events/2339906106275053/"
  //   }
  // ],
  // display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  // title: emoji("Podcast 🎙️"),
  // subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // // Please Provide with Your Podcast embeded Link
  // podcast: [
  //   "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  // ],
  // display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 8439241058",
  email_address: "arjit.sasan@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
