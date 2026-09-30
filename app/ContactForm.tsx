"use client";
import { useState } from "react";
import { profile } from "@/lib/data";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Portfolio message from ${f.get("name")}`);
    const body = encodeURIComponent(`${f.get("message")}\n\nReply to: ${f.get("contact")}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }
  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="row">
        <label>Your name<input name="name" required placeholder="John Doe" /></label>
        <label>Email or phone<input name="contact" required placeholder="john@example.com" /></label>
      </div>
      <label>Your message<textarea name="message" required rows={5} placeholder="Hi! I have a project idea..." /></label>
      <button className="btn primary" type="submit">Send message</button>
      {sent && <p className="muted">Your mail app should open with the message ready to send.</p>}
    </form>
  );
}
