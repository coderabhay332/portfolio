import { ExternalLink, Github } from "lucide-react";

interface Project {
  number: string;
  title: string;
  description: string;
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
}

const projectsData: Project[] = [

  {
    number: "01",
    title: "Socialkit – AI-Powered LinkedIn Content Creation Platform",
    description: "Built an AI-powered LinkedIn content creation and personal branding platform for construction industry professionals. Implemented LinkedIn profile scraping via Apify to learn user writing style, and built a Master Style Extraction engine using Claude AI to create unique writing fingerprints. Developed a full content pipeline (Topics → Hooks → Posts) with vector similarity search via Pinecone for style matching. Features include content calendar, standalone post generator, lead magnet generation, and an admin panel for managing inspiration posts.",
    technologies: ["Next.js", "React 19", "TypeScript", "Node.js", "Express.js", "MongoDB", "Redis", "Claude AI", "Pinecone", "Apify", "Tailwind CSS", "Docker", "AWS EC2"],
    liveLink: "https://socialkit-j2y6.vercel.app/",
  },
  {
    number: "02",
    title: "StickyVerse – Aesthetic New Tab Productivity Dashboard",
    description: "Built a Chrome extension that replaces the new tab page with a visual all-in-one productivity workspace. Features sticky notes with checklists and tags, task tracking, link vault with favicons, goals with progress bars, built-in Pomodoro timer, and productivity insights. Includes 8 beautiful themes, quick templates for daily planning, and optional cloud sync across devices. Published on Chrome Web Store.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Chrome Extension API", "Cloud Sync", "Netlify"],
    liveLink: "https://peaceful-peony-58cb08.netlify.app",
  },
  {
    number: "03",
    title: "Memora – AI-Powered Notes Knowledge Chat App",
    description: "Developed an AI-powered note-taking platform enabling users to save and organize content (text/links) from platforms like Twitter, LinkedIn, YouTube, and Medium. Integrated OpenAI for content embedding and semantic search, storing vector data in Pinecone for contextual content retrieval and RAG-based conversations. Built a scalable backend with Node.js and TypeScript, using RabbitMQ for asynchronous job processing (content extraction, embedding generation). Engineered the system as a 'second brain' for developers, enabling fast recall, chat-based querying, and semantic organization of knowledge.",
    technologies: ["React.js", "TypeScript", "MongoDB", "RabbitMQ", "Pinecone", "OpenAI"],
    liveLink: "https://memora.sbs",
    githubLink: "https://github.com/coderabhay332/memora",
  },
  {
    number: "04",
    title: "CVPerfecto – AI-Powered Resume Optimizer",
    description:
      "Built an AI-driven platform that customizes resumes based on job descriptions to achieve 90%+ ATS scores. Integrated Perplexity AI for keyword extraction and LaTeX resume generation with automated formatting. Developed full-stack app using React.js, TypeScript, Node.js, Express.js, MongoDB, and Tailwind CSS. Containerized backend with Docker and deployed using GitHub Actions for CI/CD automation.",
    technologies: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Perplexity AI",
      "LaTeX",
      "Docker",
      "GitHub Actions",
    ],
    liveLink: "https://cvperfecto.space",
    githubLink: "https://github.com/coderabhay332/expense-tracker"
  },
  {
    number: "05",
    title: "SmartExpense – Full-Stack Expense Tracking Application",
    description:
      "Developed a modern expense tracker using MERN stack (MongoDB, Express.js, React, Node.js) for efficient finance management. Implemented JWT authentication, secure CRUD operations, and file uploads with Multer for receipts. Built interactive dashboards and financial analytics using Recharts, Framer Motion, and Tailwind CSS. Enabled PDF report generation with Puppeteer and EJS, providing visual spending insights.",
    technologies: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "JWT",
      "Multer",
      "Recharts",
      "Framer Motion",
      "Tailwind CSS",
      "Puppeteer",
      "EJS",
    ],
    liveLink: "https://expense-tracker-delta-green.vercel.app/",
    githubLink: "https://github.com/coderabhay332/expense-tracker"
  },
  {
    number: "06",
    title: "FastagSeva – Secure FASTag Payment Processing System",
    description:
      "Developed a scalable payment system integrating Razorpay API for FASTag recharges with real-time webhook updates. Built secure backend using Node.js, Express.js, TypeScript, and MongoDB (Mongoose) for data persistence. Implemented JWT authentication, signature verification, and rate limiting for enhanced transaction security. Designed modular architecture ensuring automatic reconciliation, payment tracking, and error logging.",
    technologies: [
      "Razorpay",
      "Node.js",
      "Express.js",
      "TypeScript",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Rate Limiting",
      "Webhooks",
      "Modular Architecture",
    ],
    githubLink: "https://github.com/coderabhay332/fastag-seva"
  },
  {
    number: "07",
    title: "NGO Donation Platform",
    description: "Built a full-stack donation platform enabling users to contribute to active NGO campaigns via secure online payments. Integrated Stripe Checkout for handling one-time and recurring donations, with backend webhook support for tracking payments. Implemented JWT-based authentication and protected routes for user and admin access management. Documented APIs using Swagger/OpenAPI for better collaboration and testing. Containerized the application with Docker and automated deployments using GitHub Actions for CI/CD.",
    technologies: ["React.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "Stripe", "Docker"],
    githubLink: "https://github.com/coderabhay332/ngo-donation-platform",
  },
];

const ProjectCard = ({ project }: { project: Project }) => (
  <article className="bg-black text-white flex flex-col items-start gap-10 rounded-lg border-2 border-black px-3 py-5 md:p-10 xl:p-20 h-full">
    <div className="flex flex-col gap-10">
      <p className="text-neutral-700 text-2xl font-extrabold md:text-4xl">{project.number}</p>
      <h3 className="text-white text-xl font-extrabold tracking-tight md:text-3xl">{project.title}</h3>
    </div>
    <p className="flex-grow leading-relaxed text-zinc-300">
      {project.description}
    </p>
    <div className="flex flex-col gap-2 w-full">
      <span className="font-extrabold">Technologies:</span>
      <ul className="flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <li key={tech} className="rounded-full bg-neutral-100 px-3 py-1 text-sm font-medium text-neutral-700 shadow-sm">
            {tech}
          </li>
        ))}
      </ul>
    </div>
    <div className="flex gap-4 pt-2">
      {project.liveLink && (
        <a 
          href={project.liveLink} 
          aria-label={`View ${project.title} live demo`}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-neutral-100 p-2 transition-colors hover:bg-neutral-200"
        >
          <ExternalLink className="h-6 w-6 text-neutral-800" />
        </a>
      )}
      {project.githubLink && (
        <a 
          href={project.githubLink} 
          aria-label={`View ${project.title} project source code on GitHub`}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-neutral-100 p-2 transition-colors hover:bg-neutral-200"
        >
          <Github className="h-6 w-6 text-neutral-800" />
        </a>
      )}
    </div>
  </article>
);


const ProjectsSection = () => {
    return (
        <section id="projects" className="bg-white px-4 py-5 sm:px-6 sm:py-10 md:py-20 md:px-[3.75rem] xl:px-28">
            <h2 className="mb-10 pt-5 text-center text-[28px]/[1.14] tracking-tight md:pt-0 lg:text-[48px]/[1.14]">
                <span className="pr-2 md:pr-4">My</span>
                <span className="font-extrabold">Projects</span>
            </h2>
            <div className="grid gap-3 md:gap-10 lg:grid-cols-2 lg:gap-[3.75rem] xl:gap-[7.5rem]">
                {projectsData.map((project) => (
                    <ProjectCard key={project.number} project={project} />
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection;