"use client";

import { useState, useEffect, useRef } from "react";

const PROJECTS = [
  {
    num: "01",
    title: "E-Commerce Platform",
    tech: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Formik",
      "TanStack Query",
      "Yup",
    ],
    description:
      "Full-featured e-commerce application with secure JWT authentication, dynamic routing, mobile-first UI components, and robust form validation pipeline.",
    github: "https://github.com/ThorayaRabea/ecommerce-react-app",
    live: "https://ecommerce-react-app-coral.vercel.app",
  },
  {
    num: "02",
    title: "Social Media App",
    tech: ["Next.js", "React", "Tailwind CSS", "Axios"],
    description:
      "Modern social platform with real-time interactions, dynamic feeds, user authentication, and a clean responsive interface built on Next.js App Router.",
    github: "https://github.com/ThorayaRabea/social-medi",
    live: "https://social-media-nextjs-blond.vercel.app",
  },
  {
    num: "03",
    title: "Weather App",
    tech: ["JavaScript", "OpenWeather API", "CSS3"],
    description:
      "Real-time weather application with live API integration, location-based forecasts, and dynamic UI that adapts to weather conditions.",
    github: "https://github.com/ThorayaRabea/Weather",
    live: "https://weather-gamma-six-85.vercel.app",
  },
  {
    num: "04",
    title: "Games Collection",
    tech: ["JavaScript", "DOM Manipulation", "CSS3"],
    description:
      "Interactive mini-games collection showcasing advanced JavaScript DOM manipulation, game state management, and responsive UI design patterns.",
    github: "https://github.com/ThorayaRabea/Games",
    live: "https://games-two-nu.vercel.app",
  },
];

const SKILLS = [
  {
    label: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "JavaScript ES6+",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Sass",
    ],
  },
  {
    label: "State & Data",
    items: ["Redux Toolkit", "Context API", "TanStack Query", "Axios"],
  },
  {
    label: "UI & Styling",
    items: ["Tailwind CSS", "Material UI", "Bootstrap", "Flowbite"],
  },
  { label: "Tools", items: ["Formik", "Yup", "Git", "GitHub", "Vercel"] },
  {
    label: "Engineering",
    items: ["Data Structures", "Algorithms", "OOP", "CCNA Networking"],
  },
];

const TIMELINE = [
  {
    year: "2017–2022",
    title: "B.Sc. Electronics & Communications",
    org: "Al-Azhar University",
  },
  {
    year: "2023–2024",
    title: "Frontend Development",
    org: "NTI — National Telecommunication Institute",
  },
  {
    year: "2023",
    title: "Computer Science Fundamentals",
    org: "Route Academy",
  },
  {
    year: "2024",
    title: "React Developer Certification",
    org: "Route Academy",
  },
  {
    year: "2024–Now",
    title: "Senior Freelance Frontend Developer",
    org: "Independent",
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function Reveal({ children, delay = 0, y = 30 }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : `translateY(${y}px)`,
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

function TypeWriter({ text, speed = 28 }) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) {
        clearInterval(t);
        setDone(true);
      }
    }, speed);
    return () => clearInterval(t);
  }, [text, speed]);
  return (
    <span>
      {displayed}
      {!done && (
        <span
          style={{ animation: "blink 1s step-end infinite", color: "#c8935a" }}
        >
          |
        </span>
      )}
    </span>
  );
}

