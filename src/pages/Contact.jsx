import { motion, AnimatePresence } from "framer-motion";
import { Mail, Github, Linkedin, Send, MessageSquare, User, AtSign, CheckCircle2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const Contact = () => {
    const contactDetails = [
        {
            icon: <Mail size={20} />,
            label: "Email",
            value: "syedamahnoor9e@gmail.com",
            href: "mailto:syedamahnoor9e@gmail.com",
        },
        {
            icon: <Github size={20} />,
            label: "GitHub",
            value: "github.com/syedamahnoor9e-eng",
            href: "https://github.com/syedamahnoor9e-eng",
        },
        {
            icon: <Linkedin size={20} />,
            label: "LinkedIn",
            value: "linkedin.com/in/syeda-mahnoor-sm",
            href: "https://linkedin.com/in/syeda-mahnoor-sm",
        },
    ];

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleKeyDown = (e) => {
        if (e.key === "Enter" || e.key === "ArrowDown") {
            if (e.target.tagName !== "TEXTAREA" && e.target.type !== "submit") {
                e.preventDefault();
                const form = e.target.form;
                const index = Array.prototype.indexOf.call(form, e.target);
                form.elements[index + 1]?.focus();
            }
        }
        if (e.key === "ArrowUp") {
            e.preventDefault();
            const form = e.target.form;
            const index = Array.prototype.indexOf.call(form, e.target);
            form.elements[index - 1]?.focus();
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: null });
        }
    };

    const validate = () => {
        let newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Full name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email address is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Please enter a valid email";
        }
        if (!formData.message.trim()) newErrors.message = "Please enter your message";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const sendEmail = (e) => {
        e.preventDefault();
        if (!validate()) return;

        setIsSubmitting(true);
        emailjs
            .send(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                formData,
                import.meta.env.VITE_PUBLIC_KEY
            )
            .then(() => {
                setIsSuccess(true);
                setIsSubmitting(false);
                setFormData({ name: "", email: "", message: "" });
                setTimeout(() => setIsSuccess(false), 6000);
            })
            .catch(() => {
                setIsSubmitting(false);
                alert("Submission failed. Check your connection.");
            });
    };

    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            id="contact"
            className="py-20"
        >
            <section className="relative pt-8 isolate overflow-hidden">
                {/* Background Glow */}
                <div className="absolute inset-0 -z-10 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-purple-600/5 blur-[120px]" />
                </div>

                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <p className="text-xs font-bold uppercase tracking-[0.4em] text-purple-500 mb-3">Get In Touch</p>
                        <h2 className="relative text-5xl md:text-6xl font-bold text-white tracking-tight inline-block">
                            Contact
                            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-0.75 bg-linear-to-r from-transparent via-purple-500 to-transparent rounded-full" />
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* Info Column */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-4">Let's build something together</h3>
                                <p className="text-slate-400 leading-relaxed max-w-md">
                                    Currently focusing on MERN stack and software architecture. Drop a message for collaborations or inquiries.
                                </p>
                            </div>

                            <div className="space-y-4">
                                {contactDetails.map((item, i) => (
                                    <a
                                        key={i}
                                        href={item.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-4 p-4 rounded-2xl bg-white/3 border border-white/5 hover:border-purple-500/30 hover:bg-white/6 transition-all group"
                                    >
                                        <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 group-hover:scale-110 transition-transform">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{item.label}</p>
                                            <p className="text-slate-200 font-medium">{item.value}</p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Form Column */}
                        <motion.div className="relative p-8 rounded-3xl bg-white/2 border border-white/10 backdrop-blur-xl shadow-2xl overflow-hidden">
                            <AnimatePresence mode="wait">
                                {isSuccess ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="py-12 text-center space-y-4"
                                    >
                                        <CheckCircle2 size={48} className="text-purple-500 mx-auto" />
                                        <h3 className="text-2xl font-bold text-white">Message Dispatched!</h3>
                                        <p className="text-slate-400">I'll get back to you shortly.</p>
                                        <button onClick={() => setIsSuccess(false)} className="text-purple-400 font-bold uppercase text-xs pt-4 tracking-widest">Send Another</button>
                                    </motion.div>
                                ) : (
                                    <motion.form
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        onSubmit={sendEmail}
                                        className="space-y-6"
                                        noValidate
                                    >
                                        {/* Name */}
                                        <div className="space-y-2">
                                            <label className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-purple-400 ml-1">
                                                <User size={12} /> Full Name
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                onKeyDown={handleKeyDown}
                                                placeholder="Your Name"
                                                className={`w-full p-4 rounded-xl bg-white/5 border ${errors.name ? 'border-red-500/60' : 'border-white/10'} focus:outline-none focus:border-purple-500/50 text-white transition-all`}
                                            />
                                            {errors.name && <p className="text-red-500 text-[10px] font-bold uppercase ml-1 animate-pulse">{errors.name}</p>}
                                        </div>

                                        {/* Email */}
                                        <div className="space-y-2">
                                            <label className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-purple-400 ml-1">
                                                <AtSign size={12} /> Email Address
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                onKeyDown={handleKeyDown}
                                                placeholder="email@example.com"
                                                className={`w-full p-4 rounded-xl bg-white/5 border ${errors.email ? 'border-red-500/60' : 'border-white/10'} focus:outline-none focus:border-purple-500/50 text-white transition-all`}
                                            />
                                            {errors.email && <p className="text-red-500 text-[10px] font-bold uppercase ml-1 animate-pulse">{errors.email}</p>}
                                        </div>

                                        {/* Message */}
                                        <div className="space-y-2">
                                            <label className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-purple-400 ml-1">
                                                <MessageSquare size={12} /> Message
                                            </label>
                                            <textarea
                                                rows="4"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                onKeyDown={handleKeyDown}
                                                placeholder="Tell me about your project..."
                                                className={`w-full p-4 rounded-xl bg-white/5 border ${errors.message ? 'border-red-500/60' : 'border-white/10'} focus:outline-none focus:border-purple-500/50 text-white transition-all resize-none`}
                                            />
                                            {errors.message && <p className="text-red-500 text-[10px] font-bold uppercase ml-1 animate-pulse">{errors.message}</p>}
                                        </div>

                                        <button
                                            disabled={isSubmitting}
                                            className="w-full py-4 rounded-xl bg-purple-600 text-white font-bold flex items-center justify-center gap-2 hover:bg-purple-500 transition-all shadow-lg shadow-purple-500/20 disabled:opacity-50 cursor-pointer"
                                        >
                                            {isSubmitting ? (
                                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            ) : (
                                                <><Send size={18} /> Send Message</>
                                            )}
                                        </button>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </div>
                </div>
            </section>
        </motion.section>
    );
}

export default Contact;