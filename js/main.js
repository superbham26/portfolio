const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
const $ = id => document.getElementById(id);

$("year").textContent = new Date().getFullYear();

/* ---------- Behaviour ---------- */
const sheet = $("sheet");
let lastOpener = null;

/* Band buttons and whole bento tiles both open the same sheet. */
document.addEventListener("click", e => {
    if (e.target.closest("a") || sheet.contains(e.target)) return;
    const trigger = e.target.closest("[data-open]") || e.target.closest(".tile.openable")?.querySelector("[data-open]");
    if (!trigger) return;
    lastOpener = trigger;
    $("sheetBody").innerHTML = document.querySelector(`[data-detail="${trigger.dataset.open}"]`).innerHTML;
    $("sheetBody").querySelector("h2").id = "sheetTitle";
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
