import spaceTourism from "../assets/space-tourism.png";
import spaceTourismMobile from "../assets/space-tourism-mobile.png";
import restCountries from "../assets/rest-countries.png";
import restCountriesMobile from "../assets/rest-countries-mobile.png";
import summize from "../assets/summize.png";
import summizeMobile from "../assets/summize-mobile.png";
import brainwave from "../assets/brainwave.png";
import brainwaveMobile from "../assets/brainwave-mobile.png";
import tic from "../assets/tic-tac-toe.png";
import ticMobile from "../assets/tic-tac-toe-mobile.png";
import nike from "../assets/nike.png";
import nikeMobile from "../assets/nike-mobile.png";
import todo from "../assets/todo-app.png";
import todoMobile from "../assets/todo-app-mobile.png";

import qrSpace from "../assets/qr-images/qr-space-tourism.png"
import qrRest from "../assets/qr-images/qr-rest-countries.png"
import qrSummize from "../assets/qr-images/qr-summize.png"
import qrBrainwave from "../assets/qr-images/qr-brainwave.png"
import qrNike from "../assets/qr-images/qr-nike.png"
import qrTic from "../assets/qr-images/qr-tic.png"
import qrTodo from "../assets/qr-images/qr-todo.png"

export const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "ReactJS",
  "NodeJS",
  "ExpressJS",
  "Python",
  "PostgreSQL",
  "PHP",
  "MongoDB",
  "Tailwind",
  "Bootstrap",
  "Git",
  "Github",
];

export const projectList = [
  {
    id: "1",
    title: "personal project / multiple page",
    name: "Space Tourism",
    img: spaceTourism,
    mobileImg: spaceTourismMobile,
    qr: qrSpace,
    skills: ["HTML", "CSS", "JavaScript", "ReactJS", "Tailwind"],
    link: "https://caloyv.github.io/space-tourism-v2/",
  },
  {
    id: "2",
    title: "personal project / multiple page",
    name: "REST Countries",
    img: restCountries,
    mobileImg: restCountriesMobile,
    qr: qrRest,
    skills: ["HTML", "CSS", "JavaScript", "ReactJS", "Tailwind"],
    link: "https://caloyv.github.io/rest-countries-api-with-color-theme-switcher/",
  },
  {
    id: "3",
    title: "personal project",
    name: "Sumz",
    img: summize,
    mobileImg: summizeMobile,
    qr: qrSummize,
    skills: ["HTML", "CSS", "JavaScript", "ReactJS", "Tailwind"],
    link: "https://magenta-babka-542ac2.netlify.app/",
  },
  {
    id: "4",
    title: "personal project / landing page",
    name: "Brainwave",
    img: brainwave,
    mobileImg: brainwaveMobile,
    qr: qrBrainwave,
    skills: ["HTML", "CSS", "JavaScript", "ReactJS", "Tailwind"],
    link: "https://caloyv.github.io/brainwave/",
  },
  {
    id: "5",
    title: "personal project / landing page",
    name: "Nike App",
    img: nike,
    mobileImg: nikeMobile,
    qr: qrNike,
    skills: ["HTML", "CSS", "JavaScript", "ReactJS", "Tailwind"],
    link: "https://caloyv.github.io/nike-app/",
  },
  {
    id: "6",
    title: "personal project",
    name: "Tic-Tac-Toe",
    img: tic,
    mobileImg: ticMobile,
    qr: qrTic,
    skills: ["HTML", "CSS", "JavaScript"],
    link: "https://caloyv.github.io/Tic-Tac-Toe/",
  },
  {
    id: "7",
    title: "personal project",
    name: "Todo App",
    img: todo,
    mobileImg: todoMobile,
    qr: qrTodo,
    skills: ["HTML", "CSS", "JavaScript"],
    link: "https://caloyv.github.io/Todo-App/",
  },
];
