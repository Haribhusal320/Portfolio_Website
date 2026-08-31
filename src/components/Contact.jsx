import { useState } from "react";
import {
    CheckCircle2,
    Loader2,
    Mail,
    Send,
    XCircle,
} from "lucide-react";

import SectionTitle from "./SectionTitle";

const initialFormData = {
    name: "",
    email: "",
    message: "",
    website: "",
};

function Contact() {
    const [formData, setFormData] = useState(initialFormData);
    const [status, setStatus] = useState("idle");
    const [statusMessage, setStatusMessage] = useState("");

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((currentData) => ({
            ...currentData,
            [name]: value,
        }));

        if (status !== "idle") {
            setStatus("idle");
            setStatusMessage("");
        }
    };

    const validateForm = () => {
        const trimmedName = formData.name.trim();
        const trimmedEmail = formData.email.trim();
        const trimmedMessage = formData.message.trim();

        if (!trimmedName || !trimmedEmail || !trimmedMessage) {
            return "Please complete all required fields.";
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(trimmedEmail)) {
            return "Please enter a valid email address.";
        }

        if (trimmedName.length < 2) {
            return "Please enter your full name.";
        }

        if (trimmedMessage.length < 10) {
            return "Please write a message with at least 10 characters.";
        }

        if (trimmedMessage.length > 2000) {
            return "Your message must be shorter than 2000 characters.";
        }

        return "";
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (formData.website.trim()) {
            setStatus("success");
            setStatusMessage("Message sent successfully.");
            setFormData(initialFormData);
            return;
        }

        const validationError = validateForm();

        if (validationError) {
            setStatus("error");
            setStatusMessage(validationError);
            return;
        }

        setStatus("sending");
        setStatusMessage("");

        setTimeout(() => {
            setStatus("success");
            setStatusMessage("Thank you. Your message has been captured for demo purposes.");
            setFormData(initialFormData);
        }, 500);
    };

    return (
        <section
            id="contact"
            className="bg-base-200 px-4 py-20 text-base-content sm:px-6 lg:px-8"
        >
            <div className="mx-auto max-w-6xl">
                <SectionTitle
                    eyebrow="Contact"
                    title="Let's discuss engineering and software"
                />

                <div className="mt-12 mx-auto max-w-3xl">
                    <div className="rounded-3xl border border-base-300 bg-base-100 p-6 shadow-xl sm:p-8">
                        <form onSubmit={handleSubmit} noValidate>
                            <div className="grid gap-6 sm:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="mb-2 block text-sm font-bold text-base-content"
                                    >
                                        Name
                                    </label>

                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        value={formData.name}
                                        onChange={handleChange}
                                        autoComplete="name"
                                        maxLength={100}
                                        required
                                        disabled={status === "sending"}
                                        placeholder="Your name"
                                        className="input input-bordered h-12 w-full bg-base-100 text-base-content placeholder:text-base-content/40 focus:border-blue-500 focus:outline-none"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="mb-2 block text-sm font-bold text-base-content"
                                    >
                                        Email
                                    </label>

                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        autoComplete="email"
                                        maxLength={150}
                                        required
                                        disabled={status === "sending"}
                                        placeholder="you@example.com"
                                        className="input input-bordered h-12 w-full bg-base-100 text-base-content placeholder:text-base-content/40 focus:border-blue-500 focus:outline-none"
                                    />
                                </div>
                            </div>

                            <div className="mt-6">
                                <div className="mb-2 flex items-center justify-between gap-4">
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-bold text-base-content"
                                    >
                                        Message
                                    </label>

                                    <span className="text-xs text-base-content/50">
                                        {formData.message.length}/2000
                                    </span>
                                </div>

                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={7}
                                    maxLength={2000}
                                    required
                                    disabled={status === "sending"}
                                    placeholder="Write your message here..."
                                    className="textarea textarea-bordered w-full resize-y bg-base-100 text-base-content placeholder:text-base-content/40 focus:border-blue-500 focus:outline-none"
                                />
                            </div>

                            <div
                                className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden"
                                aria-hidden="true"
                            >
                                <label htmlFor="website">Website</label>
                                <input
                                    id="website"
                                    name="website"
                                    type="text"
                                    value={formData.website}
                                    onChange={handleChange}
                                    tabIndex={-1}
                                    autoComplete="off"
                                />
                            </div>

                            {statusMessage && (
                                <div
                                    role="status"
                                    className={`mt-5 flex items-start gap-3 rounded-2xl border p-4 text-sm font-medium ${status === "success"
                                        ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                                        : "border-red-200 bg-red-50 text-red-800"
                                        }`}
                                >
                                    {status === "success" ? (
                                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
                                    ) : (
                                        <XCircle className="mt-0.5 h-5 w-5 shrink-0" />
                                    )}

                                    <span>{statusMessage}</span>
                                </div>
                            )}

                            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                <a
                                    href="mailto:bhusalh99@gmail.com"
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-base-content/70 underline-offset-4 transition hover:text-blue-600 hover:underline"
                                >
                                    <Mail className="h-4 w-4" />
                                    bhusalh99@gmail.com
                                </a>

                                <button
                                    type="submit"
                                    disabled={status === "sending"}
                                    className="btn border-0 bg-blue-600 px-6 text-white hover:bg-blue-700 disabled:bg-blue-400"
                                >
                                    {status === "sending" ? (
                                        <>
                                            <Loader2 className="h-5 w-5 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send message
                                            <Send className="h-4 w-4" />
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
