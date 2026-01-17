import { useLanguage } from "../../context/LanguageContext";
import { useMediaQuery } from "react-responsive";

const ProductsGrid = () => {
  const { t } = useLanguage();
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const products = t("products.grid.items");

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div
          style={{
            ...styles.grid,
            gridTemplateColumns: isMobile
              ? "1fr"
              : "repeat(auto-fit, minmax(280px, 1fr))",
          }}
        >
          {products.map((item, i) => (
            <div key={i} style={styles.card}>
              <div style={styles.cardIndex}>
                {String(i + 1).padStart(2, "0")}
              </div>

              <h3 style={styles.cardTitle}>{item.title}</h3>

              <p style={styles.cardDesc}>{item.description}</p>

              <span style={styles.cardCta}>{t("products.grid.cta")} →</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsGrid;

/* ================= STYLES ================= */

const styles = {
  section: {
    padding: "120px 0 160px",
  },

  container: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "0 24px",
  },

  grid: {
    display: "grid",
    gap: 40,
  },

  card: {
    position: "relative",
    padding: "40px 32px",
    border: "1px solid rgba(0,33,71,0.15)",
    background: "#fff",
    transition: "all 0.35s ease",
    cursor: "pointer",
  },

  cardIndex: {
    fontFamily: "monospace",
    fontSize: 12,
    letterSpacing: "0.2em",
    color: "#FFD700",
    marginBottom: 16,
  },

  cardTitle: {
    fontSize: 22,
    fontWeight: 700,
    color: "#002147",
    marginBottom: 12,
  },

  cardDesc: {
    fontSize: 15,
    lineHeight: 1.6,
    color: "#4b5563",
    marginBottom: 28,
  },

  cardCta: {
    fontFamily: "monospace",
    fontSize: 12,
    letterSpacing: "0.2em",
    color: "#002147",
    position: "relative",
  },
};
