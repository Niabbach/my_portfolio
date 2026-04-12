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
      
      education: "🎓 Formations",
      educationContent: `
- **Master Informatique parcours Intelligence Artificielle**  
  Université de Caen Normandie *(2026)*  

- **Licence Informatique**  
  CNAM Paris *(2023)*  

- **Licence Sciences de l’Ingénieur**  
  Université de Lorraine, Nancy *(2020)*  
      `,
      
      experience: "💼 Expériences",
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
          title: "Classification d'Images avec CNN",
          description: "Modèle de deep learning pour la classification d'images utilisant des réseaux de neurones convolutifs. Entraîné sur un dataset de 10,000 images avec une accuracy de 94%.",
          github: "https://github.com/Niabbach/image-classification-cnn",
          technologies: ["Python", "TensorFlow", "CNN", "Computer Vision"],
        },
        {
          title: "Prédiction de Séries Temporelles",
          description: "Modèle LSTM pour la prédiction de séries temporelles. Application sur des données de marché financier avec validation croisée.",
          github: "https://github.com/Niabbach/time-series-lstm",
          technologies: ["Python", "PyTorch", "LSTM", "Time Series"],
        },
        {
          title: "Clustering et Analyse de Données",
          description: "Pipeline complet de clustering avec K-means et DBSCAN. Visualisation interactive des résultats avec Plotly.",
          github: "https://github.com/Niabbach/clustering-analysis",
          technologies: ["Python", "Scikit-learn", "Pandas", "Plotly"],
        },
      ],
      
      dev: [
        {
          title: "Dashboard Web Interactif",
          description: "Application web pour la visualisation de données en temps réel. Développée avec React et Recharts.",
          github: "https://github.com/Niabbach/dashboard-web",
          technologies: ["React", "TypeScript", "Recharts", "TailwindCSS"],
        },
        {
          title: "API REST Python",
          description: "API REST complète pour la gestion de données. Utilisant FastAPI avec documentation Swagger.",
          github: "https://github.com/Niabbach/fastapi-rest",
          technologies: ["Python", "FastAPI", "PostgreSQL", "Docker"],
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
          title: "Image Classification with CNN",
          description: "Deep learning model for image classification using convolutional neural networks. Trained on 10,000 images with 94% accuracy.",
          github: "https://github.com/Niabbach/image-classification-cnn",
          technologies: ["Python", "TensorFlow", "CNN", "Computer Vision"],
        },
        {
          title: "Time Series Prediction",
          description: "LSTM model for time series prediction. Application on financial market data with cross-validation.",
          github: "https://github.com/Niabbach/time-series-lstm",
          technologies: ["Python", "PyTorch", "LSTM", "Time Series"],
        },
        {
          title: "Clustering and Data Analysis",
          description: "Complete clustering pipeline with K-means and DBSCAN. Interactive visualization of results with Plotly.",
          github: "https://github.com/Niabbach/clustering-analysis",
          technologies: ["Python", "Scikit-learn", "Pandas", "Plotly"],
        },
      ],
      
      dev: [
        {
          title: "Interactive Web Dashboard",
          description: "Web application for real-time data visualization. Developed with React and Recharts.",
          github: "https://github.com/Niabbach/dashboard-web",
          technologies: ["React", "TypeScript", "Recharts", "TailwindCSS"],
        },
        {
          title: "Python REST API",
          description: "Complete REST API for data management. Using FastAPI with Swagger documentation.",
          github: "https://github.com/Niabbach/fastapi-rest",
          technologies: ["Python", "FastAPI", "PostgreSQL", "Docker"],
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
