import SectionTitle from "./SectionTitle";

const groups = {
    Engineering: [
        "Product lifecycle management",
        "BOM & ECN",
        "Electronics",
        "Component qualification",
        "Factory support",
    ],
    Software: [
        "Python",
        "JavaScript",
        "React",
    ],
    Platforms: [
        "Windchill",
        "Jira",
        "SAP",
        "Git & GitHub",
        "Linux",
        "WATS",
    ],
};

export default function Skills() {
    return (
        <section id="skills" className="bg-base-200 px-4 py-24">
            <div className="mx-auto max-w-7xl">
                <SectionTitle
                    eyebrow="Skills"
                    title="Tools I use to solve engineering problems"
                />

                <div className="grid gap-6 md:grid-cols-3">
                    {Object.entries(groups).map(([g, s]) => (
                        <div
                            key={g}
                            className="card border border-base-300 bg-base-100"
                        >
                            <div className="card-body">
                                <h3 className="card-title text-primary">
                                    {g}
                                </h3>

                                <div className="mt-3 flex flex-wrap gap-2">
                                    {s.map((x) => (
                                        <span
                                            key={x}
                                            className="badge badge-lg badge-outline"
                                        >
                                            {x}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
