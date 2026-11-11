
import {
  Sprout,
  ChevronDown,
  Menu,
  X
} from "lucide-react";

export default function Navbar({
  t,
  lang,
  setLang,
  mobileMenu,
  setMobileMenu,
  jump
}) {
  return (
    <header className="topbar">
      <a
        className="brand"
        href="#home"
        onClick={(e) => {
          e.preventDefault();
          jump("home");
        }}
      >
        <span className="brand-mark">
          <Sprout size={23} />
        </span>

        <span>
          nutri<span className="brand-accent">smart</span>
          <small>EVERYDAY NUTRITION</small>
        </span>
      </a>

      <nav className={mobileMenu ? "nav-links open" : "nav-links"}>
        <button onClick={() => jump("meals")}>{t.food}</button>
        <button onClick={() => jump("planner")}>Budget planner</button>
        <button onClick={() => jump("guide")}>{t.balanced}</button>
        <button onClick={() => jump("quiz")}>{t.quiz}</button>
        <button onClick={() => jump("awareness")}>{t.awareness}</button>
      </nav>

      <div className="top-actions">
        <button
          className="lang-toggle"
          onClick={() => setLang(lang === "en" ? "te" : "en")}
        >
          <span>文A</span>
          {lang === "en" ? "EN" : "తెలుగు"}
          <ChevronDown size={14} />
        </button>

        <button
          className="menu-btn"
          onClick={() => setMobileMenu(!mobileMenu)}
          aria-label="Toggle menu"
        >
          {mobileMenu ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
