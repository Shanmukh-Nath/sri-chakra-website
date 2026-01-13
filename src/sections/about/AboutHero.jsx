import { useLanguage } from "../../context/LanguageContext";
import { useMediaQuery } from "react-responsive";

const AboutHero = () => {
  const { t } = useLanguage();
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <section style={styles.wrapper} id="about-hero">
      <div style={styles.container}>
        <div style={styles.content}>
          <span style={styles.eyebrow}>{t("about.hero.eyebrow")}</span>
          <h1
            style={{
              ...styles.title,
              fontSize: isMobile
                ? "clamp(42px, 12vw, 60px)"
                : "clamp(60px, 6vw, 90px)",
            }}
          >
            {t("about.hero.title")}
          </h1>
          <div style={styles.descWrap}>
            <span style={styles.yellowBar} />
            <p style={styles.description}>{t("about.hero.description")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;

const styles = {
  wrapper: {
    padding: "180px 48px 40px",
    position: "relative",
    zIndex: 1,
  },
  container: {
    maxWidth: 1400,
    margin: "0 auto",
  },
  content: {
    maxWidth: 900,
  },
  eyebrow: {
    fontFamily: "monospace",
    fontSize: "14px",
    letterSpacing: "0.2em",
    color: "#FFD700",
    display: "block",
    marginBottom: "24px",
    fontWeight: "bold",
  },
  title: {
    fontFamily: "serif",
    color: "#002147",
    margin: "0 0 48px",
    lineHeight: 1.05,
    fontWeight: 700,
  },
  descWrap: {
    display: "flex",
    gap: "24px",
    maxWidth: 680,
  },
  yellowBar: {
    width: 4,
    backgroundColor: "#FFD700",
    flexShrink: 0,
  },
  description: {
    fontSize: "19px",
    lineHeight: 1.7,
    color: "rgba(0,33,71,0.85)",
    margin: 0,
  },
};
