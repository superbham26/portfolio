const DATA = {
    profile: {
        name: "Shubham Jain",
        initials: "SJ",
        email: "shubhamajay2@gmail.com",
        linkedin: "https://www.linkedin.com/in/shubham-jain26",
        resume: "resume.pdf",
        role: "Forward Deployed Engineer",
        tagline: "Agentic AI & prescriptive ML for manufacturing.",
        pitch: "I embed with plant operators, scope the problem on the ground, and ship what they end up using every day: supervisor-agent systems with RAG and memory, multi-horizon forecasting with optimization, and conversational data apps running inside a legacy alumina plant."
    },
    stats: [
        { pre: "+", num: 400, suf: "", label: "hrs/year of first-time-right production", g: "g1" },
        { pre: "", num: 40, suf: "%", label: "less manual processing time", g: "g2" },
        { pre: "+", num: 18, suf: "%", label: "detection accuracy", g: "g3" },
        { pre: "₹", num: 5, suf: "M+", label: "business value generated", g: "g4" }
    ],
    projects: [
        {
            title: "Supervisor-Agent AI System", kicker: "Agentic AI", featured: true, g: "g1",
            summary: "One agent that routes every plant question to the right tool, and remembers the answer.",
            impact: { pre: "+", num: 400, suf: "", label: "hours/year of first-time-right production" },
            description: "Supervisor-agent architecture with intent classification and tool routing across RAG (Databricks Vector Search), Genie Spaces, and model endpoints, backed by session and long-term memory on Lakebase. Replaced manual analyst intervention in plant decision workflows.",
            plain: "A middle manager for AI agents, except it actually delegates well. Analysts got their afternoons back.",
            tags: ["RAG", "Vector Search", "Genie Spaces", "Lakebase memory"]
        },
        {
            title: "Calcination Digital Twin", kicker: "Simulation & optimization", featured: true, g: "g2",
            summary: "A virtual calciner that tries every trade-off first, so the real plant doesn't have to.",
            impact: { text: "Daily", label: "used by plant operators" },
            description: "Analytics layer of a calcination digital twin, built end to end: high-frequency sensor data fused with ML models for simulation-based optimization across production, quality, and energy trade-offs.",
            plain: "Moved into an alumina plant for weeks, learned to speak fluent operator, then built the plant a helpful twin.",
            tags: ["Sensor fusion", "ML models", "Simulation", "Multi-objective"]
        },
        {
            title: "AI Claims Engine", kicker: "Fraud detection", featured: true, g: "g3",
            summary: "Flags suspicious insurance claims before an investigator has to dig.",
            impact: { pre: "", num: 40, suf: "%", label: "less manual processing · 18% accuracy uplift" },
            description: "LLM-SLM-XGBoost hybrid for insurance claims fraud detection, designed, trained, and deployed end to end. Language models handle document understanding and feed an XGBoost fraud classifier.",
            plain: "Taught AI to read insurance claims like a skeptical detective.",
            tags: ["Fraud detection", "Document understanding", "End-to-end deployment"]
        },
        {
            title: "Disease Hotspot Forecasting", kicker: "Spatiotemporal ML", featured: true, g: "g4",
            summary: "Multi-week risk forecasts that flag outbreaks before they happen.",
            impact: { pre: "₹", num: 5, suf: "M+", label: "business value generated" },
            description: "Spatiotemporal ML model for early disease hotspot detection, built on geospatial and time-series feature engineering, delivering multi-week risk forecasts for proactive underwriting.",
            plain: "A crystal ball for disease outbreaks. No magic involved, just spatiotemporal ML.",
            tags: ["Geospatial", "Time series", "Feature engineering"]
        },
        {
            title: "Conversational Plant Data App", kicker: "Databricks App", g: "g2",
            summary: "Operators ask in plain English; leadership gets its own view.",
            impact: { text: "Self-serve", label: "process data, operator to leadership" },
            description: "Databricks App (Streamlit/React) for conversational querying of process data, with role-based operator and leadership views, a KPI hierarchy (FTR, throughput), optimization prescriptions, alerting, and data-quality pages.",
            plain: "Plant data, but you can just talk to it. Nobody has to pretend they understand the other's dashboard anymore.",
            tags: ["Databricks Apps", "Streamlit", "React", "KPI hierarchy"]
        },
        {
            title: "SSA Forecast & Prescribe Engine", kicker: "Forecasting & optimization", g: "g1",
            summary: "Forecasts, evolutionary search and causal ML, with a prescription-vs-actual scorecard.",
            impact: { text: "↑ FTR", label: "raised first-time-right rates" },
            description: "Multi-horizon forecasting and prescriptive optimization for Specific Surface Area (SSA) in calcination: LightGBM forecasts paired with GA/PSO search and DoubleML causal estimates, with prescription-vs-actual tracking.",
            plain: "Forecasting, plus a swarm of particles, plus a little Darwinian evolution, with causal ML as the designated adult.",
            tags: ["LightGBM", "GA / PSO", "DoubleML"]
        },
        {
            title: "NL2SQL Agent", kicker: "Agentic AI", g: "g4",
            summary: "Business teams query data conversationally, without SQL.",
            impact: { text: "1st", label: "GDNA Hackathon 2026 winner" },
            description: "Natural-language-to-SQL agent that lets business teams query data conversationally, without writing SQL or waiting on an analyst.",
            plain: "SQL is a love language most business teams don't speak. So I built an agent that translates.",
            tags: ["LLM agent", "SQL"]
        },
        {
            title: "Quant Trading Platform", kicker: "Quant research", g: "g3",
            summary: "Momentum strategies across 1,100+ equities.",
            impact: { pre: "+", num: 15, suf: "%", label: "vs NIFTY50 · 25% return improvement" },
            description: "Proprietary momentum-based trading algorithms with a systematic backtesting framework, plus portfolio optimization and risk management across a large equity universe.",
            plain: "Math beats gut feeling every time.",
            tags: ["Momentum", "Backtesting", "Portfolio optimization"]
        }
    ],
    experience: [
        {
            company: "Aditya Birla Management Corporation", unit: "Group Data & Analytics",
            dates: "Jan 2025 – Present", place: "Bengaluru",
            path: ["Trainee", "Data Scientist", "FDE"],
            roles: [
                { title: "Forward Deployed Engineer", dates: "Jan 2026 – Present", points: [
                    "Embedded with plant operators for weeks to scope the problem on the ground, then led the analytics layer of a calcination digital twin end to end across production, quality, and energy trade-offs; operators now use it daily.",
                    "Architected and deployed a supervisor-agent system with intent classification and tool routing across RAG, Genie Spaces, and model endpoints, with session and long-term memory on Lakebase; adds 400 hours/year of first-time-right production.",
                    "Shipped a Databricks App for conversational querying of process data with role-based views, a KPI hierarchy, optimization prescriptions, alerting, and data-quality pages.",
                    "Sole owner of the stakeholder chain from plant operator to CEO, including adoption after go-live."
                ] },
                { title: "Management Trainee, Data Scientist", dates: "Jul 2025 – Jan 2026", points: [
                    "Built a multi-horizon forecasting and prescriptive optimization engine for SSA in calcination (LightGBM + GA/PSO + DoubleML) with prescription-vs-actual tracking.",
                    "Shipped an LLM-SLM-XGBoost hybrid for claims fraud detection: 18% accuracy uplift, 40% less manual processing time.",
                    "Built a spatiotemporal disease-hotspot model delivering multi-week risk forecasts worth ₹5M+ in business value."
                ] },
                { title: "Data & Analytics Trainee", dates: "Jan 2025 – Jun 2025", points: [
                    "Fine-tuned a small language model on plant terminology for low-latency, domain-specific operations queries.",
                    "Built an OPC UA connector streaming live sensor data from 4+ lines into PostgreSQL via Databricks/PySpark, with CI on Azure DevOps."
                ] }
            ]
        },
        {
            company: "Fractal Analytics", dates: "May 2024 – Jul 2024", place: "Bengaluru",
            roles: [{ title: "Business Analyst Intern", dates: "", points: [
                "Translated B2B campaign data into predictive and clustering models with client stakeholders, driving a 10% lift in lead conversion for a high-value cohort.",
                "Designed and ran A/B tests to isolate high-impact customer segments across multiple touchpoints."
            ] }]
        },
        {
            company: "Subhkam Ventures", dates: "Jun 2023 – Jul 2023", place: "Mumbai",
            roles: [{ title: "Quant Analyst Intern", dates: "", points: [
                "Formulated quantitative strategies using moving averages and momentum indicators, achieving 15% outperformance against NIFTY50.",
                "Deployed optimization models that raised returns by 25% on a diversified portfolio of 1,100+ cash stocks."
            ] }]
        }
    ],
    skills: [
        { group: "GenAI & Agentic AI", items: ["Supervisor/Multi-Agent Orchestration", "Intent Classification & Tool Routing", "RAG", "Databricks Genie Spaces", "Session/Long-Term Memory (Lakebase)", "SLM Fine-Tuning", "Prompt Engineering", "LLM Evaluation", "LangChain", "LangGraph", "Semantic Search"] },
        { group: "Machine Learning", items: ["Multi-Horizon Forecasting", "LightGBM", "XGBoost", "Spatiotemporal Modeling", "Feature Engineering", "Causal Inference (DoubleML)", "SHAP", "A/B Testing", "MLflow", "Champion/Challenger"] },
        { group: "Optimization & Simulation", items: ["Genetic Algorithms", "Particle Swarm Optimization", "Prescriptive Analytics", "Digital Twins", "Constraint Optimization"] },
        { group: "Languages & Data", items: ["Python", "Pandas", "NumPy", "Scikit-learn", "PyTorch", "SQL", "PySpark", "PostgreSQL", "OPC UA"] },
        { group: "Platforms & Delivery", items: ["Databricks", "Databricks Apps (Streamlit/React)", "Azure DevOps", "Git", "AWS", "Power BI"] }
    ],
    topSkills: ["Multi-Agent Orchestration", "RAG", "LangGraph", "LightGBM", "XGBoost", "DoubleML", "GA / PSO", "Digital Twins", "Python", "PySpark", "Databricks", "Azure DevOps"],
    education: {
        degree: "B.Tech, Data Science, Economics & Business",
        school: "Plaksha University", dates: "2021 – 2025", cgpa: "9.0",
        coursework: "Econometrics, Machine Learning, Advanced Statistics, Behavioral Economics, Game Theory, Marketing Analytics"
    },
    certifications: ["Databricks GenAI Engineer Associate (2026)", "Databricks ML Associate", "GDNA Hackathon 2026 Winner", "VMart Scholarship — Top 1%", "Toastmasters Speechcrafter (2025)"]
};

