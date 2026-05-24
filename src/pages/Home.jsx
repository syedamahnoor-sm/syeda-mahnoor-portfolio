import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import avatar from "../assets/avatar.png";

function Home() {
    return (
        <section 
            id="home" 
            className="relative mx-auto max-w-6xl px-6 pt-32 pb-16 md:py-24 min-h-screen flex items-center"
        >
            {/* Background Ambient Glow */}
            <div className="pointer-events-none absolute inset-0 z-0">
                <div
                    className="absolute w-96 h-96 bg-purple-700/20 rounded-full blur-[120px]"
                    style={{
                        transform: "translate(-50%, -50%)",
                        left: "65%",
                        top: "45%",
                    }}
                ></div>
            </div>

            <div className="relative z-10 grid items-center gap-12 md:grid-cols-2 w-full">

                {/* LEFT SIDE */}
                <div className="max-w-xl">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white">
                        Software Engineer | MERN Stack Developer
                    </p>

                    {/* ANIMATED HELLO LINE  */}
                    <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl text-white">
                        <span>Hello, I'm </span>
                        <TypeAnimation
                            sequence={[
                                'Syeda Mahnoor',
                                3000,
                                'a Software Engineer',
                                3000,
                            ]}
                            wrapper="span"
                            speed={30}
                            deletionSpeed={60}
                            repeat={Infinity}
                            className="text-[#7127ba] inline-block"
                        />
                    </h1>

                    <p className="text-base leading-8 text-slate-300 sm:text-lg">
                        I build scalable full-stack applications and AI-powered solutions using modern web technologies, focusing on clean architecture, responsive design, and seamless user experiences.
                    </p>

                    <div className="mt-10 flex flex-wrap gap-4">
                        <a href="#projects" className="cursor-pointer rounded-lg bg-linear-to-r from-[#2B0F4C] to-[#3E1A6B] border-2 border-[#7A4FCB] px-6 py-3 font-semibold text-[#EDEAF5] transition duration-300 hover:shadow-[0_0_20px_#7A4FCB]">
                            View My Projects
                        </a>
                        <a href="#contact" className="cursor-pointer rounded-lg border border-white/30 px-6 py-3 font-semibold text-white transition duration-300 hover:border-[#7A4FCB] hover:text-[#7A4FCB]">
                            Contact Me
                        </a>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="flex items-center justify-center md:justify-end md:translate-x-8">
                    <div className="relative flex items-center justify-center">

                        {/* 🔹 Background Glow */}
                        <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-linear-to-br from-[#3E1A6B] to-[#7c3aed] blur-[100px] opacity-30 animate-pulse">
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="relative z-10"
                        >
                            <img
                                src={avatar}
                                alt="Syeda Mahnoor"
                                className="w-64 sm:w-80 md:w-96 object-contain drop-shadow-[0_0_20px_rgba(124,58,237,0.4)]"
                            />
                            
                            {/* DOODLE 1: Sparkle (Top Left)*/}
                            <motion.div
                                animate={{
                                    opacity: [0.2, 0.8, 0.2],
                                    scale: [0.7, 1.1, 0.7],
                                    y: [0, -10, 0]
                                }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-4 -left-4"
                            >
                                <div className="w-2.5 h-2.5 bg-purple-400 rounded-full shadow-[0_0_15px_#a855f7]"></div>
                            </motion.div>

                            {/* DOODLE 2: Sparkle (Bottom Right) */}
                            <motion.div
                                animate={{
                                    opacity: [0.1, 0.6, 0.1],
                                    scale: [0.6, 1.3, 0.6],
                                    y: [0, 15, 0]
                                }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                                className="absolute bottom-10 -right-8"
                            >
                                <div className="w-2 h-2 bg-indigo-400 rounded-full shadow-[0_0_12px_#6366f1]"></div>
                            </motion.div>

                            {/* DOODLE 3: Small Geometric Sparkle (Top Right) */}
                            <motion.div
                                animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                className="absolute top-1/4 -right-12"
                            >
                                <div className="w-2 h-2 bg-purple-500 rounded-full shadow-[0_0_10px_#7c3aed]"></div>
                            </motion.div>

                            {/* DOODLE 4: Logic Loop (Bottom Left) */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                className="absolute -bottom-6 left-10 p-2 opacity-40"
                            >
                                <span className="text-3xl text-white/50">⟳</span>
                            </motion.div>

                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Subtle Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block">
                <motion.div
                    animate={{ height: [40, 60, 40] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-px bg-linear-to-b from-purple-500 to-transparent"
                />
            </div>
        </section>
    );
}

export default Home;