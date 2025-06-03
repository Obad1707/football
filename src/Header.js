import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Header.css";

export default function Header() {
  const { t, i18n } = useTranslation();
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleSideMenu = () => setSideMenuOpen(!sideMenuOpen);
  const closeMenu = () => setSideMenuOpen(false);

  const isRootPage = location.pathname === "/";
  const match = location.pathname.match(/^\/player\/(modric|ronaldo|kaka)/);
  const playerId = match ? match[1] : null;

  const playerNames = {
    modric: "Luka Modrić",
    ronaldo: "Cristiano Ronaldo",
    kaka: "Kaká",
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    closeMenu();

    if (playerId && location.pathname === `/player/${playerId}`) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (playerId) {
      navigate(`/player/${playerId}`);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    } else {
      navigate("/");
    }
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header
      className="site-header"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {!isRootPage ? (
        <>
          <div
            className="left-section"
            style={{ display: "flex", alignItems: "center", gap: "10px" }}
          >
            <div
              className="side-menu-toggle"
              onClick={toggleSideMenu}
              style={{ cursor: "pointer" }}
            >
              ☰
            </div>
            <Link
              to={playerId ? `/player/${playerId}` : "/"}
              className="logo"
              onClick={handleLogoClick}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {playerId ? playerNames[playerId] : t("footballLegend")}
            </Link>
          </div>

          {playerId && location.pathname === `/player/${playerId}` && (
            <nav
              className="nav-links"
              style={{ display: "flex", gap: "20px" }}
            >
              <a href="#details" onClick={closeMenu}>
                {t("details")}
              </a>
              <a href="#honours" onClick={closeMenu}>
                {t("honours")}
              </a>
              <a href="#stats" onClick={closeMenu}>
                {t("stats")}
              </a>
            </nav>
          )}

         <div style={{ marginLeft: "auto", display: "flex", gap: "10px" }}>
            <button
            onClick={() => changeLanguage("en")}
            style={{
              fontWeight: i18n.language === "en" ? "bold" : "normal",
              cursor: "pointer",
              padding: "8px 16px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              backgroundColor: i18n.language === "en" ? "#f0f0f0" : "white",
              transition: "background-color 0.3s, box-shadow 0.3s",
              boxShadow: i18n.language === "en" ? "0 0 5px rgba(0, 0, 0, 0.1)" : "none",
            }}
          >
            EN
          </button>
          <button
            onClick={() => changeLanguage("pt")}
            style={{
              fontWeight: i18n.language === "pt" ? "bold" : "normal",
              cursor: "pointer",
              padding: "8px 16px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              backgroundColor: i18n.language === "pt" ? "#f0f0f0" : "white",
              transition: "background-color 0.3s, box-shadow 0.3s",
              boxShadow: i18n.language === "pt" ? "0 0 5px rgba(0, 0, 0, 0.1)" : "none",
            }}
          >
            PT
          </button>
        </div>
                </> 
      ) : (
        <div
          className="center-section"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <h1 className="site-title" style={{ margin: 0 }}>
            {t("footballLegends")}
          </h1>

          <div style={{ display: "flex", gap: "10px" }}>
            <button
              onClick={() => changeLanguage("en")}
              style={{
                fontWeight: i18n.language === "en" ? "bold" : "normal",
                cursor: "pointer",
                padding: "5px 10px",
              }}
            >
              EN
            </button>
            <button
              onClick={() => changeLanguage("pt")}
              style={{
                fontWeight: i18n.language === "pt" ? "bold" : "normal",
                cursor: "pointer",
                padding: "5px 10px",
              }}
            >
              PT
            </button>
          </div>
        </div>
      )}

      {sideMenuOpen && (
        <div className="side-menu">
          <Link to="/" onClick={closeMenu}>
            {t("home")}
          </Link>
          {playerId && (
            <>
              <Link
                to={`/player/${playerId}/career-timeline`}
                onClick={closeMenu}
              >
                {t("careerTimeline")}
              </Link>
              <Link
                to={`/player/${playerId}/highlights-media`}
                onClick={closeMenu}
              >
                {t("highlightsMedia")}
              </Link>
              <Link to={`/player/${playerId}/games`} onClick={closeMenu}>
                {t("inGames", {
                  name: playerNames[playerId].split(" ")[0],
                })}
              </Link>
            </>
          )}
        </div>
      )}
    </header>
  );
}
