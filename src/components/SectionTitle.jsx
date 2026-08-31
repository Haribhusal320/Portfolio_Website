export default function SectionTitle({
    eyebrow,
    title,
    description,
    subtitle,
}) {
    const content = description ?? subtitle;

    return (
        <div className="mx-auto mb-12 max-w-4xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-primary sm:text-base">
                {eyebrow}
            </p>

            <h2 className="text-3xl font-black leading-tight text-primary sm:text-4xl lg:text-5xl">
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