const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
const $ = id => document.getElementById(id);
const P = DATA.profile, X = DATA.projects;

/* Visible digits animate; screen readers get the final value. */
function figure(f, cls) {
    if (f.text) return `<div class="fig ${cls}">${f.text}</div>`;
    const final = `${f.pre}${f.num}${f.suf}`;
    return `<div class="fig ${cls}"><span aria-hidden="true" data-count="${f.num}" data-pre="${f.pre}" data-suf="${f.suf}">${final}</span><span class="sr-only">${final}</span></div>`;
}
const opener = (key, label) => `<button class="tile-open" type="button" data-open="${key}" aria-label="${label}" aria-haspopup="dialog">+</button>`;

function projectTile(i) {
    const x = X[i];
    return `
        <article class="tile openable reveal">
            <p class="kicker">${x.kicker}</p>
            <h3>${x.title}</h3>
            <div class="grow">${figure(x.impact, x.g)}<p class="fig-label">${x.impact.label}</p></div>
            ${opener(`project:${i}`, `Open details: ${x.title}`)}
        </article>`;
}

/* ---------- Render: story intro ---------- */
$("brand").textContent = P.initials;
$("heroEyebrow").textContent = `${P.name} · ${P.role}`;
$("heroTagline").textContent = P.tagline;
$("heroPitch").textContent = P.pitch;
$("cvLink").href = P.resume;
$("copyright").textContent = `© ${new Date().getFullYear()} ${P.name}`;

