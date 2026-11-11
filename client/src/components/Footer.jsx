
import { Sprout } from "lucide-react";

export default function Footer({ t }) {
  return (
    <footer className="footer">
      <a className="brand footer-brand" href="#home">
        <span className="brand-mark">
          <Sprout size={22} />
        </span>

        <span>
          nutri<span className="brand-accent">smart</span>
          <small>EVERYDAY NUTRITION</small>
        </span>
      </a>

      <p>{t.footer}</p>

      <span className="footer-note">
        Educational information only · Not a substitute for personalised
        medical advice
      </span>

      <span className="copyright">© 2026 NutriSmart</span>
    </footer>
  );
}
