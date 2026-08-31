export default function SectionTitle({
    eyebrow,
    title,
    description,
    subtitle,
}) {
    const content = description ?? subtitle;

    return (
        <div className="mx-auto mb-12 max-w-4xl text-center">
            <p className="mb-3 text-2xl font-bold uppercase tracking-[0.2em] text-primary">
                {eyebrow}
            </p>

            <h2 className="text-xl font-black font-normalleading-tight text-black  lg:text-xl">
                {title}
            </h2>

            {content && (
                <p className="mt-5 text-base leading-8 text-base-content/70 sm:text-lg">
                    {content}
                </p>
            )}
        </div>
    );
}
