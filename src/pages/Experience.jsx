import { motion } from "framer-motion";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";

//Experience section showcasing professional and academic journey
function Experience() {
    const experiences = [
        {
            company: "Arch Technologies",
            role: "Web Developer Intern",
            duration: "March 2026 – Present",
            description: [
                "Architecting full-stack web applications using the MERN stack.",
                "Developing responsive, high-performance interfaces with React and Tailwind CSS.",
                "Implementing robust backend APIs and complex CRUD logic."
            ],
            tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind"]
        },
        {
            company: "Self-Directed Study & Academic Labs",
            role: "Software Engineering Student",
            duration: "2024 – Present",
            description: [
                "Mastered Object-Oriented Programming (OOP) principles through C++ system simulations.",
                "Engineered a Logic Gate Simulator and DSA library to optimize algorithmic efficiency.",
                "Broadening technical horizons by researching Data Science fundamentals and their application in modern software systems.",
                "Consistently achieving high performance in University Lab assessments by optimizing code for time and space complexity."
            ],
            tech: ["C++", "Python", "Algorithms", "OOP", "SQL Server"]
        }
    ];

    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, amount: 0.2 }} 
            transition={{ duration: 0.8, ease: "easeOut" }}
            id="experience"
            className="py-20"
        >
            <section id="experience" className="relative py-32 isolate">
                <div className="absolute inset-0 -z-10 pointer-events-none">
                    <div className="absolute top-1/4 left-0 w-125 h-125 bg-purple-600/5 blur-[120px]" />
                </div>

                <div className="max-w-4xl mx-auto px-6">
                    <div className="mb-20">
                        <p className="text-xs font-bold uppercase tracking-[0.4em] text-purple-500 mb-3">Professional Journey</p>
                        <h2 className="relative text-5xl md:text-6xl font-bold text-white tracking-tight inline-block">
                            Experience
                            <div className="absolute -bottom-3 left-0 w-20 h-0.75 bg-linear-to-r from-purple-500 to-transparent rounded-full" />
                        </h2>
                    </div>

                    <div className="relative border-l-2 border-white/10 ml-4 md:ml-0">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                                className="relative pl-10 pb-12 group"
                            >
                                <div className="absolute -left-2.75 top-0 w-5 h-5 rounded-full bg-[#0a0a0a] border-2 border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.5)] group-hover:scale-125 transition-transform duration-300" />

                                <div className="relative p-8 rounded-3xl bg-white/2 border border-white/5 backdrop-blur-3xl hover:border-purple-500/20 hover:bg-white/4 transition-all duration-500 shadow-2xl">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                                        <div>
                                            <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">
                                                {exp.role}
                                            </h3>
                                            <div className="flex items-center gap-2 text-purple-400 font-medium italic text-sm">
                                                <Briefcase size={14} />
                                                {exp.company}
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-400 text-xs font-mono">
                                            <Calendar size={13} />
                                            {exp.duration}
                                        </div>
                                    </div>

                                    <ul className="space-y-4 mb-8">
                                        {exp.description.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed">
                                                <ChevronRight size={16} className="text-purple-500 mt-1 shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex flex-wrap gap-2">
                                        {exp.tech.map((t, i) => (
                                            <span key={i} className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md bg-purple-500/5 border border-purple-500/10 text-purple-300/80">
                                                {t}
                                            </span>
                                        ))}
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

export default Experience;