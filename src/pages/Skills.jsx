import { motion } from "framer-motion";
import {
    Code2, Server, Database, Cpu, Github, Layers, Globe
} from "lucide-react";

function Skills() {
    const categories = [
        {
            title: "Frontend Development",
            icon: <Layers size={18} />,
            skills: [
                { name: "React", icon: <Code2 size={20} /> },
                { name: "Tailwind CSS", icon: <Globe size={20} /> },
                { name: "JavaScript", icon: <Code2 size={20} /> },
            ],
            color: "from-blue-500/20"
        },
        {
            title: "Backend & Database",
            icon: <Server size={18} />,
            skills: [
                { name: "Node.js", icon: <Server size={20} /> },
                { name: "Express.js", icon: <Server size={20} /> },
                { name: "MongoDB", icon: <Database size={20} /> },
            ],
            color: "from-purple-500/20"
        },
        {
            title: "Programming & Tools",
            icon: <Cpu size={18} />,
            skills: [
                { name: "C++", icon: <Cpu size={20} /> },
                { name: "Python", icon: <Cpu size={20} /> },
                { name: "Git & GitHub", icon: <Github size={20} /> },
            ],
            color: "from-indigo-500/20"
        }
    ];

    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            id="skills"
            className="py-20"
        >
            <section id="skills" className="relative py-32 isolate overflow-hidden">
                <div className="max-w-6xl mx-auto px-6">

                    {/* Header */}
                    <div className="text-center mb-20">
                        <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-purple-500 mb-3">Expertise</p>
                        <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight">My Tech Stack</h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 mb-12"
                    >
                        <div className="h-px w-12 bg-linear-to-r from-purple-500 to-transparent" />
                        <div className="flex flex-col">
                            <span className="font-mono text-[14px] text-purple-400/60 uppercase tracking-[0.3em]">{"< technologies >"}</span>
                            <span className="font-mono text-[12px] text-slate-500 italic mt-1">// Bridging the gap between complex logic and seamless user experiences</span>
                        </div>
                        <div className="h-px grow bg-linear-to-r from-white/10 to-transparent" />
                    </motion.div>


                    {/* Bento-Style Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {categories.map((cat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="relative group h-full"
                            >
                                <div className={`absolute inset-0 bg-linear-to-br ${cat.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl blur-2xl -z-10`} />

                                <div className="h-full p-8 rounded-3xl bg-white/2 border border-white/5 backdrop-blur-3xl hover:border-purple-500/20 hover:bg-white/4 transition-all duration-500 flex flex-col">
                                    <div className="flex items-center gap-3 mb-10">
                                        <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400">
                                            {cat.icon}
                                        </div>
                                        <h3 className="text-lg font-bold text-white/90 tracking-tight">
                                            {cat.title}
                                        </h3>
                                    </div>

                                    <div className="space-y-6 grow">
                                        {cat.skills.map((skill, index) => (
                                            <div key={index} className="flex items-center justify-between group/skill">
                                                <div className="flex items-center gap-4">
                                                    <span className="text-slate-500 group-hover/skill:text-purple-400 transition-colors">
                                                        {skill.icon}
                                                    </span>
                                                    <span className="text-sm font-medium text-slate-400 group-hover/skill:text-slate-200 transition-colors">
                                                        {skill.name}
                                                    </span>
                                                </div>
                                                <div className="w-1 h-1 rounded-full bg-slate-800 group-hover/skill:bg-purple-500 transition-all shadow-[0_0_8px_rgba(168,85,247,0)] group-hover/skill:shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 mt-16"
                    >
                        <div className="h-px grow bg-linear-to-l from-white/10 to-transparent" />
                        <div className="flex flex-col items-end">
                            <span className="font-mono text-[12px] text-slate-500 italic mt-1">return ScalableSystems;</span>
                            <span className="font-mono text-[14px] text-purple-400/60 uppercase tracking-[0.3em]">{"</ technologies >"}</span>
                        </div>
                        <div className="h-px w-12 bg-linear-to-l from-purple-500 to-transparent" />
                    </motion.div>
                </div>
            </section>
        </motion.section>
    );
}

export default Skills;