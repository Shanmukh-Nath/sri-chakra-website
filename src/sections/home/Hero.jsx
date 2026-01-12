import { useLanguage } from "../../context/LanguageContext";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const { t } = useLanguage();
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <section style={styles.wrapper} className="snap-section" id="hero">
      <div style={styles.grid}>
        {/* LEFT CONTENT */}
        <div style={styles.left}>
          {/* Big Title */}
          <h1
            style={{
              ...styles.title,
              fontSize: isMobile
                ? "clamp(42px, 14vw, 72px)"
                : "clamp(88px, 9vw, 140px)",
            }}
          >
            <span style={styles.titlePrimary}>
              {t("home.hero.titlePrimary")}
            </span>
            <br />
            <span style={styles.titleSecondary}>
              {t("home.hero.titleSecondary")}
            </span>
          </h1>

          {/* Description block */}
          <div style={styles.descWrap}>
            <span style={styles.yellowBar} />
            <p style={styles.description}>{t("home.hero.description")}</p>
          </div>

          {/* CTA Buttons */}
          <div style={styles.ctaRow}>
            <button style={styles.primaryBtn}>
              {t("home.hero.primaryCta")} →
            </button>

            <button style={styles.secondaryBtn}>
              {t("home.hero.secondaryCta")}
            </button>
          </div>
        </div>

        {/* RIGHT EMPTY SPACE (future graphic / circle) */}
        {!isMobile && <div style={styles.right} />}
      </div>
    </section>
  );
};

export default Hero;

const styles = {
  wrapper: {
    minHeight: "100vh",
    padding: "140px 48px 10px",
    position: "relative",
    zIndex: 1,
  },

  grid: {
    maxWidth: 1400,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1.2fr 0.8fr",
    gap: "40px",
  },

  left: {
    display: "flex",
    flexDirection: "column",
    gap: "40px",
  },

  right: {
    // reserved for future blueprint circle / image
  },

  title: {
    fontFamily: "serif",
    lineHeight: 0.95,
    margin: 0,
  },

  titlePrimary: {
    color: "#002147", // blueprint blue
    fontWeight: 700,
  },

  titleSecondary: {
    color: "#002147",
    fontWeight: 500,
    opacity: 0.95,
  },

  descWrap: {
    display: "flex",
    alignItems: "flex-start",
    gap: "16px",
    maxWidth: 520,
  },

  yellowBar: {
    width: 4,
    height: "100%",
    backgroundColor: "#FFD700",
    marginTop: 6,
  },

  description: {
    fontSize: 16,
    lineHeight: 1.8,
    color: "rgba(0,33,71,0.75)",
    margin: 0,
  },

  ctaRow: {
    display: "flex",
    gap: "24px",
    flexWrap: "wrap",
  },

  primaryBtn: {
    background: "#002147",
    color: "#ffffff",
    border: "none",
    padding: "18px 28px",
    fontFamily: "monospace",
    fontSize: 13,
    letterSpacing: "0.15em",
    cursor: "pointer",
    position: "relative",
    boxShadow: "inset -6px 0 0 #FFD700",
  },

  secondaryBtn: {
    background: "transparent",
    color: "#002147",
    border: "1px solid rgba(0,33,71,0.25)",
    padding: "18px 28px",
    fontFamily: "monospace",
    fontSize: 13,
    letterSpacing: "0.15em",
    cursor: "pointer",
  },
};
