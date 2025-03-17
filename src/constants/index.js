import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";


export const HERO_CONTENT_EN = `I am a dedicated EDI consultant and full-stack developer with a strong foundation in building seamless and efficient integrations. With over a year of hands-on experience, I specialize in designing and implementing EDI integration solutions that enable businesses to exchange data effortlessly across platforms. My expertise includes translating complex EDI file formats, such as EDIFACT and SAP, and crafting custom EDI solutions tailored to meet unique business needs. In addition to my EDI skills, I bring proficiency in front-end technologies like JavaScript and React, back-end development with Python and C, and database management using MySQL and SQLite. I am passionate about delivering innovative and reliable solutions that optimize processes and enhance user experiences.`;

export const ABOUT_TEXT_EN = `As a technology enthusiast and problem-solver, I thrive on creating solutions that drive efficiency and deliver real-world impact. My journey in tech began with a curiosity for how systems communicate, which has grown into a career focused on EDI integration and full-stack development. I enjoy the challenge of translating complex file formats like EDIFACT and SAP, developing custom EDI solutions, and building user-friendly applications with technologies like React, Python, and MySQL. Whether collaborating with teams or working independently, I bring creativity, adaptability, and a commitment to excellence to every project. Outside of work, I’m passionate about exploring new technologies, refining my skills, and contributing to projects that inspire innovation.`;

export const HERO_CONTENT_FR = `Je suis une consultante EDI et développeuse full-stack dédiée, avec une solide expérience dans la création d'intégrations fluides et efficaces. Avec plus d'un an d'expérience pratique, je me spécialise dans la conception et la mise en œuvre de solutions d'intégration EDI qui permettent aux entreprises d'échanger des données facilement entre différentes plateformes. Mon expertise comprend la traduction de formats de fichiers EDI complexes, tels qu'EDIFACT et SAP, et la création de solutions EDI sur mesure adaptées aux besoins spécifiques des entreprises. En plus de mes compétences en EDI, je maîtrise des technologies front-end comme JavaScript et React, le développement back-end avec Python et C, ainsi que la gestion de bases de données avec MySQL et SQLite. Je suis passionnée par la fourniture de solutions innovantes et fiables qui optimisent les processus et améliorent l'expérience utilisateur.`;

export const ABOUT_TEXT_FR = `En tant qu'enthousiaste de la technologie et résolveuse de problèmes, j'aime créer des solutions qui augmentent l'efficacité et apportent un impact réel. Mon parcours dans la technologie a commencé par une curiosité pour la façon dont les systèmes communiquent, et cela s'est transformé en une carrière axée sur l'intégration EDI et le développement full-stack. J'apprécie le défi de traduire des formats de fichiers complexes comme EDIFACT et SAP, de développer des solutions EDI personnalisées, et de créer des applications conviviales avec des technologies comme React, Python et MySQL. Que ce soit en collaboration avec des équipes ou en travaillant de manière autonome, j'apporte créativité, adaptabilité et engagement à l'excellence à chaque projet. En dehors du travail, je suis passionnée par l'exploration de nouvelles technologies, l'amélioration de mes compétences et la contribution à des projets qui inspirent l'innovation.`;


export const CONTACT = {
    address: {
        en: "Marrakech, Morocco",
        fr: "Marrakech, Maroc",
    },
    phoneN: "+212606897825",
    email: "khaoula.raja1@gmail.com",
};


export const EXPERIENCES = [
    {
        year: {
            en: "November 2023 - Present",
            fr: "Novembre 2023 - Présent",
        },
        role: {
            en: "EDI Consultant | Full Stack Developer",
            fr: "Consultante EDI | Développeuse Full Stack",
        },
        company: "MARYN SOFT Inc.",
        description: {
            en: `Designed and implemented seamless data integration solutions, enabling efficient communication between systems and partners. Created custom workflows to meet unique business requirements and streamline data exchange processes. Collaborated with stakeholders to define integration needs, resolve technical issues, and ensure compliance with industry standards. Actively contributed to optimizing workflows and improving operational efficiency through innovative solutions.`,
            fr: `Conçu et mis en œuvre des solutions d'intégration de données fluides, permettant une communication efficace entre systèmes et partenaires. Créé des flux de travail personnalisés pour répondre aux exigences spécifiques des entreprises et rationaliser les processus d'échange de données. Collaboré avec les parties prenantes pour définir les besoins d'intégration, résoudre les problèmes techniques et assurer la conformité aux normes de l'industrie. Contribué activement à l'optimisation des flux de travail et à l'amélioration de l'efficacité opérationnelle grâce à des solutions innovantes.`,
        },
        technologies: ["EDIFACT", "React.js", "CAMEL KARAVAN"],
    },
];

export const PROJECTS = [
    {
        title: {
            en: "Task Management Web App",
            fr: "Application web de Gestion des Tâches",
        },
        image: project1,
        description: {
            en: "An application for managing tasks and projects, with features such as list creation, task creation, assignment, and progress tracking.",
            fr: "Une application pour gérer les tâches et les projets, avec des fonctionnalités telles que la création de listes, de tâches, l'attribution et le suivi des progrès.",
        },
        technologies: ["HTML", "Tailwind CSS", "Python", "Flask", "SQLite", "Bootstrap", "Docker"],
    },

    {
        title: {
            en: "Portfolio Website",
            fr: "Site Web de Portfolio",
        },
        image: project2,
        description: {
            en: "A personal portfolio website showcasing projects, skills, and contact information.",
            fr: "Un site web personnel présentant des projets, des compétences et des informations de contact.",
        },
        technologies: ["HTML", "CSS", "React", "Bootstrap"],
    },

    {
        title: {
            en: "Movie Recommendation Web App",
            fr: "Application Web de Recommandation de Films",
        },
        image: project3,
        description: {
            en: "A movie recommendation web app designed to help users discover trending and recommended movies. Users can browse movies, view detailed information, and save their favorite movies for easy access.",
            fr: "Une application web de recommandation de films conçue pour aider les utilisateurs à découvrir les films tendances et recommandés. Les utilisateurs peuvent parcourir les films, consulter des informations détaillées et enregistrer leurs films préférés pour un accès facile.",
        },
        technologies: ["Next.js", "TypeScript", "Styled Components", "Bootstrap", "Firebase Authentication", "Axios", "RESTful API"],
    },
];