$("stats").innerHTML = DATA.stats.map(s => `
    <div class="stat reveal">${figure(s, s.g)}<p>${s.label}</p></div>`).join("");

$("bands").innerHTML = X.map((x, i) => x.featured ? `
    <article class="band ${i % 2 ? "alt" : "on-dark"}">
        <div class="wrap">
            <p class="kicker reveal">${x.kicker}</p>
            <h3 class="reveal">${x.title}</h3>
            <p class="summary reveal">${x.summary}</p>
            <div class="reveal">${figure(x.impact, x.g)}<p class="fig-label">${x.impact.label}</p></div>
            <div class="tags reveal">${x.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
            <button class="link" type="button" data-open="project:${i}" aria-haspopup="dialog">Learn more ›</button>
        </div>
    </article>` : "").join("");

/* ---------- Render: bento body ---------- */
const ed = DATA.education;
const rest = X.map((x, i) => i).filter(i => !X[i].featured);
$("bento").innerHTML = `
    ${projectTile(rest[0])}
    ${projectTile(rest[1])}

    <article class="tile openable xp w2 h2 reveal">
        <p class="kicker">Experience</p>
        <h3>Embedded where the work happens.</h3>
        <div class="path" aria-label="Career path">${DATA.experience[0].path.map(s => `<span>${s}</span>`).join("<i aria-hidden='true'>→</i>")}</div>
        <ul class="xp-list grow">
            ${DATA.experience.map(e => `<li><div><b>${e.company}</b><span>${e.roles[0].title}</span></div><span>${e.dates}</span></li>`).join("")}
        </ul>
        ${opener("experience", "Open full experience timeline")}
    </article>

    ${projectTile(rest[2])}
    ${projectTile(rest[3])}

    <article class="tile openable w2 reveal" id="stack">
        <p class="kicker">Stack</p>
        <h3>Agents, forecasting and optimization, shipped on Databricks.</h3>
        <div class="chips">${DATA.topSkills.map(s => `<span class="chip">${s}</span>`).join("")}</div>
        ${opener("skills", "Open full tech stack")}
    </article>

    <article class="tile edu reveal">
        <p class="kicker">Education · ${ed.dates}</p>
        <h3>${ed.degree}</h3>
        <p class="muted">${ed.school}</p>
        <div class="grow fig g2">${ed.cgpa}<span class="unit"> / 10 CGPA</span></div>
    </article>

    <article class="tile reveal">
        <p class="kicker">Certifications</p>
        <ul class="certs">${DATA.certifications.map(c => `<li>${c}</li>`).join("")}</ul>
    </article>

    <section class="tile contact on-dark w4 reveal" id="contact" aria-labelledby="contactTitle">
        <div>
            <p class="status">Open to opportunities</p>
            <h2 id="contactTitle">Let's build something real.</h2>
            <p>Interested in roles where I can solve complex business challenges and create measurable impact.</p>
        </div>
        <div class="actions">
            <a class="btn" href="mailto:${P.email}">Email me</a>
            <a class="link" href="${P.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn ›</a>
            <a class="link" href="${P.resume}" download="Shubham_Jain_Resume.pdf">Résumé ›</a>
        </div>
    </section>`;

