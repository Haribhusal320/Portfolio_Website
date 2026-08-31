import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const fn = () => setShow(window.scrollY > 500);

        fn();

        window.addEventListener("scroll", fn, { passive: true });

        return () => window.removeEventListener("scroll", fn);
    }, []);

    return (
        <button
            aria-label="Scroll to top"
            onClick={() =>
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                })
            }
            className={`btn btn-primary btn-circle fixed bottom-5 right-5 z-40 shadow-lg transition ${show
                ? "translate-y-0 opacity-100"
                : "pointer-events-none translate-y-4 opacity-0"
                }`}
        >
            <ArrowUp />
        </button>
    );
}
