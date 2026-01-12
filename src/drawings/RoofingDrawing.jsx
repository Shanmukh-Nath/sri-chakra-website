const RoofingDrawing = ({
  stroke = "#002147",
  accent = "#FFD700",
  animate = false,
}) => {
  return (
    <svg viewBox="0 0 600 260" style={styles.svg} data-animate={animate}>
      {/* Sheet Outline */}
      <rect
        x="40"
        y="40"
        width="520"
        height="160"
        fill="none"
        stroke={stroke}
        strokeWidth="1"
        opacity="0.3"
      />

      {/* Corrugation Waves */}
      {Array.from({ length: 10 }).map((_, i) => {
        const x = 60 + i * 48;
        return (
          <path
            key={i}
            d={`
              M ${x} 40
              Q ${x + 12} 20 ${x + 24} 40
              Q ${x + 36} 60 ${x + 48} 40
              L ${x + 48} 200
              Q ${x + 36} 220 ${x + 24} 200
              Q ${x + 12} 180 ${x} 200
              Z
            `}
            fill="none"
            stroke={stroke}
            strokeWidth="1.5"
            className="draw-path"
          />
        );
      })}

      {/* Coating Layers */}
      <line x1="40" y1="30" x2="560" y2="30" stroke={accent} strokeWidth="2" />

      <text x="300" y="18" textAnchor="middle" style={styles.coating}>
        MULTI-LAYER COATED SHEET
      </text>

      {/* Measurement */}
      <text x="300" y="235" textAnchor="middle" style={styles.label}>
        PROFILED ROOFING SYSTEM
      </text>
    </svg>
  );
};

export default RoofingDrawing;

const styles = {
  svg: {
    width: "100%",
    height: "auto",
    display: "block",
  },
  label: {
    fontFamily: "monospace",
    fontSize: 10,
    letterSpacing: "0.3em",
    fill: "#002147",
    opacity: 0.6,
  },
  coating: {
    fontFamily: "monospace",
    fontSize: 9,
    letterSpacing: "0.35em",
    fill: "#FFD700",
  },
};
