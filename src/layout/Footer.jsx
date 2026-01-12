import { Instagram, Facebook, Youtube, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.inner}>
        {/* Left */}
        <div style={styles.left}>
          <div style={styles.logoRow}>
            <div style={styles.logoBox}>S</div>
            <span style={styles.brand}>SRI CHAKRA INDUSTRIES</span>
          </div>

          <p style={styles.copy}>
            © {new Date().getFullYear()} Sri Chakra Industries. All rights
            reserved.
          </p>
        </div>

        {/* Right */}
        <div style={styles.socials}>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            style={{ ...styles.icon, color: "#E4405F" }}
          >
            <Instagram size={18} />
          </a>

          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            style={{ ...styles.icon, color: "#1877F2" }}
          >
            <Facebook size={18} />
          </a>

          <a
            href="https://youtube.com"
            target="_blank"
            rel="noreferrer"
            style={{ ...styles.icon, color: "#FF0000" }}
          >
            <Youtube size={18} />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            style={{ ...styles.icon, color: "#0A66C2" }}
          >
            <Linkedin size={18} />
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            style={{ ...styles.icon, color: "#1DA1F2" }}
          >
            <Twitter size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
const styles = {
  footer: {
    width: "100%",
    padding: "48px 24px",
    borderTop: "1px solid rgba(0,33,71,0.15)",
    background: "rgba(255,255,255,0.6)",
    backdropFilter: "blur(6px)",
  },

  inner: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "24px",
    flexWrap: "wrap",
  },

  left: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },

  logoRow: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },

  logoBox: {
    width: 32,
    height: 32,
    background: "#002147",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "serif",
    fontWeight: "bold",
  },

  brand: {
    fontFamily: "serif",
    fontSize: 16,
    fontWeight: 600,
    color: "#002147",
    letterSpacing: "0.04em",
  },

  copy: {
    fontSize: 12,
    color: "rgba(0,33,71,0.6)",
    fontFamily: "monospace",
  },

  socials: {
    display: "flex",
    gap: "18px",
    alignItems: "center",
  },

  icon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "transform 0.2s ease",
  },
};
