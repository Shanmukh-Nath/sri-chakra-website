import { useLanguage } from "../../context/LanguageContext";
import { useMediaQuery } from "react-responsive";

const AboutRelated = () => {
  const { t } = useLanguage();
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const items = [0, 1, 2].map((i) => ({
    label: t(`about.related.items.${i}.label`),
    value: t(`about.related.items.${i}.value`),
  }));

  return (
    <section style={styles.wrapper} id="about-related">
      <div style={styles.container}>
        <div style={styles.header}>
          <div style={styles.line} />
          <h2 style={styles.title}>{t("about.related.title")}</h2>
        </div>
        <div
          style={{
            ...styles.grid,
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr",
          }}
        >
          {items.map((item, idx) => (
            <div key={idx} style={styles.item}>
              <span style={styles.label}>{item.label}</span>
              <p style={styles.value}>{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutRelated;

const styles = {
  wrapper: {
    padding: "20px 48px 40px",
    position: "relative",
    zIndex: 1,
    backgroundColor: "rgba(0, 33, 71, 0.02)",
  },
  container: {
    maxWidth: 1400,
    margin: "0 auto",
  },
  header: {
    display: "flex",
    alignItems: "center",
    gap: "24px",
    marginBottom: "24px",
  },
  line: {
    width: "40px",
    height: "2px",
    backgroundColor: "#FFD700",
  },
  title: {
    fontFamily: "monospace",
    fontSize: "18px",
    color: "#002147",
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    margin: 0,
    fontWeight: "bold",
  },
  grid: {
    display: "grid",
    gap: "32px",
  },
  item: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  label: {
    fontFamily: "monospace",
    fontSize: "12px",
    color: "#FFD700",
    fontWeight: "bold",
    letterSpacing: "0.1em",
  },
  value: {
    fontSize: "16px",
    lineHeight: 1.6,
    color: "rgba(0,33,71,0.7)",
    margin: 0,
  },
};
