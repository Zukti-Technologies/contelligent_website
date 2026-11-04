"use client";
import { useState } from "react";

type FormText = {
  name: string; company: string; email: string; interest: string; interests: string[]; message: string;
  submit: string; note: string; sentNote: string; subjectPrefix: string;
};

/** Demo request form. Opens the visitor's email app with the details filled in (no server needed). */
export default function ContactForm({ to, text }: { to: string; text: FormText }) {
  const [note, setNote] = useState(text.note);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const g = (k: string) => String(f.get(k) ?? "");
    const body = `Name: ${g("name")}\nCompany: ${g("company")}\nEmail: ${g("email")}\nInterested in: ${g("interest")}\n\n${g("msg")}`;
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(text.subjectPrefix + g("interest"))}&body=${encodeURIComponent(body)}`;
    setNote(text.sentNote);
  };
  return (
    <form className="contact" onSubmit={onSubmit}>
      <label>{text.name}<input name="name" required autoComplete="name" /></label>
      <label>{text.company}<input name="company" autoComplete="organization" /></label>
      <label>{text.email}<input name="email" type="email" required autoComplete="email" /></label>
      <label>{text.interest}<select name="interest">{text.interests.map((o) => <option key={o}>{o}</option>)}</select></label>
      <label>{text.message}<textarea name="msg" /></label>
      <button className="btn btn-solid" type="submit">{text.submit}</button>
      <p className="small" style={{ textAlign: "left", marginTop: 0 }} role="status">{note}</p>
    </form>
  );
}
