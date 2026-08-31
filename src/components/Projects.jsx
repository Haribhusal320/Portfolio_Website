import { CheckCircle2, Cpu, Map, Sun } from "lucide-react";
import SectionTitle from "./SectionTitle";

const projects = [
    {
        title: "Augmented Reality Sandbox",
        description:
            "An interactive educational system that combines physical sand, depth sensing, and augmented reality projection to visualize terrain, elevation, contour lines, and geospatial data in real time.",
        icon: Map,
        label: "Augmented Reality",
        technologies: [
            "Augmented Reality",
            "Depth Sensing",
            "System Architecture",
            "Data Analysis",
            "Prototype Development",
        ],
        responsibilities: [
            "Developed the concept of using an augmented reality sandbox to enhance interactive learning and conducted extensive research to validate the idea.",
            "Designed the system architecture, including the required hardware and software components.",
            "Built and tested a functional prototype combining physical interaction with real-time augmented reality visualization.",
            "Integrated sensing and projection technologies to create a responsive, multi-sensory educational experience.",
            "Analyzed data collected during user testing and used the findings to improve system accuracy and performance.",
        ],
    },
    {
        title: "Real-Time Solar Tracking System",
        description:
            "A microcontroller-based solar tracking system that adjusts the position of a photovoltaic panel using altitude and azimuth angles to improve alignment with sunlight and increase energy harvesting.",
        icon: Sun,
        label: "Embedded Systems",
        technologies: [
            "Arduino Uno",
            "Sensors",
            "Embedded Systems",
            "Solar Energy",
            "Data Visualization",
        ],
        responsibilities: [
            "Designed and built a real-time solar tracking system using microcontrollers, sensors, and motor-control components.",
            "Implemented tracking logic based on solar altitude and azimuth angles to improve photovoltaic panel alignment.",
            "Conducted experiments and collected performance data to evaluate the system's accuracy and effectiveness.",
            "Used real-time data visualization and analysis tools to monitor system behavior and identify improvements.",
        ],
    },
];

function Projects() {
    return (
        <section
            id="projects"
            className="bg-base-200 px-4 py-20 text-base-content sm:px-6 lg:px-8"
        >
            <div className="mx-auto max-w-7xl">
                <SectionTitle
                    eyebrow="Projects"
                    title="Projects"
                    description="Academic and engineering projects focused on interactive technology, embedded systems, and sustainable energy."
                />

                <div className="mt-12 space-y-8">
                    {projects.map((project, index) => {
                        const Icon = project.icon;

                        return (
                            <article
                                key={project.title}
                                className="overflow-hidden rounded-3xl border border-base-300 bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                            >
                                <div className="grid lg:grid-cols-[300px_1fr]">
                                    <div
                                        className={`relative flex min-h-64 items-center justify-center overflow-hidden p-8 ${index === 0
                                            ? "bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700"
                                            : "bg-gradient-to-br from-amber-400 via-orange-500 to-red-500"
                                            }`}
                                    >
                                        <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-white/10" />
                                        <div className="absolute -bottom-20 -right-14 h-56 w-56 rounded-full bg-white/10" />

                                        <div className="relative text-center text-white">
                                            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl border border-white/20 bg-white/15 shadow-xl backdrop-blur-sm">
                                                <Icon className="h-12 w-12" />
                                            </div>

                                            <p className="mt-5 text-sm font-bold uppercase tracking-[0.18em] text-white/80">
                                                {project.label}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="p-6 sm:p-8 lg:p-10">
                                        <p className="mb-2 text-sm font-bold uppercase tracking-wider text-primary">
                                            Engineering Project
                                        </p>

                                        <h3 className="text-2xl font-extrabold tracking-tight text-base-content sm:text-3xl">
                                            {project.title}
                                        </h3>

                                        <p className="mt-5 leading-7 text-base-content/70">
                                            {project.description}
                                        </p>

                                        <div className="mt-6 flex flex-wrap gap-2">
                                            {project.technologies.map((technology) => (
                                                <span
                                                    key={technology}
                                                    className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary"
                                                >
                                                    {technology}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="mt-8">
                                            <h4 className="mb-4 text-base font-bold text-base-content">
                                                Key responsibilities
                                            </h4>

                                            <ul className="space-y-3">
                                                {project.responsibilities.map(
                                                    (responsibility) => (
                                                        <li
                                                            key={responsibility}
                                                            className="flex items-start gap-3 text-sm leading-6 text-base-content/70 sm:text-base"
                                                        >
                                                            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                                                            <span>{responsibility}</span>
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Projects;
