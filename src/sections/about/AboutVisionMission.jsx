import { useLanguage } from "../../context/LanguageContext";
import { useMediaQuery } from "react-responsive";

const AboutVisionMission = () => {
  const { t } = useLanguage();
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <section style={styles.wrapper} id="about-vision-mission">
      <div
        style={{
          ...styles.grid,
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
        }}
      >
        <div style={{ ...styles.block, backgroundColor: "#002147", color: "#fff" }}>
          <div style={styles.blockInner}>
            <span style={{ ...styles.eyebrow, color: "#FFD700" }}>
              {t("about.visionMission.vision.title")}
            </span>
            <h3 style={styles.text}>{t("about.visionMission.vision.text")}</h3>
          </div>
        </div>
        <div style={{ ...styles.block, backgroundColor: "rgba(0,33,71,0.03)", color: "#002147" }}>
          <div style={styles.blockInner}>
            <span style={{ ...styles.eyebrow, color: "rgba(0,33,71,0.5)" }}>
              {t("about.visionMission.mission.title")}
            </span>
            <h3 style={styles.text}>{t("about.visionMission.mission.text")}</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutVisionMission;

const styles = {
  wrapper: {
    width: "100%",
    position: "relative",
    zIndex: 1,
  },
  grid: {
    display: "grid",
    width: "100%",
    gap: "32px",
  },
  block: {
    padding: "60px 48px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "280px",
  },
  blockInner: {
    maxWidth: "600px",
  },
  eyebrow: {
    fontFamily: "monospace",
    fontSize: "14px",
    letterSpacing: "0.2em",
    display: "block",
    marginBottom: "32px",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  text: {
    fontSize: "24px",
    fontFamily: "serif",
    lineHeight: 1.4,
    margin: 0,
    fontWeight: "600",
  },
};
