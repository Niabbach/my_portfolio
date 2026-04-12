export const portfolioData = {
  fr: {
    name: "Channel NIANGA",
    title: "Data Scientist & AI Engineer",
    description: "🎓 Étudiant en Master 2 Informatique parcours Intelligence Artificielle | En recherche d'un stage de fin d'étude | Disponible à partir de Mars 2026",
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
      subtitle: "Expert en Intelligence Artificielle, Machine Learning et Deep Learning",
      intro: "Je m'appelle **Channel NIANGA**, étudiant passionné en **Master Informatique**, parcours **Intelligence Artificielle**, actuellement en recherche de stage de fin d'étude. Mon objectif ? **Contribuer à des projets innovants en IA**, que ce soit en *machine learning*, *deep learning*, *traitement du langage naturel (NLP)* ou *computer vision*.",
      
      whoAmI: {
        title: "🔍 Qui suis-je ?",
        content: "Étudiant en IA avec une solide base en algorithmique, statistiques et modélisation. Développeur Python expérimenté avec TensorFlow, PyTorch et Scikit-learn. Curieux et rigoureux, j'aime explorer de nouvelles méthodes pour résoudre des problèmes complexes.",
      },
      
      whatYouWillFind: {
        title: "🛠 Ce que vous trouverez ici",
        content: "Mes projets académiques et personnels en IA (classification, prédiction, génération de données, etc.). Mes compétences techniques (Python, SQL, optimisation de modèles...). Mon parcours, mes expériences, et mes ambitions pour un **stage en Master 2**.",
      },
      
      contact: {
        title: "📫 Envie d'échanger ?",
        content: "Contactez-moi sur LinkedIn ou envoyez-moi un mail. Ou encore, rendez-vous dans la section Contact pour m'envoyer un message.",
      },
      
      quote: "L'IA est un outil puissant pour façonner demain — j'ai hâte d'y contribuer.",
    },

    cv: {
      title: "📄 Mon CV",
      download: "📥 Télécharger le CV",
      
      education: "🎓 Formation",
      educationContent: `
**Master 2 Informatique - Intelligence Artificielle**
Université de Caen Normandie | 2024-2026
Spécialisations : Machine Learning, Deep Learning, Computer Vision, NLP

**Licence Informatique**
Université de Caen Normandie | 2021-2024
Mention Bien
      `,
      
      experience: "💼 Expérience",
      experienceContent: `
**Stage en Data Science** (2025)
Entreprise | Durée : 3 mois
- Développement de modèles de machine learning
- Analyse et visualisation de données
- Optimisation de pipelines de données

**Projet Académique - Computer Vision** (2024)
- Classification d'images avec CNN
- Utilisation de TensorFlow et PyTorch
- Résultats : 94% d'accuracy
      `,
      
      skills: "💻 Compétences Techniques",
      skillsContent: `
**Langages** : Python, SQL, JavaScript, TypeScript

**ML/DL** : TensorFlow, PyTorch, Scikit-learn, Keras, Pandas, NumPy

**Outils** : Jupyter, Git, Docker, Google Colab, Streamlit

**Domaines** : Machine Learning, Deep Learning, Computer Vision, NLP, Data Analysis
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
    title: "Data Scientist & AI Engineer",
    description: "🎓 Master's student in Computer Science specializing in Artificial Intelligence | Seeking final year internship | Available from March 2026",
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
      subtitle: "Expert in Artificial Intelligence, Machine Learning and Deep Learning",
      intro: "My name is **Channel NIANGA**, a passionate **Master's student in Computer Science**, specializing in **Artificial Intelligence**. Currently seeking a final year internship. My goal? **Contribute to innovative AI projects**, whether in *machine learning*, *deep learning*, *natural language processing (NLP)* or *computer vision*.",
      
      whoAmI: {
        title: "🔍 Who am I?",
        content: "An AI student with a solid foundation in algorithms, statistics and modeling. Experienced Python developer with TensorFlow, PyTorch and Scikit-learn. Curious and rigorous, I love exploring new methods to solve complex problems.",
      },
      
      whatYouWillFind: {
        title: "🛠 What you will find here",
        content: "My academic and personal AI projects (classification, prediction, data generation, etc.). My technical skills (Python, SQL, model optimization...). My background, experiences, and ambitions for a **Master's 2 internship**.",
      },
      
      contact: {
        title: "📫 Want to chat?",
        content: "Contact me on LinkedIn or send me an email. Or go to the Contact section to send me a message.",
      },
      
      quote: "AI is a powerful tool to shape tomorrow — I can't wait to contribute to it.",
    },

    cv: {
      title: "📄 My Resume",
      download: "📥 Download Resume",
      
      education: "🎓 Education",
      educationContent: `
**Master's 2 in Computer Science - Artificial Intelligence**
University of Caen Normandy | 2024-2026
Specializations: Machine Learning, Deep Learning, Computer Vision, NLP

**Bachelor's in Computer Science**
University of Caen Normandy | 2021-2024
Honors
      `,
      
      experience: "💼 Experience",
      experienceContent: `
**Data Science Internship** (2025)
Company | Duration: 3 months
- Development of machine learning models
- Data analysis and visualization
- Data pipeline optimization

**Academic Project - Computer Vision** (2024)
- Image classification with CNN
- TensorFlow and PyTorch usage
- Results: 94% accuracy
      `,
      
      skills: "💻 Technical Skills",
      skillsContent: `
**Languages**: Python, SQL, JavaScript, TypeScript

**ML/DL**: TensorFlow, PyTorch, Scikit-learn, Keras, Pandas, NumPy

**Tools**: Jupyter, Git, Docker, Google Colab, Streamlit

**Domains**: Machine Learning, Deep Learning, Computer Vision, NLP, Data Analysis
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
