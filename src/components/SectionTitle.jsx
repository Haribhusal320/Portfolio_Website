export default function SectionTitle({
    eyebrow,
    title,
    description,
    subtitle,
}) {
    const content = description ?? subtitle;

    return (
        <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-primary">
                {eyebrow}
            </p>

            <h2 className="text-3xl font-extrabold sm:text-4xl">
                {title}
            </h2>

            {content && (
                <p className="mt-4 text-base-content/65">
                    {content}
                </p>
            )}
        </div>
    );
}
