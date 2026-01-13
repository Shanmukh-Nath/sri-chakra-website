import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Menu } from "lucide-react";
import { useMediaQuery } from "react-responsive";

const Header = ({ onMenuToggle }) => {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: 768 });

  const LANGS = [
    { code: "en", label: "English", symbol: "EN" },
    { code: "te", label: "తెలుగు", symbol: "అ" },
    { code: "hi", label: "हिंदी", symbol: "हि" },
  ];

  /* ================= MOBILE HEADER ================= */
  if (isMobile) {
    return (
      <nav style={styles.nav}>
        <div style={styles.mobileHeader}>
          {/* Logo */}
          <div style={styles.mobileLogo}>
            <div style={styles.logoBox}>
              <img
                src="/media/images/logos/logo.png"
                alt="Sri Chakra Industries Logo"
                style={styles.logoImage}
                draggable={false}
              />
            </div>
          </div>

          {/* Language buttons */}
          <div style={styles.mobileLangBar}>
            {LANGS.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                style={{
                  ...styles.mobileLangBtn,
                  background: lang === l.code ? "#002147" : "transparent",
                  color: lang === l.code ? "#fff" : "#002147",
                }}
              >
                {l.symbol}
              </button>
            ))}
          </div>

          {/* Menu */}
          <button
            onClick={onMenuToggle}
            style={styles.mobileMenuBtn}
            type="button"
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>
    );
  }

  /* ================= DESKTOP HEADER ================= */
  return (
    <nav style={styles.nav}>
      {/* Logo */}
      <div style={styles.logoWrapper}>
        <div style={styles.logoBox}>
          <img
            src="/media/images/logos/logo.png"
            alt="Sri Chakra Industries Logo"
            style={styles.logoImage}
            draggable={false}
          />
        </div>
        <span style={styles.logoText}>SRI CHAKRA</span>
      </div>

      <div style={styles.rightControls}>
        {/* Language Dropdown */}
        <div style={styles.langWrapper}>
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            style={styles.langCurrent}
          >
            {LANGS.find((l) => l.code === lang)?.symbol}
          </button>

          {open && (
            <div style={styles.langDropdown}>
              {LANGS.map((l) => (
                <button
                  key={l.code}
                  type="button"
                  onClick={() => {
                    setLang(l.code);
                    setOpen(false); // close after selection
                  }}
                  style={{
                    ...styles.langOption,
                    opacity: lang === l.code ? 0.5 : 1,
                  }}
                >
                  <span style={styles.langSymbol}>{l.symbol}</span>
                  <span style={styles.langLabel}>{l.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Menu */}
        <button onClick={onMenuToggle} style={styles.menuBtn} type="button">
          <Menu size={22} />
          <span style={styles.menuText}>SYSTEM MENU</span>
        </button>
      </div>
    </nav>
  );
};

export default Header;

const styles = {
  nav: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 60,
    padding: "14px 16px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxSizing: "border-box",
    pointerEvents: "auto", // ✅ FIX
  },

  logoWrapper: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    background: "rgba(255,255,255,0.85)",
    backdropFilter: "blur(12px)",
    padding: "10px 18px",
    border: "1px solid rgba(0,33,71,0.12)",
    pointerEvents: "auto",
  },
  logoImage: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    display: "block",
  },

  logoBox: {
    width: 50,
    height: 50,
    background: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  logoLetter: {
    color: "#fff",
    fontFamily: "serif",
    fontSize: 16,
    fontWeight: "bold",
  },

  logoText: {
    fontFamily: "serif",
    fontWeight: "bold",
    fontSize: 18,
    color: "#002147",
  },

  rightControls: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    pointerEvents: "auto",
  },

  /* ===== Desktop Dropdown ===== */

  langWrapper: {
    position: "relative",
  },

  langCurrent: {
    width: 42,
    height: 42,
    border: "1px solid rgba(0,33,71,0.2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "serif",
    fontSize: 16,
    background: "rgba(255,255,255,0.85)",
    cursor: "pointer",
  },

  langDropdown: {
    position: "absolute",
    top: "48px",
    right: 0,
    width: "140px",
    background: "#fff",
    border: "1px solid rgba(0,33,71,0.15)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
  },

  langOption: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "10px 12px",
    cursor: "pointer",
    width: "100%",
    background: "transparent",
    border: "none",
    textAlign: "left",
  },

  langSymbol: {
    fontFamily: "serif",
    fontSize: 16,
    color: "#002147",
    width: 28,
    textAlign: "center",
  },

  langLabel: {
    fontSize: 13,
    color: "#002147",
  },

  /* ===== Mobile Language Bar ===== */

  mobileHeaderBar: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  mobileHeader: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
  },
  mobileLogo: {
    background: "rgba(255,255,255,0.9)",
    border: "1px solid rgba(0,33,71,0.12)",
    padding: "6px",
  },

  mobileLangBar: {
    display: "flex",
    gap: "4px",
    padding: "4px 6px",
    background: "rgba(255,255,255,0.85)",
    border: "1px solid rgba(0,33,71,0.12)",
  },

  mobileLangBtn: {
    width: 30,
    height: 28,
    border: "none",
    fontFamily: "serif",
    fontSize: 13,
    cursor: "pointer",
  },

  mobileMenuBtn: {
    background: "#002147",
    color: "#fff",
    border: "none",
    padding: "12px", // 👈 better tap target
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  /* ===== Menu ===== */

  menuBtn: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    background: "#002147",
    color: "#fff",
    padding: "12px 16px",
    border: "none",
    cursor: "pointer",
    whiteSpace: "nowrap",
  },

  menuText: {
    fontFamily: "monospace",
    fontSize: 10,
    letterSpacing: "0.3em",
  },
};
