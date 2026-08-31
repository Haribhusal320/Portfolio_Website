import SectionTitle from "./SectionTitle";
import ntnu from "../assets/images/NTNU.jpg";
import pu from "../assets/images/PU.jpeg";

const items = [
    {
        img: ntnu,
        degree: "MSc Electronic Systems Design",
        school: "Norwegian University of Science and Technology (NTNU)",
        period: "2021 — 2023",
    },
    {
        img: pu,
        degree: "BE Electrical and Electronics Engineering",
        school: "Pokhara University",
        period: "2015 — 2019",
    },
];

export default function Education() {
    return (
        <section id="education" className="px-4 py-24">
            <div className="mx-auto max-w-7xl">
                <SectionTitle
                    eyebrow="Education"
                    title="A foundation in electronics and system design"
                />

                <div className="grid gap-6 md:grid-cols-2">
                    {items.map((x) => (
                        <article
                            key={x.degree}
                            className="card overflow-hidden border border-base-300 bg-base-100 shadow-sm"
                        >
                            <figure>
                                <img
                                    src={x.img}
                                    alt={x.school}
                                    className="h-56 w-full object-cover"
                                />
                            </figure>

                            <div className="card-body">
                                <span className="badge badge-primary badge-outline">
                                    {x.period}
                                </span>

                                <h3 className="card-title mt-2">{x.degree}</h3>

                                <p className="text-base-content/65">
                                    {x.school}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
