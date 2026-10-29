"use client";

import { useState } from "react";

type Labels = { name: string; email: string; company: string; message: string };

/**
 * Static-site contact form: no server needed. On submit it validates the fields and opens the
 * visitor's email app with a pre-filled message to the company inbox.
 * To switch to a form service later (Formspree, Web3Forms), replace handleSubmit with a fetch() POST.
 */
export default function ContactForm({ to, labels, submit, note, subjectPrefix }: { to: string; labels: Labels; submit: string; note?: string; subjectPrefix: string }) {
  const [error, setError] = useState<string | null>(null);
  const [opened, setOpened] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") || "").trim();
    const email = String(f.get("email") || "").trim();
    const company = String(f.get("company") || "").trim();
    const message = String(f.get("message") || "").trim();
    if (!name || !email || !message) { setError(`Please fill in ${labels.name}, ${labels.email} and ${labels.message}.`); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setError("Please enter a valid email address."); return; }
    setError(null);
    const subject = `${subjectPrefix}: ${name}${company ? `, ${company}` : ""}`;
    const body = `${message}\n\n--\n${name}\n${email}${company ? `\n${company}` : ""}`;
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  }

  const input = "mt-1.5 block w-full rounded-lg border border-ink-100 bg-white px-3.5 py-2.5 text-ink-800 placeholder:text-ink-300 focus:border-mint-500 focus:outline-none focus:ring-2 focus:ring-mint-500/30";
  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-ink-700">{labels.name} *
          <input name="name" autoComplete="given-name" required className={input} />
        </label>
        <label className="block text-sm font-medium text-ink-700">{labels.email} *
          <input name="email" type="email" autoComplete="email" required className={input} />
        </label>
      </div>
      <label className="block text-sm font-medium text-ink-700">{labels.company}
        <input name="company" autoComplete="organization" className={input} />
      </label>
      <label className="block text-sm font-medium text-ink-700">{labels.message} *
        <textarea name="message" rows={5} required className={input} />
      </label>
      {error && <p role="alert" className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p>}
      {opened && !error && (
        <p role="status" className="rounded-lg bg-mint-50 px-3 py-2 text-sm text-ink-700">
          Your email app should open now. If it didn&apos;t, write to us at <a className="font-semibold text-mint-700" href={`mailto:${to}`}>{to}</a>.
        </p>
      )}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" className="btn-dark">{submit}</button>
        {note && <p className="text-xs text-ink-600 sm:max-w-xs sm:text-right">{note}</p>}
      </div>
    </form>
  );
}