/* ---------- Sheet content ---------- */
function sheetContent(key) {
    const [type, idx] = key.split(":");
    if (type === "project") {
        const x = X[+idx];
        return `
            <p class="kicker">${x.kicker}</p>
            <h2 id="sheetTitle">${x.title}</h2>
            ${figure(x.impact, x.g)}
            <p class="fig-label">${x.impact.label}</p>
            <p class="lead">${x.summary}</p>
            <div class="sheet-section"><p>${x.description}</p></div>
            <p class="plain">${x.plain}</p>
            <div class="chips">${x.tags.map(t => `<span class="chip">${t}</span>`).join("")}</div>`;
    }
    if (type === "experience") return `
        <p class="kicker">Experience</p>
        <h2 id="sheetTitle">Where I've worked.</h2>
        ${DATA.experience.map(e => `
            <div class="sheet-section">
                <h3>${e.company}</h3>
                <p class="meta">${e.unit ? e.unit + " · " : ""}${e.place} · ${e.dates}</p>
                ${e.roles.map(r => `
                    <div class="role">
                        <h4>${r.title}${r.dates ? ` <span>· ${r.dates}</span>` : ""}</h4>
                        <ul>${r.points.map(pt => `<li>${pt}</li>`).join("")}</ul>
                    </div>`).join("")}
            </div>`).join("")}`;
    return `
        <p class="kicker">Stack</p>
        <h2 id="sheetTitle">Full tech stack.</h2>
        ${DATA.skills.map(s => `
            <div class="sheet-section">
                <h3>${s.group}</h3>
                <div class="chips">${s.items.map(i => `<span class="chip">${i}</span>`).join("")}</div>
            </div>`).join("")}`;
}

