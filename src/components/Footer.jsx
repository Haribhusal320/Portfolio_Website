import { Github, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="footer footer-center border-t border-base-300 bg-base-100 p-10">
            <aside>
                <p className="text-xl font-extrabold">
                    Hari Bhusal
                    <span className="text-primary">.</span>
                </p>

                <p className="text-base-content/60">
                    Product Engineer · Electronics · Automation
                </p>

                <p>© {new Date().getFullYear()} Hari Bhusal</p>
            </aside>

            <nav>
                <div className="grid grid-flow-col gap-3">
                    <a
                        className="btn btn-ghost btn-circle"
                        href="https://www.linkedin.com/in/haribhusal320/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Linkedin />
                    </a>

                    <a
                        className="btn btn-ghost btn-circle"
                        href="https://github.com/Haribhusal320"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Github />
                    </a>
                </div>
            </nav>
        </footer>
    );
}
