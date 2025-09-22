"use client";
// Next
import { useState } from "react";
import Link from "next/link";

// Icons
import { Checkmark, ArrowUpRight } from '@carbon/react/icons';

export default function ContactForm() {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "43a999f2-ecbe-4116-b748-6416a2e176e5");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    const [checked, isChecked] = useState(false);

    return (

        <>

            <form onSubmit={onSubmit} className="form contactForm">

                <fieldset className="formItem">

                    <input type="text" name="name" placeholder="Name*" autoComplete="name" required />

                </fieldset>

                <fieldset className="formItem">

                    <input type="email" name="email" placeholder="Email*" autoComplete="email" required />

                </fieldset>

                <fieldset className="formItem dropdown">

                    <select name="service" required>
                        <option value="">Enquiry Type</option>
                        <option value="consulting">Products</option>
                        <option value="development">Dashboard</option>
                        <option value="design">Integration</option>
                        <option value="design">Other</option>
                    </select>

                </fieldset>

                <fieldset className="formItem">

                    <input type="text" name="company" placeholder="Company Name" autoComplete="organization" />

                </fieldset>

                <fieldset className="formItem fullWidth">

                    <textarea name="message" rows="6" required placeholder="Type your message here..."></textarea>

                </fieldset>

                <fieldset className="formItem consent fullWidth" onClick={() => isChecked(!checked)}>

                    <div className="consentInput">

                        <input type="checkbox" name="consent" required />

                        <span style={{ display: checked ? 'block' : 'none' }}><Checkmark size={14} color="var(--primary)" /></span>

                    </div>

                    <label htmlFor="consent">I have read and agree to your <Link href="/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary)", textDecoration: "underline" }}>privacy policy</Link>.</label>

                </fieldset>

                <div className="formFooter">

                    <button className="btn primary" type="submit">

                        <span>Send message</span>

                        <div className="btnIcon">

                            <ArrowUpRight size={16} />

                        </div>

                    </button>

                </div>

            </form>

            <span className="error">{result}</span>

            <div className="formMessage container centered" aria-live="polite" aria-atomic="true" style={{ display: result === "Form Submitted Successfully" ? 'flex' : 'none' }}>

                <div className="heading">

                    <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"> <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" /> <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" /></svg>

                    <h3>Message Sent Successfully</h3>

                    <p>Thank you for reaching out. We will get back to you shortly.</p>

                </div>

            </div>

        </>

    );

}