import React, { useState } from "react";

const ACCENT = "#21AE6C";
const ACCENT_BG = "#21AE6C/18"; 
export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState(null);

  function handleChange(e) {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus({ type: "error", msg: "Please fill name, email and message." });
      return;
    }

  
    const subject = encodeURIComponent(form.subject || "Contact from portfolio");
        const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
        window.location.href = `mailto:tinmarucut@gmail.com?subject=${subject}&body=${body}`;
        setStatus({ type: "success", msg: "Opening mail client..." });
    }

  return (
    <main className="min-h-screen px-6 py-12 max-w-6xl mx-auto">

      <header className="text-center mb-10">
        <h1 className="text-3xl font-bold text-white">Contact Me</h1>
        <p className="text-white/80 mt-2 max-w-[700px] mx-auto italic">
          I’m available for freelance work and full-time opportunities. Send a message and I’ll
          respond within a few business days.
        </p>
      </header>


      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <aside className="black-bg rounded-2xl p-6 shadow-md flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <img
              src="/public/aboutimg.png"
              alt="profile"
              className="w-16 h-16 rounded-full object-cover shrink-0"
            />
            <div>
              <p className="text-white font-semibold">Mr. Justin</p>
              <p className="text-sm text-white/70">Fullstack Developer</p>
            </div>
          </div>

          <div className="text-sm text-white/80 leading-relaxed">
            <p>
              Prefer email? Use the form or email me directly at
              <br />
              <a
                className="underline ml-0"
                href="mailto:tinmarucut@gmail.com"
                style={{ color: ACCENT }}
              >
                tinmarucut@gmail.com
              </a>
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <ContactItem
              icon={PhoneIcon}
              label="Phone"
              value="(+63) 976 1457 032"
              accent={ACCENT}
            />

            <ContactItem
              icon={MapIcon}
              label="Location"
              value="Philippines"
              accent={ACCENT}
            />

            <div className="flex gap-3 mt-2">
              <SocialIcon href="https://github.com/" ariaLabel="GitHub" accent={ACCENT}>
                <GitHubIcon />
              </SocialIcon>
              <SocialIcon href="https://www.linkedin.com/" ariaLabel="LinkedIn" accent={ACCENT}>
                <LinkedInIcon />
              </SocialIcon>
              <SocialIcon href="https://twitter.com/" ariaLabel="Twitter" accent={ACCENT}>
                <TwitterIcon />
              </SocialIcon>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-xs text-white/60">Preferred contact time: Weekdays, 9am — 5pm</p>
          </div>
        </aside>

        {/* Right - form */}
        <section className="bg-[rgba(255,255,255,0.02)] rounded-2xl p-6 shadow-sm">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="flex flex-col">
                <span className="text-xs text-white/70 mb-2">Name</span>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="px-3 py-2 rounded-md bg-transparent border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2"
                  placeholder="Your name"
                />
              </label>

              <label className="flex flex-col">
                <span className="text-xs text-white/70 mb-2">Email</span>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  className="px-3 py-2 rounded-md bg-transparent border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2"
                  placeholder="you@company.com"
                />
              </label>
            </div>

            <label className="flex flex-col">
              <span className="text-xs text-white/70 mb-2">Subject</span>
              <input
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className="px-3 py-2 rounded-md bg-transparent border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2"
                placeholder="Brief subject"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-xs text-white/70 mb-2">Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={6}
                className="px-3 py-2 rounded-md bg-transparent border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 resize-none"
                placeholder="Tell me about your project or opportunity"
              />
            </label>

            <div className="flex items-center gap-3">
              <button
                type="submit"
                className="px-5 py-2 rounded-full font-semibold"
                style={{ backgroundColor: ACCENT, color: "#07160F" }}
              >
                Send Message
              </button>

              <button
                type="button"
                onClick={() => {
                  setForm({ name: "", email: "", subject: "", message: "" });
                  setStatus(null);
                }}
                className="px-4 py-2 rounded-full border"
                style={{ borderColor: ACCENT, color: "#fff" }}
              >
                Reset
              </button>

              <div className="ml-auto text-sm">
                {status && (
                  <span className={`text-${status.type === "error" ? "red" : "green"}-400`}>
                    {status.msg}
                  </span>
                )}
              </div>
            </div>

            <p className="text-xs text-white/60">Or email me directly at <a href="mailto:tinmarucut@gmail.com" style={{ color: ACCENT }}>tinmarucut@gmail.com</a></p>
          </form>
        </section>
      </div>

      {/* Footer */}
      <footer className="mt-12 border-t border-white/6 pt-6 text-center">
        <p className="text-sm text-white/60">© {new Date().getFullYear()} Mr. Justin. Built with care.</p>
      </footer>
    </main>
  );
}


function ContactItem({ icon: Icon, label, value, accent }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: ACCENT_BG }}>
        <Icon style={{ width: 18, height: 18, color: accent }} />
      </div>
      <div>
        <p className="text-xs text-white/70">{label}</p>
        <p className="text-sm text-white font-semibold">{value}</p>
      </div>
    </div>
  );
}

function SocialIcon({ href, children, ariaLabel, accent }) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      target="_blank"
      rel="noreferrer"
      className="w-9 h-9 rounded-full flex items-center justify-center"
      style={{ backgroundColor: ACCENT_BG, color: accent }}
    >
      {children}
    </a>
  );
}

function PhoneIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M21 16.5v3a2.5 2.5 0 0 1-2.5 2.5A19.5 19.5 0 0 1 3 5.5 2.5 2.5 0 0 1 5.5 3h3A1.5 1.5 0 0 1 10 4.5V7a1 1 0 0 1-.8.98 12 12 0 0 0 6.52 6.52A1 1 0 0 1 17 15v2.5c0 .28.22.5.5.5H21z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function MapIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M20 6l-6-2-6 2-6-2v13l6 2 6-2 6 2V6z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <img src="/public/Github.png" alt="github" width={16} height={16}/>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden>
      <path d="M4.98 3.5a2.5 2.5 0 11.02 0zM3 8.5h4v12H3zM9 8.5h3.78v1.64h.05c.53-.99 1.84-2.03 3.79-2.03 4.05 0 4.8 2.67 4.8 6.14V20.5h-4V15.5c0-1.16-.02-2.65-1.62-2.65-1.62 0-1.87 1.27-1.87 2.57V20.5H9z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden>
      <path d="M23 4.5a9.2 9.2 0 01-2.6.72A4.5 4.5 0 0022.4 3a9 9 0 01-2.86 1.1A4.5 4.5 0 0016.5 3c-2.5 0-4.5 2-4.5 4.5 0 .35.04.7.12 1.03A12.8 12.8 0 013 4.9a4.5 4.5 0 001.4 6 4.4 4.4 0 01-2-.55v.06c0 2.2 1.6 4 3.7 4.4a4.5 4.5 0 01-2 .08 4.5 4.5 0 004.2 3.13A9 9 0 013 19.54 12.7 12.7 0 009 21c7.54 0 11.67-6.28 11.67-11.72 0-.18 0-.36-.02-.54A8.3 8.3 0 0023 4.5z" />
    </svg>
  );
}
