import { useEffect, useRef } from "react";
import { GraduationCap, Code2, Globe } from "lucide-react";

function About() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove("opacity-0", "translate-y-10");
                    entry.target.classList.add("opacity-100", "translate-y-0");
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.2 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} id="about"
            className="relative mx-auto max-w-6xl px-6 py-20 md:py-28 opacity-0 translate-y-10 transition-all duration-1000">

            <div className="relative z-10 grid gap-16 md:grid-cols-2 items-center">
                {/* LEFT SIDE (TEXT) */}
                <div>
                    <p className="text-xs uppercase tracking-[0.5em] text-purple-500 mb-3 font-bold">
                        Get To Know Me
                    </p>
                    <h2 className="relative text-4xl sm:text-5xl font-bold mb-8 inline-block">
                        About Me
                        <div className="absolute -bottom-2 left-0 w-1/2 h-0.75 bg-linear-to-r from-purple-500 to-transparent rounded-full" />
                    </h2>

                    <div className="space-y-4 text-slate-300 leading-relaxed text-sm md:text-base">
                        <p>
                            I am a Software Engineering student and full-stack developer passionate about building scalable web applications and modern digital experiences using the MERN stack and contemporary web technologies.
                        </p>

                        <p>
                            I enjoy working across both frontend and backend development, building responsive user interfaces, REST APIs, and real-world applications with technologies like React, Node.js, Express, MongoDB, Python, and Flask.
                        </p>

                        <p className="text-slate-400 italic">
                            Currently exploring AI-powered applications, intelligent automation workflows, and modern software engineering practices while continuously improving my problem-solving and development skills.
                        </p>
                    </div>

                    <div className="mt-8 flex gap-4">
                        <a href="/Syeda_Mahnoor_Resume.pdf"
                            download="Syeda_Mahnoor_Resume.pdf"
                            className="inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-[#2B0F4C] to-[#3E1A6B] border border-[#7A4FCB]/50 px-6 py-3 text-sm font-semibold text-white transition hover:shadow-[0_0_20px_rgba(122,79,203,0.4)] hover:-translate-y-0.5"
                        >
                            📄 Download Resume
                        </a>
                    </div>
                </div>

                {/* RIGHT SIDE (EDUCATION & CARDS) */}
                <div className="grid gap-6">
                    <div className="group p-6 rounded-3xl bg-white/3 border border-white/10 backdrop-blur-xl hover:border-purple-500/30 transition-all duration-500">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-400 group-hover:scale-110 transition-transform">
                                <GraduationCap size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white mb-1">Education</h3>
                                <p className="text-sm text-purple-400 font-medium mb-2">Bachelor of Software Engineering</p>
                                <p className="text-[13px] text-slate-500 leading-relaxed">
                                    Currently pursuing a Bachelor's degree in Software Engineering while developing full-stack applications, AI-integrated projects, and scalable software solutions focused on real-world problem solving.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="p-5 rounded-2xl bg-white/2 border border-white/5 hover:border-purple-500/20 transition-all">
                            <Code2 className="text-purple-500 mb-3" size={20} />
                            <h4 className="text-white font-semibold text-sm mb-1">MERN Stack</h4>
                            <p className="text-[13px] text-slate-500">Building robust end-to-end web applications.</p>
                        </div>
                        <div className="p-5 rounded-2xl bg-white/2 border border-white/5 hover:border-purple-500/20 transition-all">
                            <Globe className="text-purple-500 mb-3" size={20} />
                            <h4 className="text-white font-semibold text-sm mb-1">Problem Solving</h4>
                            <p className="text-[13px] text-slate-500">Strong foundations in DSA, OOP, and scalable application logic.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* PROMINENT STATS ROW (Bento Style) */}
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                    { value: "5+", label: "Projects Completed" },
                    { value: "MERN", label: "Primary Stack" },
                    { value: "AI", label: "Exploration" },
                    { value: "2028", label: "Graduating Year" },
                ].map((stat, i) => (
                    <div key={i} className="group p-6 rounded-3xl bg-white/2 border border-white/5 backdrop-blur-sm text-center hover:bg-white/4 hover:border-purple-500/30 transition-all duration-500">
                        <p className="text-2xl font-black text-white group-hover:text-purple-400 transition-colors mb-1">{stat.value}</p>
                        <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default About;