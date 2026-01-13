import { useLanguage } from "../../context/LanguageContext";
import { useMediaQuery } from "react-responsive";

const AboutBackground = () => {
  const { t } = useLanguage();
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <section style={styles.wrapper} id="about-background">
      <div style={styles.container}>
        <div style={styles.header}>
          <div style={styles.line} />
          <h2 style={styles.title}>{t("about.background.title")}</h2>
        </div>
        <div style={styles.content}>
          <p style={styles.description}>{t("about.background.description")}</p>
        </div>
      </div>
    </section>
  );
};

export default AboutBackground;

const styles = {
  wrapper: {
    padding: "40px 48px",
    position: "relative",
    zIndex: 1,
    backgroundColor: "#fff",
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
  content: {
    maxWidth: "900px",
  },
  description: {
    fontSize: "20px",
    lineHeight: 1.6,
    color: "rgba(0,33,71,0.8)",
    margin: 0,
    fontFamily: "serif",
    fontWeight: "400",
  },
};
