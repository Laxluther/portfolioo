import {
  SiPython,
  SiDocker,
  SiFlask,
  SiLinux,
  SiJavascript,
  SiCss3,
  SiHtml5,
  SiPytorch,
  SiJupyter,
  SiTensorflow,
  SiGoogle,
} from "react-icons/si"
import { GrMysql } from "react-icons/gr"
import { FaGitAlt, FaRobot, FaLink } from "react-icons/fa"
import { DiMsqlServer } from "react-icons/di"
import { VscAzure } from "react-icons/vsc"

export const skillsConfig = {
  mainSkills: [
    {
      id: "skills-0",
      className: "skill-icon",
      icon: <SiPython size={50} />,
      text: "Python",
    },
    {
      id: "skills-1",
      className: "skill-icon",
      icon: <FaRobot size={50} />,
      text: "Agentic AI",
    },
    {
      id: "skills-2",
      className: "skill-icon",
      icon: <DiMsqlServer size={50} />,
      text: "MSSQL",
    },
    {
      id: "skills-3",
      className: "skill-icon",
      icon: <GrMysql size={50} />,
      text: "MySQL",
    },
    {
      id: "skills-4",
      className: "skill-icon",
      icon: <SiDocker size={50} />,
      text: "Docker",
    },
    {
      id: "skills-5",
      className: "skill-icon",
      icon: <VscAzure size={50} />,
      text: "Azure",
    },
    {
      id: "skills-6",
      className: "skill-icon",
      icon: <FaGitAlt size={50} />,
      text: "Git",
    },
  ],
  complementarySkills: [
    {
      id: "skills-7",
      className: "skill-icon",
      icon: <SiLinux size={50} />,
      text: "Linux",
    },
    {
      id: "skills-8",
      className: "skill-icon",
      icon: <FaLink size={50} />,
      text: "Langchain",
    },
    {
      id: "skills-9",
      className: "skill-icon",
      icon: <FaRobot size={50} />,
      text: "CrewAI",
    },
    {
      id: "skills-10",
      className: "skill-icon",
      icon: <SiGoogle size={50} />,
      text: "Google ADK",
    },
    {
      id: "skills-11",
      className: "skill-icon",
      icon: <SiPytorch size={50} />,
      text: "Pytorch",
    },
    {
      id: "skills-12",
      className: "skill-icon",
      icon: <SiTensorflow size={50} />,
      text: "Tensorflow",
    },
    {
      id: "skills-13",
      className: "skill-icon",
      icon: <SiJupyter size={50} />,
      text: "Jupyter",
    },
    {
      id: "skills-14",
      className: "skill-icon",
      icon: <FaRobot size={50} />,
      text: "Ollama",
    },
    {
      id: "skills-15",
      className: "skill-icon",
      icon: <SiHtml5 size={50} />,
      text: "HTML 5",
    },
    {
      id: "skills-16",
      className: "skill-icon",
      icon: <SiCss3 size={50} />,
      text: "CSS 3",
    },
    {
      id: "skills-17",
      className: "skill-icon",
      icon: <SiJavascript size={50} />,
      text: "JavaScript",
    },
    {
      id: "skills-18",
      className: "skill-icon",
      icon: <SiFlask size={50} />,
      text: "Flask",
    },
  ],
}
