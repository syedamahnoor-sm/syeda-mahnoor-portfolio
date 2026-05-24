import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

function Projects() {
    const projects = [
        {
            title: "MERN Task Management App",
            tags: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
            description: "A full-stack task management application built with the MERN stack, featuring user authentication, role-based access (admin/user), and advanced task handling such as editing, filtering, due dates, and completion tracking. Designed for efficient productivity and real-time task organization.",
            image: "/TaskManager.png",
            github: "https://github.com/syedamahnoor-sm/todo-mern",
            live: "https://todo-mern-lime-sigma.vercel.app",
        },
        {
            title: "Spotify Clone",
            tags: ["HTML", "CSS3", "Javascript", "Node.js", "MongoDB"],
            description: "A modern Spotify-inspired music streaming web application built with HTML, CSS, Vanilla JavaScript, Node.js, Express, and MongoDB. The project features dynamic song loading, real-time search, playlist management, responsive UI design, and a fully functional audio player with playback controls, volume handling, and seamless user experience across desktop and mobile devices.",
            image: "/Spotify.png",
            github: "https://github.com/syedamahnoor-sm/spotify-clone",
            live: "https://spotify-clone-lac-xi.vercel.app"
        },
          {
            title: "VidSnapAI",
            tags: ["Python","Flask","FFmpeg","SQlite","AI"],
            description: "VidSnapAI is an AI-powered reel generation platform built with Flask, SQLite, FFmpeg, and Microsoft Edge-TTS that converts text and images into short-form vertical videos with automated voice narration and dynamic reel processing.",
            image: "/VidsnapAI.png",
            github: "https://github.com/syedamahnoor-sm/VidSnapAI",
            live: "https://vidsnapai-ln8l.onrender.com"
        },
        {
        title: "Connectify",
        tags: ["React","Node.js","Express","MongoDB"],
        description: "Connectify is a full-stack MERN social media platform featuring JWT authentication, post sharing, media     uploads, and real-time user interactions with a responsive modern UI and scalable REST API architecture.",
        image: "/Connectify.png",
        github: "https://github.com/syedamahnoor-sm/Connectify",
        live: "https://connectify-gray.vercel.app"
        },
        {
            title: "Digital Logic Gate Simulator (OOP)",
            tags: ["C++", "OOP", "Digital Logic"],
            description: "A C++ console-based simulator that models fundamental digital logic gates (AND, OR, NOT, XOR) using Object-Oriented Programming principles. Supports dynamic circuit creation, input evaluation, and file-based persistence for learning and experimentation.",
            image: "/logic-gate.png",
            github: "https://github.com/syedamahnoor-sm/logic-gate-simulator",
            live: "#"
        },
        // {
        //     title: "Job Application Analyzer (DSA)",
        //     tags: ["C++", "Algorithms", "Data Structures"],
        //     description: "A C++ application that analyzes job application data using Data Structures and Algorithms concepts to process, filter, and evaluate candidate information efficiently. Demonstrates practical use of sorting, searching, and data handling techniques.",
        //     image: "/job-application.png",
        //     github: "https://github.com/syedamahnoor-sm/job-application-analyzer",
        //     live: "#"
        // }
    ];

    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            id="projects"
            className="py-20"
        >
            <section id="projects" className="relative pt-8 isolate overflow-hidden">
                <div className="absolute inset-0 -z-10 pointer-events-none">
                    <div className="absolute top-[20%] -left-20 w-150 h-150 bg-purple-600/10 blur-[130px]" />
                    <div className="absolute bottom-[20%] -right-20 w-150 h-150 bg-indigo-600/10 blur-[130px]" />
                </div>

                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-28">
                        <p className="text-xs font-bold uppercase tracking-[0.5em] text-purple-500 mb-3">Engineered Solutions</p>
                        <h2 className="relative text-5xl md:text-6xl font-bold text-white tracking-tight inline-block">
                            My Projects
                            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-linear-to-r from-transparent via-purple-500 to-transparent rounded-full" />
                        </h2>
                    </div>

                    <div className="space-y-40 md:space-y-56">
                        {projects.map((project, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                                className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-12`}
                            >
                                {/* MOBILE ONLY TITLE: Appears at the very top on small screens */}
                                <div className="w-full md:hidden mb-2">
                                    <p className="text-purple-400 font-bold text-xs mb-2 tracking-widest">Featured Project</p>
                                    <h3 className="text-3xl font-medium text-white tracking-tight leading-snug">{project.title}</h3>
                                </div>

                                {/* IMAGE BOX: Stays in middle on mobile, side on desktop */}
                                <div className="relative w-full md:w-7/12 group">
                                    <div className="absolute inset-0 bg-purple-600/20 rounded-3xl blur-3xl opacity-0 group-hover:opacity-40 transition-all duration-700" />
                                    <div className="relative overflow-hidden rounded-3xl border-2 border-white/5 bg-white/5 aspect-video shadow-2xl transition-all group-hover:border-purple-500/10">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover grayscale-40 group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a]/70 via-transparent to-transparent opacity-80" />
                                    </div>
                                </div>

                                {/* CONTENT BOX: Title hidden on mobile here to prevent duplication */}
                                <div className={`w-full md:w-5/12 flex flex-col ${i % 2 === 0 ? "items-start" : "items-start md:items-end text-left md:text-right"}`}>
                                    {/* DESKTOP ONLY TITLE */}
                                    <div className="hidden md:block">
                                        <p className="text-purple-400 font-bold text-xs mb-2 tracking-widest">Featured Project</p>
                                        <h3 className="text-3xl font-medium text-white mb-4 tracking-tight leading-snug">{project.title}</h3>
                                    </div>

                                    <div className="relative z-10 p-7 rounded-2xl bg-white/3 backdrop-blur-2xl border border-white/10 shadow-2xl mb-7 transition-all hover:border-purple-500/30 hover:bg-white/5 w-full">
                                        <p className="text-slate-400 leading-relaxed text-sm">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div className={`flex flex-wrap gap-2.5 mb-10 ${i % 2 !== 0 ? "md:justify-end" : "justify-start"}`}>
                                        {project.tags.map((tag, index) => (
                                            <span key={index} className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 bg-purple-950/20 px-3.5 py-1.5 rounded-full border border-purple-900/40">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-4">
                                        <a href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/80 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300 hover:text-white group">
                                            <Github size={17} className="group-hover:scale-110 transition-transform" />
                                            <span className="text-xs font-semibold">GitHub Repo</span>
                                        </a>
                                        {project.live && project.live !== "#" && (
                                            <a href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-purple-600/90 border border-purple-500/20 text-white shadow-lg shadow-purple-950/20 hover:bg-purple-500 hover:scale-105 transition-all duration-300">
                                                <ExternalLink size={17} />
                                                <span className="text-xs font-bold">Live Demo</span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </motion.section>
    );
}

export default Projects;