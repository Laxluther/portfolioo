import { BiGitRepoForked } from "react-icons/bi"
import { AiFillGithub } from "react-icons/ai"

export const projectConfig = [
  {
    id: "project-5",
    title: "Medical Assistant",
    links: [
      {
        name: "repo",
        url: "https://github.com/Laxluther/med_assist",
        icon: <AiFillGithub />,
      },
      {
        name: "fork",
        url: "https://github.com/Laxluther/med_assist/fork",
        icon: <BiGitRepoForked />,
      },
    ],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/med.png-bjMv6gSivZZqrD2axECTQc0Y8TzvTd.jpeg",
    description:
      "Retrieval-Augmented Generation (RAG) system using local Llama models (Ollama) for analyzing interactions between medications, patient conditions, and other factors, enhancing patient safety and clinical decision-making.",
    target: "_blank",
  },
  {
    id: "project-4",
    title: "Fuzzy Based Sensory Evaluation",
    links: [
      {
        name: "repo",
        url: "https://github.com/Laxluther/Fuzzy-Sensory",
        icon: <AiFillGithub />,
      },
      {
        name: "fork",
        url: "https://github.com/Laxluther/Fuzzy-Sensory.git/fork",
        icon: <BiGitRepoForked />,
      },
    ],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fuzz.png-fsBS8UruIjo83veI181sNQbOjjOrhk.jpeg",
    description:
      "This project implements a fuzzy logic-based sensory evaluation system that aggregates scores from multiple judges to determine an overall rating. By processing linguistic inputs and applying fuzzy inference, it provides a nuanced and accurate assessment of sensory attributes such as taste, aroma, texture, and appearance. The system enhances decision-making in product quality evaluation, particularly in food and beverage industries.",
    target: "_blank",
  },
  {
    id: "project-3",
    title: "House of Mushroom",
    links: [
      {
        name: "repo",
        url: "https://github.com/Laxluther/Mushroom-prediction",
        icon: <AiFillGithub />,
      },
      {
        name: "fork",
        url: "https://github.com/Laxluther/Mushroom-prediction/fork",
        icon: <BiGitRepoForked />,
      },
    ],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mush.png-vRpDHVmeBawtflj7yiH9pKkH8aKYCs.jpeg",
    description:
      "Developed a Convolutional Neural Network (CNN) leveraging three advanced pre-trained models—InceptionV3, DenseNet121, and Xception. The models demonstrated strong performance, achieving accuracies of 82%, 80%, and 80%, respectively. I built a user-friendly web application using Flask to facilitate real-time mushroom species classification. Users can upload mushroom images, and the application utilizes the trained models to predict the species. To enrich the user experience, detailed descriptions of each predicted mushroom species are generated using GPT-2, providing comprehensive insights and enhancing the overall utility of the application.",
    target: "_blank",
  },
  {
    id: "project-2",
    title: "Quality Control Software",
    links: [
      {
        name: "repo",
        url: "https://github.com/Laxluther/qc_lab",
        icon: <AiFillGithub />,
      },
      {
        name: "fork",
        url: "https://github.com/Laxluther/qc_lab/fork",
        icon: <BiGitRepoForked />,
      },
    ],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Qc_lab.png-viCUFp0KLy1K7hY8wZB0Zv7nvNX44o.jpeg",
    description:
      "End-to-end quality control dashboard and data entry software for edible oil production, integrating web development, SQL, and data analytics for automated data collection and real-time processing.",
    target: "_blank",
  },
  {
    id: "project-1",
    title: "Nutri-Score Predictor",
    links: [
      {
        name: "repo",
        url: "https://github.com/Laxluther/NutriScore",
        icon: <AiFillGithub />,
      },
      {
        name: "fork",
        url: "https://github.com/Laxluther/NutriScore/fork",
        icon: <BiGitRepoForked />,
      },
    ],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nutriscore.png-mLvyaO54HxDUt2UN2R3ZWr2Z6LR0Wj.jpeg",
    description:
      "Created a web application utilizing OpenFood Facts data to accurately predict the nutrient score of food products. The project involved comprehensive data analysis, feature engineering, and rigorous model evaluation through K-Fold cross-validation. A Random Forest model was selected for its exceptional accuracy. The application is built with Flask, offering a seamless and interactive user experience.",
    target: "_blank",
  },
]
