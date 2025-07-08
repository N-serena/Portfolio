import { useForm, ValidationError } from '@formspree/react';
import React, { useRef, useEffect } from "react";

function ContactSection({ theme }) {
    const [state, handleSubmit] = useForm("mblyybwz");
    const formRef = useRef();

    useEffect(() => {
    if (state.succeeded && formRef.current) {
        formRef.current.reset(); 
    }
    }, [state.succeeded]);

    return (
    <section id="contact" className={`${theme.card} ${theme.shadow} rounded-2xl mx-4 md:mx-16 mb-12 p-8`}>
        <h3 className={`text-2xl font-bold mb-3 ${theme.accent}`}>Get in Touch</h3>
        <p className={theme.text + " mb-4"}>
            I'm open to collaborations, opportunities, and friendly chats! Reach out via the form below or connect with me on LinkedIn.
        </p>

        {/* Success message always above the form */}
        {state.succeeded && (
        <div className="text-green-600 font-semibold mb-4">
            Message sent! I'll reply soon 😊
        </div>
        )}

        <form ref={formRef} onSubmit={handleSubmit} className={`flex flex-col gap-4 max-w-md `}>
            <input id="name" type="text" name="name" placeholder="Your Name" required className="rounded-md p-2 border border-gray-200" />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
            <input id="email" type="email" name="email" placeholder="Your Email" required className="rounded-md p-2 border border-gray-200" />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
            <textarea id="message" name="message" placeholder="Your Message" rows="4" required className="rounded-md p-2 border border-gray-200" />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
            <button type="submit" disabled={state.submitting} className="self-start px-6 py-2 bg-[#7864fa] text-white rounded-md hover:bg-[#4cc9f0] transition">
            {state.submitting ? "Sending..." : "Send"}
            </button>
        </form>
        
        <div className="mt-6 flex gap-4">
            <a href="https://linkedin.com/in/serena-noboudem" target="_blank" className={theme.accent + " underline"} rel="noopener noreferrer">LinkedIn</a>
        </div>
    </section>
    );
}

export default ContactSection;