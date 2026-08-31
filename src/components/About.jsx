import { Cpu, MapPin } from "lucide-react";
import SectionTitle from "./SectionTitle";

export default function About() {
    return (
        <section id="about" className="px-4 py-24">
            <div className="mx-auto max-w-7xl">
                <SectionTitle
                    eyebrow="About"
                    title="Electronics knowledge with a software mindset"
                />

                <div className="grid gap-6 lg:grid-cols-3">
                    <div className="card border border-base-300 bg-base-200/50 lg:col-span-2">
                        <div className="card-body">
                            <p className="text-lg leading-8 text-base-content/75">
                                I work as a Product Engineer at Delta Electronics, supporting
                                product lifecycle activities such as BOM updates, engineering
                                changes, component replacements, factory coordination, and
                                technical issue resolution. My background combines Electrical
                                and Electronics Engineering with an MSc in Electronic Systems
                                Design from NTNU.
                            </p>
                        </div>
                    </div>

                    <div className="grid gap-4">
                        <div className="stat rounded-2xl border border-base-300 bg-base-100">
                            <Cpu className="text-primary" />
                            <div className="stat-title">Focus</div>
                            <div className="stat-value text-xl">
                                Product Engineering
                            </div>
                        </div>

                        <div className="stat rounded-2xl border border-base-300 bg-base-100">
                            <MapPin className="text-accent" />
                            <div className="stat-title">Based in</div>
                            <div className="stat-value text-xl">
                                Oslo, Norway
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
