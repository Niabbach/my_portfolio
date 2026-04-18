export const portfolioData = {
  fr: {
    name: "Channel NIANGA",
    title: "Data Scientist & AI Engineer",
    description: "🎓 Titulaire d'un Master 2 Informatique, parcours Intelligence Artificielle | À la recherche d’un CDI à partir de Septembre 2026",
    email: "channeliba@yahoo.com",
    location: "Caen, France",
    github: "https://github.com/Niabbach",
    linkedin: "https://www.linkedin.com/in/channel-nianga-44095615b",
    
    nav: {
      home: "🏠 Accueil",
      cv: "📄 CV",
      projects: "🚀 Projets",
      contact: "📬 Contact",
    },

    home: {
      title: "🌱 Bienvenue sur mon portfolio !",
      subtitle: "Ingénieur IA spécialisé en Machine Learning et Deep Learning",
      intro: "Je m'appelle Channel NIANGA, ingénieur en Intelligence Artificielle avec une solide base en informatique et en ingénierie logicielle. J’ai acquis une expérience dans la conception et le développement de systèmes robustes orientés données. Mes domaines d’intérêt incluent le machine learning, le deep learning, le traitement du langage naturel (NLP) et la vision par ordinateur. Je suis actuellement ouvert à des opportunités en CDI à partir de Septembre 2026.",
      
      whoAmI: {
        title: "🔍 Qui suis-je ?",
        content: "Ingénieur en Intelligence Artificielle avec une solide base en algorithmique, statistiques et modélisation. Développeur Python expérimenté, maîtrisant des frameworks tels que TensorFlow, PyTorch et Scikit-learn. Curieux et rigoureux, j’explore et conçois des solutions pour résoudre des problèmes complexes."
      },
      
      whatYouWillFind: {
        title: "🛠 Ce que vous trouverez ici",
        content: "Mes projets académiques et personnels en intelligence artificielle (classification, prédiction, génération de données, etc.), ainsi que mes compétences techniques (Python, SQL, optimisation de modèles...). Vous y trouverez également mon parcours, mes expériences et mes ambitions professionnelles en tant qu’ingénieur en IA."
      },
      
      contact: {
        title: "Envie d'échanger ?",
        content: "Contactez-moi sur LinkedIn ou envoyez-moi un mail. Ou encore, rendez-vous dans la section Contact pour m'envoyer un message.",
      },
      
      quote: "L'IA est un outil puissant pour façonner demain, j'ai hâte d'y contribuer.",
    },

    cv: {
      title: "📄 Mon CV",
      download: "📥 Télécharger le CV",
      
      education: "Formations",
      educationContent: `
- **Master Informatique parcours Intelligence Artificielle**  
  Université de Caen Normandie *(2026)*  

- **Licence Informatique**  
  CNAM Paris *(2023)*  

- **Licence Sciences de l’Ingénieur**  
  Université de Lorraine, Nancy *(2020)*  
      `,
      
      experience: "Expériences",
      experienceContent: `
- **Liebherr Aerospace Toulouse** – Ingénieur Développement Full Stack *(mars 2026 – sept. 2026)*  
  - Conception et développement d'outils de visualisation de données pour l’analyse de simulations systèmes aéronautiques.  
  - Développement d’interfaces interactives (front-end) pour représenter des données complexes de manière claire et exploitable.  
  - Mise en place d’un backend Python pour le traitement, l’organisation et l’exposition des données via API.  
  - Collaboration avec des équipes d’ingénierie système pour définir les besoins fonctionnels et améliorer l’exploitation des modèles.  
  - Tests, validation des résultats et rédaction de la documentation technique.  
  **Tech Stack** : Angular(TypeScript,HTML/CSS), Python, Pytest, Pandas, FastAPI, Plotly, Selenuim, Git.  

- **SNCF Réseau** – Développeur Full Stack *(sept. 2020 – nov. 2023)*  
  - Développement d’applications web et d’API destinées aux employés ferroviaires.  
  - Analyse de données et automatisation de rapports.  
  - Communication des résultats analytiques aux parties prenantes.  
  - Mise en place de contrôles automatisés pour l’optimisation des processus.  
  **Tech Stack** : Angular (HTML, CSS, TypeScript), Git, Python, Pandas, FastAPI, SQL. 

  - **Institut Jean Lamour (IJL)** – Stagiaire en recherche *(janv. 2019 – avr. 2019)*  
  - Stage en génie biomédical sur les capteurs biomédicaux.  
  - Étude et expérimentation de systèmes électroniques pour l’analyse biomédicale.  
  - Contribution à la documentation scientifique du laboratoire.  
  **Compétences** : Génie biomédical, électronique.

  - **Real Time Sportscast** – Commentateur sportif *(août 2019 – oct. 2021)*  
  - Mission freelance réalisée entièrement en anglais.  
  - Présence sur le terrain pour fournir des commentaires en temps réel.  
  - Réalisation d’interviews avec partenaires et supporters.  
  - Rédaction d’articles et de résumés pour le site sur l’événement.  
  **Compétences** : Organisation, communication, anglais. 
      `,
      
      skills: "Compétences Techniques",
      skillsContent: `
**Langages** : Python, SQL, JavaScript, TypeScript, Java, C/C++  

**Machine Learning & Deep Learning** : Scikit-learn, TensorFlow, PyTorch, Keras  

**Data & Analyse** : Pandas, NumPy, Matplotlib, Seaborn  

**Data Visualization** : Plotly, Dash, Chart.js, D3js 

**Backend & APIs** : FastAPI, Flask

**Frontend** : Angular, React  

**Outils & Environnements** : Git, Docker, Jupyter Notebook, Google Colab, VS Code  

**Bases de données** : PostgreSQL, MySQL, MongoDB  

**Méthodologies** : Data preprocessing, Feature engineering, Model evaluation, Optimization  

**Domaines** : Machine Learning, Deep Learning, Computer Vision, NLP, Data Analysis, Data Visualization, Software Engineering  

      `,
    },

    projects: {
      title: "🚀 Mes Projets",
      tabs: ["🤖 Projets IA", "💻 Développement", "🎓 Académique"],
      backToTop: "↑ Retour en haut",
      
      ia: [
        {
          title: "Analyse du taux de désabonnement (churn)",
          description: "Analyse du taux de désabonnement (churn) des clients télécom via EDA et modélisation (Régression logistique, SVM, AdaBoost, XGBoost). Précision jusqu'à 82%. Dataset : WA_Fn-UseC_-Telco-Customer-Churn.",
          github: "https://github.com/Niabbach/Telecom-churn-prediction",
          technologies: ["Python", "Pandas", "Numpy", "Seaborn", "Matplotlib", "Scikit-learn", "Xgboost" ],
        },
        {
          title: "Prédiction des ventes",
          description: "Ce projet utilise un modèle de réseau neuronal pour prédire les ventes à partir de données historiques. Le notebook Jupyter (sales_prediction.ipynb) guide l'utilisateur tout au long du processus de prétraitement des données, d'apprentissage du modèle et d'évaluation. L'ensemble de données (sales.csv) comprend des informations telles que les détails des commandes, les segments de clientèle et les catégories de produits.",
          github: "https://github.com/Niabbach/Sales-prediction",
          technologies: ["Python", "Jupyter Notebook", "TensorFlow", "NumPy", "Pandas", "Scikit-learn"],
        },
        {
          title: "Modèle de detection de pneumonie",
          description: "Ce projet propose une solution complète pour détecter la pneumonie à partir de radiographies thoraciques à l'aide d'un réseau neuronal convolutif (CNN). Le projet consiste à entraîner un modèle afin de classer les images en deux catégories : celles indiquant une pneumonie et celles considérées comme normales.",
          github: "https://github.com/Niabbach/Pneumonia-detection-model",
          technologies: ["Python", "TensorFlow", "Matplotlib", "PIL"],
        },
        {
          title: "Segmentation d'images",
          description: "Ce projet propose une solution simple et efficace pour la segmentation d'image en utilisant deux algorithmes populaires : GrabCut et Graph Cuts. La segmentation d'image est un processus essentiel dans la vision par ordinateur, permettant d'isoler des objets d'intérêt dans une image.",
          github: "https://github.com/Niabbach/Segmentation-Image",
          technologies: ["Python", "OpencV", "Matplotlib", "Numpy", "NetworkX"],
        },
        {
          title: "Prédiction des résultats de matchs de football et simulation de stratégies de paris",
          description: "Prédiction des résultats de matchs de football et simulation de stratégies de paris grâce à l'analyse des cotes des bookmakers. Comprend un pipeline d'apprentissage automatique (XGBoost, Random Forest, DNN), des stratégies de paris adaptatives basées sur le critère de Kelly, un système de détection de manipulation des matchs fondé sur l'évolution des cotes et l'algorithme Isolation Forest, ainsi qu'une interface graphique interactive permettant aux utilisateurs de sélectionner n'importe quel championnat et d'effectuer une analyse complète.",
          github: "https://github.com/Niabbach/sportsbook_project",
          technologies: ["Python", "Scikit-learn", "Xgboost", "Keras", "Optuna", "Pandas", "Numpy", "Scipy","Seaborn", "Matplotlib", "PyQT6"],
        },
      ],
      
      dev: [
        {
          title: "Mastermind adversarial",
          description: "Ce projet implémente une version avancée du jeu Mastermind dans un cadre adversarial, où deux intelligences artificielles, Alice (le codeur) et Bob (le devineur) s'affrontent avec des stratégies variées.",
          github: "https://github.com/Niabbach/mastermind_adversarial",
          technologies: ["Python"],
        },
        {
          title: "TP Docker",
          description: "Ce projet consiste en une application GraphQL qui interagit avec une base de données MongoDB pour fournir des données sur des prestations de service, avec une interface de visualisation basée sur D3.js.",
          github: "https://github.com/Niabbach/tp-docker",
          technologies: ["HTML/CSS", "Javascript", "Node.js", "Apollo", "MongoDB", "D3.js", "Docker"],
        },
        {
          title: "ShapeGame",
          description: "ShapeGame est un jeu graphique en Java permettant de créer, déplacer, redimensionner et supprimer des formes géométriques (cercles et rectangles) dans une interface utilisateur interactive. Ce projet met en œuvre un modèle MVC simple, la gestion d’états pour les interactions utilisateur, ainsi qu’une gestion d’historique des actions.",
          github: "https://github.com/Niabbach/ShapeGame",
          technologies: ["Java"],
        },
        {
          title: "Role Playing Game",
          description: "Ce projet met en œuvre un jeu d'aventure en C++. Le jeu comprend des personnages tels que le héros du joueur, des PNJ bienveillants (Lambda) et divers monstres (Serpent, Renard, Fee, Centaurus). Le joueur peut explorer différents environnements, livrer des combats et prendre des décisions pour progresser dans le jeu.",
          github: "https://github.com/Niabbach/Role-Playing-Game",
          technologies: ["C++"],
        },
        {
          title: "Jeu de la vie",
          description: "Ce projet en C++ met en œuvre le Jeu de la vie de Conway, un automate cellulaire classique conçu par le mathématicien John Conway. Le Jeu de la vie est un jeu sans joueur dans lequel l'évolution de la grille est déterminée par son état initial, selon des règles spécifiques régissant l'interaction entre les cellules.",
          github: "https://github.com/Niabbach/Game-of-life",
          technologies: ["C++"],
        },
        {
          title: "Gestion d'une course de Ski",
          description: "Ce projet comprend deux versions d'un système de gestion de courses de ski développé en C. L'objectif est de traiter efficacement les données relatives à une course de ski, en classant les skieurs selon qu'ils ont terminé la course ou qu'ils ont abandonné.",
          github: "https://github.com/Niabbach/Ski-race-Management",
          technologies: ["C"],
        },
      ],
      
      academic: [
        {
          title: "Projet Master - Vision par Ordinateur",
          description: "Détection d'objets en temps réel utilisant YOLO. Application sur des vidéos de surveillance.",
          github: "https://github.com/Niabbach/yolo-detection",
          technologies: ["Python", "YOLO", "OpenCV", "Deep Learning"],
        },
        {
          title: "NLP - Analyse de Sentiments",
          description: "Modèle de traitement du langage naturel pour l'analyse de sentiments sur des tweets.",
          github: "https://github.com/Niabbach/sentiment-analysis",
          technologies: ["Python", "NLP", "Transformers", "BERT"],
        },
      ],
    },

    contact: {
      title: "📬 Me Contacter",
      formTitle: "### ✉️ Envoyez-moi un message",
      form: `
<form id="contact-form" style="display: flex; flex-direction: column; gap: 1rem;">
  <input type="text" placeholder="Votre nom" required style="padding: 0.75rem; border: 1px solid #ddd; border-radius: 8px;" />
  <input type="email" placeholder="Votre email" required style="padding: 0.75rem; border: 1px solid #ddd; border-radius: 8px;" />
  <textarea placeholder="Votre message" rows="5" required style="padding: 0.75rem; border: 1px solid #ddd; border-radius: 8px; font-family: inherit;"></textarea>
  <button type="submit" style="padding: 0.75rem; background: linear-gradient(135deg, #4f46e5 0%, #9333ea 100%); color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600;">Envoyer</button>
</form>
      `,
      socialLinks: "Ou connectez-vous avec moi sur :",
    },

    seo: {
      title: "Channel NIANGA - Data Scientist & AI Engineer | Master IA",
      description: "Étudiant en Master 2 IA spécialisé en Machine Learning, Deep Learning et Computer Vision. Portfolio avec projets concrets en Python, TensorFlow, PyTorch.",
      keywords: "data scientist, intelligence artificielle, machine learning, deep learning, python, tensorflow, pytorch, computer vision, nlp, portfolio, stage IA",
    },
  },

  en: {
  name: "Channel NIANGA",
  title: "AI Engineer & Data Scientist",
  description: "AI Engineer and Data professional with experience in fullstack development and building robust software systems. Master’s degree holder in Computer Science, specialized in Artificial Intelligence. Open to full-time opportunities starting September 2026.",
  email: "channeliba@yahoo.com",
  location: "Caen, France",
  github: "https://github.com/Niabbach",
  linkedin: "https://www.linkedin.com/in/channel-nianga-44095615b",
    
    nav: {
      home: "🏠 Home",
      cv: "📄 Resume",
      projects: "🚀 Projects",
      contact: "📬 Contact",
    },

    home: {
      title: "🌱 Welcome to my portfolio!",
      subtitle: "AI Engineer specialized in Machine Learning and Deep Learning",
      intro: "My name is Channel NIANGA, an AI Engineer with a strong background in computer science and software engineering. I have experience in designing and building robust data-driven systems. My areas of interest include machine learning, deep learning, natural language processing (NLP), and computer vision. I am currently open to full-time opportunities starting September 2026.",
      whoAmI: {
        title: "🔍 Who am I?",
        content: "AI Engineer with a strong foundation in algorithms, statistics, and modeling. Experienced Python developer, proficient with frameworks such as TensorFlow, PyTorch, and Scikit-learn. Curious and rigorous, I design and explore solutions to solve complex problems."
      },
      
      whatYouWillFind: {
        title: "🛠 What you will find here",
        content: "My academic and personal projects in artificial intelligence (classification, prediction, data generation, etc.), along with my technical skills (Python, SQL, model optimization...). You will also find my background, experience, and professional ambitions as an AI Engineer."
      },
      
      contact: {
        title: "Want to chat?",
        content: "Contact me on LinkedIn or send me an email. Or go to the Contact section to send me a message.",
      },
      
      quote: "AI is a powerful tool to shape tomorrow, I can't wait to contribute to it.",
    },

    cv: {
      title: "📄 My Resume",
      download: "📥 Download Resume",
      
      education: "Education",
      educationContent: `
- **Master’s Degree in Computer Science specialized in Artificial Intelligence**  
  University of Caen Normandy *(2026)*  

- **Bachelor’s Degree in Computer Science**  
  CNAM Paris *(2023)*  

- **Bachelor’s Degree in Engineering Sciences**  
  University of Lorraine, Nancy *(2020)*
      `,
      
      experience: "Experience",
      experienceContent: `
- **Liebherr Aerospace Toulouse** – Full Stack Engineer *(March 2026 – September 2026)*  
  - Designed and developed data visualization tools for analyzing complex aeronautical system simulations.  
  - Built interactive front-end interfaces to present large-scale simulation data in a clear and usable way.  
  - Developed a Python backend for data processing, structuring, and API exposure.  
  - Collaborated with system engineering teams to define requirements and improve model exploitation.  
  - Performed testing, validation, and technical documentation.  
  **Tech Stack** : Angular(TypeScript,HTML/CSS), Python, Pytest, Pandas, FastAPI, Plotly, Selenuim, Git.  

- **SNCF Réseau** – Full Stack Developer *(Sep 2020 – Nov 2023)*  
  - Developed web applications and APIs for railway employees.  
  - Performed data analysis and automated reporting processes.  
  - Communicated analytical results to stakeholders.  
  - Implemented automated controls to optimize processes.  
  **Tech Stack**: Angular (HTML, CSS, TypeScript), Git, Python, Pandas, FastAPI, SQL.  

- **Institut Jean Lamour (IJL)** – Research Intern *(Jan 2019 – Apr 2019)*  
  - Conducted research in biomedical engineering focused on biomedical sensors.  
  - Studied and experimented with electronic systems for biomedical analysis.  
  - Contributed to scientific documentation within the laboratory.  
  **Skills**: Biomedical engineering, electronics.  

  - **Real Time Sportscast** – Sports Commentator *(Aug 2019 – Oct 2021)*  
  - Freelance role conducted entirely in English.  
  - Provided live commentary during sports events.  
  - Conducted interviews with partners and supporters.  
  - Wrote articles and summaries for the event platform.  
  **Skills**: Organization, communication, English. 
      `,
      
      skills: "Technical Skills",
      skillsContent: `
**Programming Languages**: Python, SQL, JavaScript, TypeScript, Java, C/C++  

**Machine Learning & Deep Learning**: Scikit-learn, TensorFlow, PyTorch, Keras  

**Data & Analysis**: Pandas, NumPy, Matplotlib, Seaborn  

**Data Visualization**: Plotly, Dash, Chart.js, D3js  

**Backend & APIs**: FastAPI, Flask, REST APIs  

**Frontend**: Angular, React 

**Tools & Environments**: Git, Docker, Jupyter Notebook, Google Colab, VS Code  

**Databases**: PostgreSQL, MySQL, MongoDB  

**Methodologies**: Data preprocessing, Feature engineering, Model evaluation, Optimization  

**Domains**: Machine Learning, Deep Learning, Computer Vision, NLP, Data Analysis, Data Visualization, Software Engineering  
      `,
    },

    projects: {
      title: "🚀 My Projects",
      tabs: ["🤖 AI Projects", "💻 Development", "🎓 Academic"],
      backToTop: "↑ Back to top",
      
      ia: [
        {
          title: "Telecom churn prediction",
          description: "Analysis of telecom customer churn rates using EDA and machine learning models (Logistic Regression, SVM, AdaBoost, XGBoost). Accuracy up to 82%. Dataset: WA_Fn-UseC_-Telco-Customer-Churn.",
          github: "https://github.com/Niabbach/Telecom-churn-prediction",
          technologies: ["Python", "Pandas", "Numpy", "Seaborn", "Matplotlib", "Scikit-learn", "Xgboost" ],
        },
        {
          title: "Sales prediction",
          description: "This project leverages a neural network model to predict sales based on historical data. The Jupyter Notebook (sales_prediction.ipynb) guides through the process of data preprocessing, model training, and evaluation. The dataset (sales.csv) includes information such as order details, customer segments, and product categories.",
          github: "https://github.com/Niabbach/Sales-prediction",
          technologies: ["Python", "Jupyter Notebook", "TensorFlow", "NumPy", "Pandas", "Scikit-learn"],
        },
        {
          title: "Pneumonia detection model",
          description: "This project presents a comprehensive solution for detecting pneumonia from chest X-ray images using a Convolutional Neural Network (CNN). The project involves training a model to classify images into two categories: indicative of pneumonia or normal.",
          github: "https://github.com/Niabbach/Pneumonia-detection-model",
          technologies: ["Python", "TensorFlow", "Matplotlib", "PIL"],
        },
        {
          title: "Image segmentation",
          description: "This project offers a simple and effective solution for image segmentation using two popular algorithms: GrabCut and Graph Cuts. Image segmentation is an essential process in computer vision, enabling the isolation of objects of interest within an image.",
          github: "https://github.com/Niabbach/Segmentation-Image",
          technologies: ["Python", "OpencV", "Matplotlib", "Numpy", "NetworkX"],
        },
        {
          title: "Sportsbook Project",
          description: "Prediction of football match outcomes and simulation of betting strategies through bookmaker odds analysis. Includes an ML pipeline (XGBoost, Random Forest, DNN), adaptive betting strategies with Kelly criterion, a match manipulation detection system based on odds movements and Isolation Forest,and an interactive GUI allowing users to select any league and run the full analysis.",
          github: "https://github.com/Niabbach/sportsbook_project",
          technologies: ["Python", "Scikit-learn", "Xgboost", "Keras", "Optuna", "Pandas", "Numpy", "Scipy","Seaborn", "Matplotlib", "PyQT6"],
        },
      ],
      
      dev: [
        {
          title: "Mastermind adversarial",
          description: "This project implements an advanced version of the Mastermind game in a competitive setting, where two artificial intelligences, Alice (the coder) and Bob (the guesser), compete using a variety of strategies.",
          github: "https://github.com/Niabbach/mastermind_adversarial",
          technologies: ["Python"],
        },
        {
          title: "TP Docker",
          description: "This project consists of a GraphQL application that interacts with a MongoDB database to provide data on services, with a visualization interface based on D3.js.",
          github: "https://github.com/Niabbach/tp-docker",
          technologies: ["HTML/CSS", "Javascript", "Node.js", "Apollo", "MongoDB", "D3.js", "Docker"],
        },
        {
          title: "ShapeGame",
          description: "ShapeGame is a Java-based graphical game that allows users to create, move, resize, and delete geometric shapes (circles and rectangles) within an interactive user interface. This project implements a simple MVC pattern, state management for user interactions, and action history tracking.",
          github: "https://github.com/Niabbach/ShapeGame",
          technologies: ["Java"],
        },
        {
          title: "Role Playing Game",
          description: "This project implements a based adventure game in C++. The game includes characters like the player's hero, friendly NPCs (Lambda), and various monsters (Serpent, Renard, Fee, Centaurus). The player can explore different environments, engage in combat, and make decisions to progress through the game.",
          github: "https://github.com/Niabbach/Role-Playing-Game",
          technologies: ["C++"],
        },
        {
          title: "Game of life",
          description: "This C++ project implements Conway's Game of Life, a classic cellular automaton devised by mathematician John Conway. The Game of Life is a zero-player game where the evolution of the grid is determined by its initial state, following specific rules for cell interaction.",
          github: "https://github.com/Niabbach/Game-of-life",
          technologies: ["C++"],
        },
        {
          title: "Ski race management",
          description: "This project consists of two versions of a ski race management system implemented in C. The goal is to efficiently handle data related to a ski race event, categorizing skiers based on whether they completed the race or abandoned.",
          github: "https://github.com/Niabbach/Ski-race-Management",
          technologies: ["C"],
        },
      ],
      
      academic: [
        {
          title: "Master Project - Computer Vision",
          description: "Real-time object detection using YOLO. Application on surveillance videos.",
          github: "https://github.com/Niabbach/yolo-detection",
          technologies: ["Python", "YOLO", "OpenCV", "Deep Learning"],
        },
        {
          title: "NLP - Sentiment Analysis",
          description: "Natural language processing model for sentiment analysis on tweets.",
          github: "https://github.com/Niabbach/sentiment-analysis",
          technologies: ["Python", "NLP", "Transformers", "BERT"],
        },
      ],
    },

    contact: {
      title: "📬 Contact Me",
      formTitle: "### ✉️ Send me a message",
      form: `
<form id="contact-form" style="display: flex; flex-direction: column; gap: 1rem;">
  <input type="text" placeholder="Your name" required style="padding: 0.75rem; border: 1px solid #ddd; border-radius: 8px;" />
  <input type="email" placeholder="Your email" required style="padding: 0.75rem; border: 1px solid #ddd; border-radius: 8px;" />
  <textarea placeholder="Your message" rows="5" required style="padding: 0.75rem; border: 1px solid #ddd; border-radius: 8px; font-family: inherit;"></textarea>
  <button type="submit" style="padding: 0.75rem; background: linear-gradient(135deg, #4f46e5 0%, #9333ea 100%); color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600;">Send</button>
</form>
      `,
      socialLinks: "Or connect with me on:",
    },

    seo: {
      title: "Channel NIANGA - Data Scientist & AI Engineer | Master AI",
      description: "Master's 2 student in AI specializing in Machine Learning, Deep Learning and Computer Vision. Portfolio with concrete projects in Python, TensorFlow, PyTorch.",
      keywords: "data scientist, artificial intelligence, machine learning, deep learning, python, tensorflow, pytorch, computer vision, nlp, portfolio, internship AI",
    },
  },
};

export type Language = "fr" | "en";
