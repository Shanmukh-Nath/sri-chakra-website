const WBeamDrawing = ({
  stroke = "#002147",
  accent = "#FFD700",
  animate = false,
}) => {
  return (
    <svg viewBox="0 0 600 240" style={styles.svg} data-animate={animate}>
      {/* Baseline */}
      <line
        x1="20"
        y1="120"
        x2="580"
        y2="120"
        stroke={stroke}
        strokeWidth="1"
        opacity="0.3"
      />

      {/* W-Beam Profile */}
      <path
        d="
          M 20 120
          Q 60 60 100 120
          Q 140 180 180 120
          Q 220 60 260 120
          Q 300 180 340 120
          Q 380 60 420 120
          Q 460 180 500 120
          Q 540 60 580 120
        "
        fill="none"
        stroke={stroke}
        strokeWidth="2"
        className="draw-path"
      />

      {/* Mounting Holes */}
      {[120, 300, 480].map((x, i) => (
        <circle
          key={i}
          cx={x}
          cy="120"
          r="6"
          fill="none"
          stroke={accent}
          strokeWidth="1.5"
        />
      ))}

      {/* Measurement Lines */}
      <line
        x1="20"
        y1="190"
        x2="580"
        y2="190"
        stroke={stroke}
        strokeWidth="0.75"
        strokeDasharray="4 4"
        opacity="0.5"
      />

      <text x="300" y="215" textAnchor="middle" style={styles.label}>
        W-BEAM PROFILE • NHAI STANDARD
      </text>
    </svg>
  );
};

export default WBeamDrawing;

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
};
