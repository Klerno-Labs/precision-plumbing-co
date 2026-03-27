"use client";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData._gotcha) return; // Bot detected
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", { method: "POST", body: JSON.stringify(formData) });
      if (res.ok) setIsSuccess(true);
      else setError("Something went wrong. Please try again.");
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
      <label htmlFor="name">Name</label>
      <input type="text" id="name" required onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
      <label htmlFor="email">Email</label>
      <input type="email" id="email" required onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
      <label htmlFor="phone">Phone</label>
      <input type="tel" id="phone" required onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
      <label htmlFor="message">Message</label>
      <textarea id="message" required onChange={(e) => setFormData({ ...formData, message: e.target.value })}></textarea>
      <button type="submit" disabled={isSubmitting}>Send</button>
      {isSuccess && <p>Thank you! We'll be in touch within 24 hours.</p>}
      {error && <p>{error}</p>}
    </form>
  );
};

export default ContactForm;