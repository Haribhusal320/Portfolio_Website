import { Briefcase } from "lucide-react";
import SectionTitle from "./SectionTitle";

const jobs = [
    {
        company: "Delta Electronics Norway",
        role: "Product Engineer",
        period: "June 2024 — Present",
        points: [
            "Manage and maintain Bill of Materials (BOM) data in PTC Windchill, supporting product configuration, lifecycle management, and production requirements.",
            "Analyze component shortages and availability risks, coordinate corrective actions, and support uninterrupted production.",
            "Coordinate with R&D and production teams on product upgrades, engineering changes, and process improvements within the sustaining engineering lifecycle.",
            "Support product changes and production activities with consideration for design realization, product quality, manufacturability, and mass production readiness.",
        ],
    },
    {
        company: "Unique Energy Pvt. Ltd., Nepal",
        role: "Electronics Engineer",
        period: "November 2019 — November 2020",
        points: [
            "Preparation of subsidy documents for the institutional photovoltaic system.",
            "Design, component selection, and installation of an institutional photovoltaic system for 1 kWp and 2 kWp systems.",
            "Evaluated and selected electrical/electronic components based on system requirements, compatibility, operating conditions, and expected performance.",
        ],
    },
];

export default function Experience() {
    return (
        <section id="experience" className="bg-base-200 px-4 py-24">
            <div className="mx-auto max-w-5xl">
                <SectionTitle
                    eyebrow="Experience"
                    title="Engineering work across products and systems"
                />

                <div className="space-y-6">
                    {jobs.map((j) => (
                        <article
                            key={j.company}
                            className="card border border-base-300 bg-base-100 shadow-sm"
                        >
                            <div className="card-body">
                                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                                    <div>
                                        <Briefcase className="mb-3 text-primary" />

                                        <h3 className="card-title text-2xl">
                                            {j.role}
                                        </h3>

                                        <p className="font-semibold text-secondary">
                                            {j.company}
                                        </p>
                                    </div>

                                    <span className="badge badge-outline p-3">
                                        {j.period}
                                    </span>
                                </div>

                                <ul className="mt-4 space-y-2 text-base-content/70">
                                    {j.points.map((p) => (
                                        <li key={p} className="flex gap-3">
                                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                                            {p}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
