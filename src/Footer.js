import "./Footer.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>{t("footer.aboutTitle")}</h4>
          <p>{t("footer.aboutDescription")}</p>
        </div>
        <div className="footer-section">
          <h4>{t("footer.quickLinksTitle")}</h4>
          <ul>
            <li><Link to="/">{t("footer.playerMenu")}</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>{t("footer.contactTitle")}</h4>
          <p>{t("footer.contactEmail")}</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>{t("footer.copyright", { year: currentYear })}</p>
      </div>
    </footer>
  );
}
