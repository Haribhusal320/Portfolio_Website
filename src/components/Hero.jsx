import {
    ArrowDown,
    Download,
    Github,
    Linkedin,
    Mail,
} from "lucide-react";
import profile from "../assets/images/HariNorway.jpg";

export default function Hero() {
    return (
        <section className="hero min-h-[calc(100vh-4rem)] bg-gradient-to-br from-base-100 via-base-100 to-primary/10 px-4 py-16">
            <div className="hero-content mx-auto max-w-7xl flex-col-reverse gap-12 lg:flex-row lg:justify-between">
                <div className="max-w-3xl text-center lg:text-left">
                    <div className="badge badge-primary badge-outline mb-5 gap-2 p-4">
                        Product Engineer · Norway
                    </div>

                    <h1 className="text-5xl font-extrabold leading-tight sm:text-6xl lg:text-7xl">
                        Engineering products.
                        <br />
                        <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            Building better systems.
                        </span>
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-lg text-base-content/70 lg:mx-0">
                        I’m Hari Bhusal, a Product Engineer working across electronics,
                        product lifecycle management, and modern software tools.
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
                        <a href="#projects" className="btn btn-primary">
                            View Projects
                            <ArrowDown size={18} />
                        </a>

                        <a
                            href="/Hari_Bhusal_Resume.pdf"
                            download
                            className="btn btn-outline"
                        >
                            <Download size={18} />
                            Download CV
                        </a>
                    </div>

                    <div className="mt-6 flex justify-center gap-2 lg:justify-start">
                        <a
                            className="btn btn-ghost btn-circle"
                            href="https://www.linkedin.com/in/haribhusal320/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                        >
                            <Linkedin />
                        </a>

                        <a
                            className="btn btn-ghost btn-circle"
                            href="https://github.com/Haribhusal320"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                        >
                            <Github />
                        </a>

                        <a
                            className="btn btn-ghost btn-circle"
                            href="mailto:bhusalh99@gmail.com"
                            aria-label="Email"
                        >
                            <Mail />
                        </a>
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-primary to-secondary blur-2xl opacity-25" />

                    <img
                        src={profile}
                        alt="Hari Bhusal"
                        className="relative h-72 w-72 rounded-[2rem] object-cover shadow-glow sm:h-96 sm:w-96"
                    />
                </div>
            </div>
        </section>
    );
}
