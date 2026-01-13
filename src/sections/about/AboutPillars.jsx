import { useLanguage } from "../../context/LanguageContext";
import { useMediaQuery } from "react-responsive";

const PillarCard = ({ title, subtitle, description, index, images }) => (
  <div style={styles.card}>
    {/* Image Gallery */}
    <div style={styles.imageGallery}>
      {images &&
        images.map((img, idx) => (
          <div key={idx} style={styles.imageWrapper}>
            <img src={img} alt={`${title} ${idx + 1}`} style={styles.image} />
          </div>
        ))}
    </div>

    <div style={styles.cardBody}>
      <span style={styles.pillSubtitle}>{subtitle}</span>
      <h3 style={styles.pillTitle}>{title}</h3>
      <p style={styles.pillDescription}>{description}</p>
    </div>
  </div>
);

const AboutPillars = () => {
  const { t } = useLanguage();
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const pillars = [
    {
      key: "crashBarriers",
      ...t("about.pillars.crashBarriers"),
      images: ["/media/images/highway1.png", "/media/images/highway2.png"],
    },
    {
      key: "railway",
      ...t("about.pillars.railway"),
      images: ["/media/images/railway1.png", "/media/images/railway2.png"],
    },
    {
      key: "roofing",
      ...t("about.pillars.roofing"),
      images: ["/media/images/roofing1.jpeg", "/media/images/roofing2.jpeg"],
    },
  ];

  return (
    <section style={styles.wrapper} id="about-pillars">
      <div style={styles.container}>
        <div
          style={{
            ...styles.grid,
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr",
          }}
        >
          {pillars.map((pillar, idx) => (
            <PillarCard key={pillar.key} {...pillar} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPillars;

const styles = {
  wrapper: {
    padding: "20px 48px 140px",
    position: "relative",
    zIndex: 1,
  },
  container: {
    maxWidth: 1400,
    margin: "0 auto",
  },
  grid: {
    display: "grid",
    gap: "32px",
  },
  card: {
    border: "1px solid rgba(0,33,71,0.12)",
    padding: "48px 40px",
    backgroundColor: "rgba(255,255,255,0.4)",
    backdropFilter: "blur(12px)",
    display: "flex",
    flexDirection: "column",
    gap: "32px",
    transition: "transform 0.3s ease, border-color 0.3s ease",
  },
  cardHeader: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  },
  cardNumber: {
    fontFamily: "monospace",
    fontSize: "11px",
    color: "#FFD700",
    fontWeight: "600",
    letterSpacing: "0.1em",
  },
  cardTitleLine: {
    flex: 1,
    height: "1px",
    backgroundColor: "rgba(0,33,71,0.1)",
  },
  cardBody: {
    display: "flex",
    flexDirection: "column",
  },
  pillSubtitle: {
    fontFamily: "monospace",
    fontSize: "11px",
    letterSpacing: "0.2em",
    color: "rgba(0,33,71,0.5)",
    textTransform: "uppercase",
    display: "block",
    marginBottom: "12px",
  },
  pillTitle: {
    fontFamily: "serif",
    fontSize: "32px",
    color: "#002147",
    margin: "0 0 24px",
    fontWeight: 600,
    lineHeight: 1.2,
  },
  pillDescription: {
    fontSize: "16px",
    lineHeight: 1.8,
    color: "rgba(0,33,71,0.75)",
    margin: 0,
  },
  imageGallery: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "12px",
    height: "200px",
  },
  imageWrapper: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    borderRadius: "2px",
    backgroundColor: "rgba(0,33,71,0.05)",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    filter: "grayscale(20%) saturate(80%)",
    transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
  },
};