/* ---------- Behaviour ---------- */
const sheet = $("sheet");
let lastOpener = null;

/* Band buttons and whole bento tiles both open the same sheet. */
document.addEventListener("click", e => {
    if (e.target.closest("a") || sheet.contains(e.target)) return;
    const trigger = e.target.closest("[data-open]") || e.target.closest(".tile.openable")?.querySelector("[data-open]");
    if (!trigger) return;
    lastOpener = trigger;
    $("sheetBody").innerHTML = sheetContent(trigger.dataset.open);
    sheet.showModal();
    sheet.scrollTop = 0;
    sheet.querySelectorAll("[data-count]").forEach(countUp);
});
$("sheetClose").addEventListener("click", () => sheet.close());
sheet.addEventListener("click", e => { if (e.target === sheet) sheet.close(); });
sheet.addEventListener("close", () => lastOpener && lastOpener.focus());

function countUp(el) {
    const end = +el.dataset.count, pre = el.dataset.pre, suf = el.dataset.suf;
    if (reduceMotion) return;
    const t0 = performance.now(), dur = 1400;
    const step = t => {
        const k = Math.min((t - t0) / dur, 1);
        el.textContent = pre + Math.round(end * (1 - Math.pow(1 - k, 3))) + suf;
        if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
}

const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
        if (!en.isIntersecting) return;
        en.target.classList.add("in");
        en.target.querySelectorAll("[data-count]").forEach(countUp);
        io.unobserve(en.target);
    });
}, { threshold: 0.15 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

/* Theme: follow the system unless the visitor picks one. */
const root = document.documentElement, toggle = $("themeToggle");
const isDark = () => (root.dataset.theme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")) === "dark";
const syncToggle = () => toggle.setAttribute("aria-label", isDark() ? "Switch to light mode" : "Switch to dark mode");
if (localStorage.getItem("theme")) root.dataset.theme = localStorage.getItem("theme");
syncToggle();
toggle.addEventListener("click", () => {
    root.dataset.theme = isDark() ? "light" : "dark";
    localStorage.setItem("theme", root.dataset.theme);
    syncToggle();
});

/* Mobile menu */
const menuBtn = $("menuBtn"), links = $("navLinks");
menuBtn.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open);
    menuBtn.textContent = open ? "✕" : "☰";
});
links.addEventListener("click", e => {
    if (e.target.tagName === "A") { links.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); menuBtn.textContent = "☰"; }
});