export default function Portfolio() {
  const [cursorPos, setCursorPos] = useState({ x: -400, y: -400 });
  const [activeNav, setActiveNav] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);

  useEffect(() => {
    const move = (e) => setCursorPos({ x: e.clientX, y: e.clientY });
    const scroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = ["home", "about", "projects", "skills", "contact"];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveNav(id);
          break;
        }
      }
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("scroll", scroll);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const copyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText("thorayarabea@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const navItems = ["home", "about", "projects", "skills", "contact"];

  return (
    <div
      style={{
        background: "#080810",
        color: "#ddd5c5",
        minHeight: "100vh",
        overflowX: "hidden",
        position: "relative",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@300;400&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: #080810; }
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-track { background: #0d0d18; }
        ::-webkit-scrollbar-thumb { background: #c8935a; border-radius: 2px; }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeIn { from{opacity:0} to{opacity:1} }

        .nav-link {
          font-family:'JetBrains Mono',monospace;
          font-size:11px;letter-spacing:0.25em;text-transform:uppercase;
          color:#4a4440;cursor:pointer;background:none;border:none;
          transition:color 0.3s;position:relative;padding-bottom:2px;
        }
        .nav-link::after {
          content:'';position:absolute;bottom:0;left:0;width:0;height:1px;
          background:#c8935a;transition:width 0.3s;
        }
        .nav-link:hover,.nav-link.active{color:#c8935a;}
        .nav-link:hover::after,.nav-link.active::after{width:100%;}

        .hero-name {
          font-family:'Playfair Display',serif;
          font-size:clamp(64px,10vw,128px);
          font-weight:700;line-height:0.88;letter-spacing:-0.03em;color:#ddd5c5;
        }
        .hero-name em{font-style:italic;color:#c8935a;display:block;}
        .eyebrow{font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:0.35em;text-transform:uppercase;color:#c8935a;}
        .section-num{font-family:'JetBrains Mono',monospace;font-size:11px;color:#1e1e28;letter-spacing:0.2em;margin-bottom:8px;}
        .section-title{font-family:'Playfair Display',serif;font-size:clamp(40px,5vw,72px);font-weight:700;line-height:1;color:#ddd5c5;letter-spacing:-0.02em;}
        .section-title em{font-style:italic;color:#c8935a;}

        .project-card {
          border:1px solid #111120;background:#0b0b16;padding:40px;
          position:relative;overflow:hidden;
          transition:transform 0.4s cubic-bezier(0.23,1,0.32,1),border-color 0.4s,background 0.4s;
        }
        .project-card:hover{transform:translateY(-5px);border-color:#1e1e30;background:#0e0e1c;}
        .accent-line{position:absolute;top:0;left:0;width:0;height:2px;background:linear-gradient(90deg,#c8935a,#e8b37a);transition:width 0.5s cubic-bezier(0.23,1,0.32,1);}
        .project-card:hover .accent-line{width:100%;}
        .proj-num{font-family:'Playfair Display',serif;font-size:80px;font-weight:700;color:#0f0f1c;position:absolute;top:16px;right:24px;line-height:1;user-select:none;transition:color 0.4s;}
        .project-card:hover .proj-num{color:#161626;}
        .proj-title{font-family:'Syne',sans-serif;font-size:22px;font-weight:700;color:#ddd5c5;margin-bottom:14px;letter-spacing:-0.01em;}
        .proj-desc{font-size:14px;line-height:1.75;color:#40403a;margin-bottom:24px;max-width:500px;}
        .tag{display:inline-block;font-family:'JetBrains Mono',monospace;font-size:9px;letter-spacing:0.12em;text-transform:uppercase;color:#c8935a;border:1px solid #1e1810;background:rgba(200,147,90,0.04);padding:4px 10px;margin:3px 3px 3px 0;border-radius:1px;}

        .btn{display:inline-flex;align-items:center;gap:8px;font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;text-decoration:none;padding:11px 22px;border-radius:1px;transition:all 0.3s;cursor:pointer;border:none;}
        .btn-gold{background:#c8935a;color:#080810;font-weight:600;}
        .btn-gold:hover{background:#daa870;transform:translateY(-1px);box-shadow:0 8px 24px rgba(200,147,90,0.22);}
        .btn-ghost{background:transparent;color:#4a4440;border:1px solid #161620;}
        .btn-ghost:hover{color:#ddd5c5;border-color:#2e2e3e;background:rgba(255,255,255,0.02);}

        .skill-pill{font-family:'JetBrains Mono',monospace;font-size:12px;color:#4a4440;border:1px solid #121220;padding:8px 16px;border-radius:100px;transition:all 0.3s;cursor:default;white-space:nowrap;}
        .skill-pill:hover{color:#c8935a;border-color:rgba(200,147,90,0.25);background:rgba(200,147,90,0.05);transform:translateY(-2px);}

        .timeline-row{display:grid;grid-template-columns:110px 1fr;gap:24px;align-items:start;padding:18px 0;border-bottom:1px solid #0d0d18;transition:border-color 0.3s;}
        .timeline-row:hover{border-color:#1a1a28;}
        .timeline-row:last-child{border-bottom:none;}

        .contact-row{display:flex;align-items:center;justify-content:space-between;padding:22px 0;border-bottom:1px solid #0d0d18;transition:all 0.3s;cursor:pointer;text-decoration:none;}
        .contact-row:hover{border-color:rgba(200,147,90,0.2);padding-left:10px;}
        .contact-label{font-family:'JetBrains Mono',monospace;font-size:9px;letter-spacing:0.35em;text-transform:uppercase;color:#c8935a;}
        .contact-val{font-family:'Syne',sans-serif;font-size:16px;color:#4a4440;transition:color 0.3s;margin-top:4px;}
        .contact-row:hover .contact-val{color:#ddd5c5;}

        .stats-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:#0d0d18;border:1px solid #0d0d18;margin-top:64px;}
        .stat-box{background:#080810;padding:32px;text-align:center;}
        .stat-num{font-family:'Playfair Display',serif;font-size:48px;font-weight:700;color:#c8935a;line-height:1;}
        .stat-label{font-family:'JetBrains Mono',monospace;font-size:9px;letter-spacing:0.3em;text-transform:uppercase;color:#1e1e28;margin-top:8px;}

        .noise{position:fixed;inset:0;pointer-events:none;z-index:999;opacity:0.022;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");background-size:180px;}

        .mobile-menu{display:none;position:fixed;inset:0;background:rgba(8,8,16,0.99);z-index:200;flex-direction:column;align-items:center;justify-content:center;gap:40px;}
        .mobile-menu.open{display:flex;}
        .mob-link{font-family:'Playfair Display',serif;font-size:44px;font-weight:700;color:#1e1e28;cursor:pointer;background:none;border:none;transition:color 0.3s;letter-spacing:-0.02em;}
        .mob-link:hover{color:#c8935a;}
        .hamburger{display:none;flex-direction:column;gap:5px;cursor:pointer;background:none;border:none;padding:4px;}
        .hamburger span{width:22px;height:1px;background:#4a4440;display:block;transition:all 0.3s;}

        .two-col{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:start;}

        @media(max-width:900px){
          .two-col{grid-template-columns:1fr;gap:48px;}
          .stats-grid{grid-template-columns:1fr;}
          .hamburger{display:flex;}
          .desktop-nav{display:none!important;}
          .hire-btn{display:none!important;}
          .proj-num{font-size:56px;}
        }
        @media(max-width:600px){
          .hero-name{font-size:52px;}
          .project-card{padding:24px;}
          section{padding-left:24px!important;padding-right:24px!important;}
          nav{padding-left:24px!important;padding-right:24px!important;}
        }
      `}</style>

      <div className="noise" />

      {/* Cursor glow */}
      <div
        style={{
          position: "fixed",
          width: 420,
          height: 420,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(200,147,90,0.055) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 1,
          left: cursorPos.x,
          top: cursorPos.y,
          transform: "translate(-50%,-50%)",
          transition: "left 0.12s, top 0.12s",
        }}
      />

      {/* NAV */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "0 48px",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: scrolled ? "rgba(8,8,16,0.96)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled
            ? "1px solid #0d0d18"
            : "1px solid transparent",
          transition: "all 0.4s",
        }}
      >
        <span
          style={{
            fontFamily: "'Playfair Display',serif",
            fontSize: "20px",
            fontWeight: 700,
            color: "#ddd5c5",
            letterSpacing: "-0.02em",
          }}
        >
          T<em style={{ fontStyle: "italic", color: "#c8935a" }}>R</em>
        </span>
        <div className="desktop-nav" style={{ display: "flex", gap: "36px" }}>
          {navItems.map((n) => (
            <button
              key={n}
              className={`nav-link ${activeNav === n ? "active" : ""}`}
              onClick={() => scrollTo(n)}
            >
              {n}
            </button>
          ))}
        </div>
        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <a
            className="btn btn-gold hire-btn"
            style={{ padding: "8px 18px", fontSize: "9px" }}
            href="mailto:thorayarabea@gmail.com"
          >
            Hire Me
          </a>
          <button className="hamburger" onClick={() => setMenuOpen(true)}>
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <button
          style={{
            position: "absolute",
            top: 20,
            right: 24,
            background: "none",
            border: "none",
            color: "#4a4440",
            fontSize: "28px",
            cursor: "pointer",
          }}
          onClick={() => setMenuOpen(false)}
        >
          ✕
        </button>
        {navItems.map((n) => (
          <button key={n} className="mob-link" onClick={() => scrollTo(n)}>
            {n}
          </button>
        ))}
      </div>

      {/* ─── HERO ─── */}
      <section
        id="home"
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "100px 48px 60px",
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative",
        }}
      >
        {/* decorative bg text */}
        <div
          style={{
            position: "absolute",
            bottom: "0",
            right: "-2%",
            fontFamily: "'Playfair Display',serif",
            fontSize: "clamp(80px,14vw,180px)",
            fontWeight: 700,
            color: "#0b0b14",
            lineHeight: 1,
            userSelect: "none",
            pointerEvents: "none",
            letterSpacing: "-0.04em",
          }}
        >
          TR
        </div>

        <div style={{ opacity: 0, animation: "fadeUp 0.8s 0.1s forwards" }}>
          <p className="eyebrow" style={{ marginBottom: "28px" }}>
            ✦ &nbsp;Senior Frontend Engineer — Cairo, Egypt
          </p>
        </div>
        <h1
          className="hero-name"
          style={{ opacity: 0, animation: "fadeUp 0.8s 0.25s forwards" }}
        >
          Thoraya
          <em>Rabea</em>
        </h1>
        <div
          style={{
            marginTop: "36px",
            maxWidth: "560px",
            opacity: 0,
            animation: "fadeUp 0.8s 0.4s forwards",
          }}
        >
          <p style={{ fontSize: "16px", lineHeight: "1.9", color: "#38352f" }}>
            <TypeWriter text="Results-oriented developer building high-performance React & Next.js applications. Electronics Engineer bridging analytical precision with intuitive user experience." />
          </p>
        </div>
        <div
          style={{
            marginTop: "44px",
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
            opacity: 0,
            animation: "fadeUp 0.8s 0.55s forwards",
          }}
        >
          <button className="btn btn-gold" onClick={() => scrollTo("projects")}>
            View Projects →
          </button>
          <a
            className="btn btn-ghost"
            href="https://github.com/ThorayaRabea"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="btn btn-ghost"
            href="https://www.linkedin.com/in/thoraya-rabea"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
        <div
          className="stats-grid"
          style={{ opacity: 0, animation: "fadeUp 0.8s 0.7s forwards" }}
        >
          {[
            ["4+", "Projects Shipped"],
            ["2+", "Years Experience"],
            ["10+", "Technologies"],
          ].map(([n, l]) => (
            <div key={l} className="stat-box">
              <div className="stat-num">{n}</div>
              <div className="stat-label">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section
        id="about"
        style={{ padding: "100px 48px", maxWidth: "1200px", margin: "0 auto" }}
      >
        <Reveal>
          <p className="section-num">— 00</p>
          <h2 className="section-title" style={{ marginBottom: "60px" }}>
            About <em>Me</em>
          </h2>
        </Reveal>
        <div className="two-col">
          <Reveal delay={0.1}>
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.9",
                color: "#38352f",
                marginBottom: "24px",
              }}
            >
              I'm a Senior Frontend Engineer and Electronics & Communications
              graduate from Al-Azhar University. I combine engineering
              problem-solving discipline with modern web technologies to build
              products that are both powerful and beautiful.
            </p>
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.9",
                color: "#38352f",
                marginBottom: "40px",
              }}
            >
              Specialized in React.js and Next.js ecosystems, I focus on
              performance, clean architecture, and intuitive UX. Currently
              available for freelance projects and full-time opportunities.
            </p>
            <button
              className="btn btn-gold"
              onClick={() => scrollTo("contact")}
            >
              Get In Touch
            </button>
          </Reveal>
          <Reveal delay={0.2}>
            <p
              style={{
                fontFamily: "'JetBrains Mono',monospace",
                fontSize: "10px",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#c8935a",
                marginBottom: "20px",
              }}
            >
              Education & Experience
            </p>
            {TIMELINE.map((t, i) => (
              <div key={i} className="timeline-row">
                <span
                  style={{
                    fontFamily: "'JetBrains Mono',monospace",
                    fontSize: "10px",
                    color: "#1e1e28",
                    letterSpacing: "0.05em",
                    paddingTop: "3px",
                  }}
                >
                  {t.year}
                </span>
                <div>
                  <p
                    style={{
                      fontFamily: "'Syne',sans-serif",
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#7a7060",
                      marginBottom: "2px",
                    }}
                  >
                    {t.title}
                  </p>
                  <p
                    style={{
                      fontFamily: "'JetBrains Mono',monospace",
                      fontSize: "10px",
                      color: "#1e1e28",
                    }}
                  >
                    {t.org}
                  </p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ─── PROJECTS ─── */}
      <section
        id="projects"
        style={{ padding: "100px 48px", maxWidth: "1200px", margin: "0 auto" }}
      >
        <Reveal>
          <p className="section-num">— 01</p>
          <h2 className="section-title" style={{ marginBottom: "60px" }}>
            Selected <em>Work</em>
          </h2>
        </Reveal>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {PROJECTS.map((p, i) => (
            <Reveal key={p.num} delay={i * 0.08}>
              <div
                className="project-card"
                onMouseEnter={() => setHoveredProject(p.num)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="accent-line" />
                <div className="proj-num">{p.num}</div>
                <h3 className="proj-title">{p.title}</h3>
                <p className="proj-desc">{p.description}</p>
                <div style={{ marginBottom: "28px" }}>
                  {p.tech.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
                <div style={{ display: "flex", gap: "12px" }}>
                  <a
                    className="btn btn-gold"
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    style={{ fontSize: "9px", padding: "9px 18px" }}
                  >
                    Live Demo ↗
                  </a>
                  <a
                    className="btn btn-ghost"
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    style={{ fontSize: "9px", padding: "9px 18px" }}
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ─── SKILLS ─── */}
      <section
        id="skills"
        style={{ padding: "100px 48px", maxWidth: "1200px", margin: "0 auto" }}
      >
        <Reveal>
          <p className="section-num">— 02</p>
          <h2 className="section-title" style={{ marginBottom: "60px" }}>
            Tech <em>Stack</em>
          </h2>
        </Reveal>
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {SKILLS.map(({ label, items }, i) => (
            <Reveal key={label} delay={i * 0.08}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "160px 1fr",
                  gap: "24px",
                  alignItems: "center",
                  padding: "32px 0",
                  borderBottom: "1px solid #0d0d18",
                }}
              >
                <p
                  style={{
                    fontFamily: "'JetBrains Mono',monospace",
                    fontSize: "10px",
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    color: "#1e1e28",
                  }}
                >
                  {label}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                  {items.map((s) => (
                    <span key={s} className="skill-pill">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section
        id="contact"
        style={{
          padding: "100px 48px 80px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <Reveal>
          <p className="section-num">— 03</p>
          <h2 className="section-title" style={{ marginBottom: "16px" }}>
            Let's <em>Connect</em>
          </h2>
          <p
            style={{
              color: "#38352f",
              fontSize: "16px",
              maxWidth: "460px",
              lineHeight: "1.85",
              marginBottom: "56px",
            }}
          >
            Available for freelance projects, full-time roles, and
            collaborations. Let's build something great together.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div>
            {[
              {
                label: "Email",
                val: "thorayarabea@gmail.com",
                href: "mailto:thorayarabea@gmail.com",
                action: copyEmail,
                extra: copiedEmail ? "✓ Copied!" : "Copy",
              },
              {
                label: "LinkedIn",
                val: "linkedin.com/in/thoraya-rabea",
                href: "https://www.linkedin.com/in/thoraya-rabea",
                extra: "↗",
              },
              {
                label: "GitHub",
                val: "github.com/ThorayaRabea",
                href: "https://github.com/ThorayaRabea",
                extra: "↗",
              },
              {
                label: "Phone",
                val: "01152394747",
                href: "tel:01152394747",
                extra: "Call",
              },
            ].map(({ label, val, href, action, extra }) => (
              <a
                key={label}
                className="contact-row"
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                onClick={action}
              >
                <div>
                  <p className="contact-label">{label}</p>
                  <p className="contact-val">{val}</p>
                </div>
                <span
                  style={{
                    fontFamily: "'JetBrains Mono',monospace",
                    fontSize: "10px",
                    color: "#1e1e28",
                    letterSpacing: "0.2em",
                  }}
                >
                  {extra}
                </span>
              </a>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid #0d0d18",
          padding: "28px 48px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        <span
          style={{
            fontFamily: "'Playfair Display',serif",
            fontSize: "15px",
            color: "#1a1a24",
          }}
        >
          Thoraya Rabea © 2025
        </span>
        <span
          style={{
            fontFamily: "'JetBrains Mono',monospace",
            fontSize: "9px",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#141420",
          }}
        >
          Built with Next.js & React
        </span>
      </footer>
    </div>
  );
}
