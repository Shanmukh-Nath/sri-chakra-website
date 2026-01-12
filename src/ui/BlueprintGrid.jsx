import { useEffect, useRef } from "react";
import gsap from "gsap";

const EnhancedBlueprintGrid = () => {
  const gridRef = useRef(null);
  const dotsRef = useRef(null);
  const scanlineRef = useRef(null);
  const accentLine1Ref = useRef(null);
  const accentLine2Ref = useRef(null);
  const crosshairRef = useRef(null);

  useEffect(() => {
    // Parallax mouse movement with GSAP
    const handleMouseMove = (e) => {
      const moveX = (e.clientX - window.innerWidth / 2) / 50;
      const moveY = (e.clientY - window.innerHeight / 2) / 50;

      gsap.to(gridRef.current, {
        x: moveX,
        y: moveY,
        duration: 2.5,
        ease: "power2.out",
      });

      gsap.to(dotsRef.current, {
        x: moveX * 0.5,
        y: moveY * 0.5,
        duration: 3,
        ease: "power2.out",
      });

      gsap.to([accentLine1Ref.current, accentLine2Ref.current], {
        x: moveX * 0.3,
        y: moveY * 0.3,
        duration: 3.5,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // GSAP Scanline animation
    gsap.to(scanlineRef.current, {
      y: "100vh",
      duration: 8,
      repeat: -1,
      ease: "none",
      opacity: 0.6,
      onRepeat: () => {
        gsap.set(scanlineRef.current, { y: 0, opacity: 0 });
        gsap.to(scanlineRef.current, { opacity: 0.6, duration: 0.8 });
      },
    });

    // Crosshair pulse animation
    gsap.to(crosshairRef.current, {
      scale: 1.1,
      opacity: 0.4,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    // Accent lines fade in/out
    gsap.to(accentLine1Ref.current, {
      opacity: 0.15,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(accentLine2Ref.current, {
      opacity: 0.15,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 1,
    });

    // Corner measurements fade in on mount
    gsap.from(".measure-element", {
      opacity: 0,
      scale: 0.8,
      duration: 1.2,
      stagger: 0.2,
      ease: "back.out(1.4)",
      delay: 0.3,
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div style={styles.wrapper}>
      {/* Main grid layer */}
      <div ref={gridRef} style={styles.grid} />

      {/* Dot pattern layer */}
      <div ref={dotsRef} style={styles.dots} />

      {/* Accent lines */}
      <div style={styles.accentLines}>
        <div ref={accentLine1Ref} style={styles.diagonalLine1} />
        <div ref={accentLine2Ref} style={styles.diagonalLine2} />
      </div>

      {/* Corner measurements */}
      <div style={styles.cornerMeasurements}>
        <div style={styles.topLeft} className="measure-element">
          <span style={styles.measureText}>0,0</span>
          <div ref={crosshairRef} style={styles.crosshair}>
            <div style={styles.crosshairLine1} />
            <div style={styles.crosshairLine2} />
          </div>
        </div>
        <div style={styles.topRight} className="measure-element">
          <span style={styles.measureText}>X-AXIS</span>
          <div style={styles.ruler}>
            <div style={styles.tick} />
            <div style={styles.tick} />
            <div style={styles.tick} />
            <div style={styles.tick} />
          </div>
        </div>
        <div style={styles.bottomLeft} className="measure-element">
          <span style={styles.measureText}>Y-AXIS</span>
          <div style={{ ...styles.ruler, transform: "rotate(90deg)" }}>
            <div style={styles.tick} />
            <div style={styles.tick} />
            <div style={styles.tick} />
            <div style={styles.tick} />
          </div>
        </div>
        <div style={styles.bottomRight} className="measure-element">
          <div style={styles.gridLabel}>
            <div style={styles.gridLabelLine} />
            <span style={{ ...styles.measureText, fontSize: "9px" }}>
              GRID: 240×240
            </span>
          </div>
        </div>
      </div>

      {/* Vignette overlay */}
      <div style={styles.vignette} />

      {/* Animated scan line */}
      <div ref={scanlineRef} style={styles.scanline} />
    </div>
  );
};

export default EnhancedBlueprintGrid;

const styles = {
  wrapper: {
    position: "fixed",
    inset: 0,
    pointerEvents: "none",
    zIndex: 0,
    overflow: "hidden",
    backgroundColor: "#f8fafb",
  },

  grid: {
    position: "absolute",
    inset: "-20%",
    backgroundImage: `
      linear-gradient(to right, rgba(14, 68, 117, 0.15) 1.5px, transparent 1.5px),
      linear-gradient(to bottom, rgba(14, 68, 117, 0.15) 1.5px, transparent 1.5px),
      linear-gradient(to right, rgba(14, 68, 117, 0.06) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(14, 68, 117, 0.06) 1px, transparent 1px)
    `,
    backgroundSize: "240px 240px, 240px 240px, 48px 48px, 48px 48px",
    transform: "translate3d(0,0,0)",
    willChange: "transform",
  },

  dots: {
    position: "absolute",
    inset: "-20%",
    backgroundImage: `radial-gradient(circle, rgba(14, 68, 117, 0.2) 1.5px, transparent 1.5px)`,
    backgroundSize: "80px 80px",
    transform: "translate3d(0,0,0)",
    willChange: "transform",
    opacity: 0.4,
  },

  accentLines: {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
  },

  diagonalLine1: {
    position: "absolute",
    top: 0,
    left: "20%",
    width: "1px",
    height: "100%",
    background:
      "linear-gradient(to bottom, transparent, rgba(37, 99, 235, 0.25) 50%, transparent)",
    opacity: 0.1,
  },

  diagonalLine2: {
    position: "absolute",
    top: "25%",
    left: 0,
    width: "100%",
    height: "1px",
    background:
      "linear-gradient(to right, transparent, rgba(37, 99, 235, 0.25) 50%, transparent)",
    opacity: 0.1,
  },

  cornerMeasurements: {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
  },

  topLeft: {
    position: "absolute",
    top: "32px",
    left: "32px",
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },

  topRight: {
    position: "absolute",
    top: "32px",
    right: "32px",
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },

  bottomLeft: {
    position: "absolute",
    bottom: "32px",
    left: "32px",
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },

  bottomRight: {
    position: "absolute",
    bottom: "32px",
    right: "32px",
  },

  measureText: {
    fontFamily: "monospace",
    fontSize: "11px",
    color: "rgba(14, 68, 117, 0.5)",
    fontWeight: "600",
    letterSpacing: "0.5px",
  },

  crosshair: {
    width: "24px",
    height: "24px",
    position: "relative",
  },

  crosshairLine1: {
    position: "absolute",
    top: "50%",
    left: 0,
    width: "100%",
    height: "1px",
    backgroundColor: "rgba(14, 68, 117, 0.3)",
    transform: "translateY(-50%)",
  },

  crosshairLine2: {
    position: "absolute",
    left: "50%",
    top: 0,
    width: "1px",
    height: "100%",
    backgroundColor: "rgba(14, 68, 117, 0.3)",
    transform: "translateX(-50%)",
  },

  ruler: {
    width: "60px",
    height: "8px",
    borderLeft: "1px solid rgba(14, 68, 117, 0.3)",
    borderRight: "1px solid rgba(14, 68, 117, 0.3)",
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 2px",
  },

  tick: {
    width: "1px",
    height: "4px",
    backgroundColor: "rgba(14, 68, 117, 0.25)",
  },

  gridLabel: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },

  gridLabelLine: {
    width: "30px",
    height: "1px",
    backgroundColor: "rgba(14, 68, 117, 0.3)",
  },

  vignette: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(circle at center, transparent 0%, rgba(14, 68, 117, 0.03) 100%)",
    pointerEvents: "none",
  },

  scanline: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "2px",
    background:
      "linear-gradient(to right, transparent, rgba(37, 99, 235, 0.4), transparent)",
    opacity: 0,
    boxShadow: "0 0 20px rgba(37, 99, 235, 0.5)",
  },
};
