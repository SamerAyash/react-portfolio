import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import ProjectComponent from "./ProjectComponent.jsx";
import "./main.css";

const categories = [
    { id: "html_css", name: "HTML & CSS" },
    { id: "react", name: "JavaScript" },
    { id: "javascript", name: "React & Next" },
    { id: "laravel", name: "PHP & Laravel" },
];

const projects = [
    { title: "project 1", category: ["html_css", "react"] },
    { title: "project 2", category: ["html_css"] },
    { title: "project 3", category: ["html_css"] },
    { title: "project 4", category: ["html_css"] },
    { title: "project 5", category: ["html_css"] },
    { title: "project 6", category: ["react", "javascript", "html_css"] },
    { title: "project 7", category: ["react", "javascript", "html_css"] },
    { title: "project 8", category: ["react", "javascript", "html_css"] },
    { title: "project 9", category: ["javascript"] },
    { title: "project 10", category: ["laravel", "html_css"] },
    { title: "project 11", category: ["laravel", "html_css"] },
    { title: "project 12", category: ["laravel", "html_css"] },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    },
    exit: { opacity: 0 }
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.4, ease: "easeOut" }
    },
    exit: { opacity: 0, scale: 0.5 }
};

export default function Main() {
    const [currentActiveLink, setCurrentActiveLink] = useState("all");

    const filteredProjects = currentActiveLink === "all"
        ? projects
        : projects.filter(project => project.category.includes(currentActiveLink));

    return (
        <main>
            <section className="left-section">
                {["all", ...categories.map(c => c.id)].map(id => {
                    const isActive = currentActiveLink === id;
                    const name = id === "all" ? "All projects" : categories.find(c => c.id === id).name;
                    
                    return (
                        <motion.button
                            key={id}
                            onClick={() => setCurrentActiveLink(id)}
                            className={`filter-btn ${isActive ? "active" : ""}`}
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300}}
                        >
                            {name}
                            <motion.div
                                className="underline"
                                animate={{ width: isActive ? "100%" : "0%" }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.button>
                    );
                })}
            </section>

            <section className="right-section">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentActiveLink}
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="projects-container"
                    >
                        {filteredProjects.map(project => (
                            <motion.div key={project.title} variants={itemVariants}>
                                <ProjectComponent title={project.title} />
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </section>
        </main>
    );
}
