import { useLanguage } from "../../context/LanguageContext";
import { useMediaQuery } from "react-responsive";

const ProductIntro = () => {
  const { t } = useLanguage();
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {/* Eyebrow */}
        <div style={styles.eyebrowRow}>
          <span style={styles.eyebrow}>{t("products.intro.eyebrow")}</span>
          <span style={styles.eyebrowLine} />
        </div>

        {/* Title */}
        <h1
          style={{
            ...styles.title,
            fontSize: isMobile
              ? "clamp(36px, 10vw, 56px)"
              : "clamp(64px, 6vw, 96px)",
          }}
        >
          {t("products.intro.title")}
        </h1>

        {/* Description */}
        <p style={styles.description}>{t("products.intro.description")}</p>

        {/* Engineering Stats */}
        <div style={styles.stats}>
          {t("products.intro.stats").map((item, i) => (
            <div key={i} style={styles.stat}>
              <span style={styles.statValue}>{item.value}</span>
              <span style={styles.statLabel}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductIntro;

/* ================= STYLES ================= */

const styles = {
  section: {
    padding: "160px 0 120px",
    position: "relative",
  },

  container: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "0 24px",
  },

  eyebrowRow: {
    display: "flex",
    alignItems: "center",
    gap: 16,
    marginBottom: 24,
  },

  eyebrow: {
    fontFamily: "monospace",
    fontSize: 11,
    letterSpacing: "0.3em",
    color: "#FFD700",
    fontWeight: 700,
  },

  eyebrowLine: {
    flex: 1,
    height: 1,
    background: "linear-gradient(90deg,#FFD700,transparent)",
  },

  title: {
    fontFamily: "Georgia, serif",
    color: "#002147",
    fontWeight: 700,
    lineHeight: 1.05,
    marginBottom: 32,
  },

  description: {
    maxWidth: 640,
    fontSize: 18,
    lineHeight: 1.8,
    color: "rgba(0,33,71,0.75)",
    marginBottom: 64,
  },

  stats: {
    display: "flex",
    gap: 48,
    flexWrap: "wrap",
  },

  stat: {
    display: "flex",
    flexDirection: "column",
    gap: 6,
  },

  statValue: {
    fontFamily: "monospace",
    fontSize: 22,
    fontWeight: 700,
    color: "#002147",
  },

  statLabel: {
    fontSize: 12,
    letterSpacing: "0.15em",
    color: "#6b7280",
    textTransform: "uppercase",
  },
};
