import { useEffect, useState } from "react";

const Crosshair = () => {
  const [enabled, setEnabled] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [mode, setMode] = useState("default");
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // ✅ Enable only for fine pointer devices (mouse / trackpad)
    const mq = window.matchMedia("(pointer: fine)");
    setEnabled(mq.matches);

    const handleChange = (e) => setEnabled(e.matches);
    mq.addEventListener("change", handleChange);

    return () => mq.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });

      const el = document.elementFromPoint(e.clientX, e.clientY);
      if (!el) return;

      // Force yellow cursor in dark zones
      if (el.closest('[data-theme="dark"]')) {
        setTheme("dark");
        return;
      }

      // Walk up to find real background
      let node = el;
      while (node && node !== document.body) {
        const bg = getComputedStyle(node).backgroundColor;
        if (bg && bg !== "transparent" && bg !== "rgba(0, 0, 0, 0)") {
          const rgb = bg.match(/\d+/g);
          if (rgb && rgb.length >= 3) {
            const [r, g, b] = rgb.map(Number);
            const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
            setTheme(luminance < 0.45 ? "dark" : "light");
            break;
          }
        }
        node = node.parentElement;
      }
    };

    const detect = (e) => {
      const t = e.target;
      if (t.closest("button")) setMode("button");
      else if (t.closest("a")) setMode("link");
      else if (t.closest("input, textarea, select")) setMode("input");
      else if (t.closest("img, video, svg")) setMode("media");
      else if (t.matches("p, span, h1, h2, h3, h4, h5, h6, label"))
        setMode("text");
      else setMode("default");
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", detect);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", detect);
    };
  }, [enabled]);

  // ❌ Do not render on mobile / touch
  if (!enabled) return null;

  const palette = theme === "dark" ? COLORS.dark : COLORS.light;

  return (
    <div
      style={{
        ...styles.wrapper,
        left: pos.x,
        top: pos.y,
      }}
    >
      <div
        style={{
          ...styles.cursor,
          ...styles.modes[mode],
        }}
      >
        <div style={{ ...styles.vLine, background: palette.main }} />
        <div style={{ ...styles.hLine, background: palette.main }} />

        <div
          style={{
            ...styles.center,
            ...styles.centerModes[mode],
            borderColor: palette.main,
            background: styles.centerModes[mode].background
              ? palette.main
              : "transparent",
            boxShadow: styles.centerModes[mode].boxShadow
              ? `0 0 16px ${palette.glow}`
              : "none",
          }}
        />

        <div style={{ ...styles.coords, color: palette.text }}>
          X:{Math.round(pos.x)} Y:{Math.round(pos.y)}
          <br />
          MODE:{mode.toUpperCase()}
        </div>
      </div>
    </div>
  );
};

export default Crosshair;

/* ================= COLORS ================= */

const COLORS = {
  light: {
    main: "rgba(8, 47, 84, 0.85)",
    text: "rgba(8, 47, 84, 0.9)",
    glow: "rgba(8, 47, 84, 0.6)",
  },
  dark: {
    main: "#FFD700",
    text: "#FFD700",
    glow: "rgba(255, 215, 0, 0.8)",
  },
};

const styles = {
  wrapper: {
    position: "fixed",
    pointerEvents: "none",
    zIndex: 9999999,
    transform: "translate(-50%, -50%)",
  },
  cursor: {
    position: "relative",
    width: 48,
    height: 48,
    transition: "all 0.2s ease",
  },
  vLine: {
    position: "absolute",
    left: "50%",
    top: 0,
    width: "2px",
    height: "100%",
    transform: "translateX(-50%)",
  },
  hLine: {
    position: "absolute",
    top: "50%",
    left: 0,
    width: "100%",
    height: "2px",
    transform: "translateY(-50%)",
  },
  center: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  coords: {
    position: "absolute",
    top: "-34px",
    left: "36px",
    fontFamily: "monospace",
    fontSize: "13px",
    fontWeight: 600,
    whiteSpace: "nowrap",
  },
  modes: {
    default: { transform: "scale(1)", opacity: 0.7 },
    link: { transform: "scale(1.6)", opacity: 1 },
    button: { transform: "scale(1.9)", opacity: 1 },
    text: { transform: "scale(0.9)", opacity: 0.8 },
    input: { transform: "scale(1.4)", opacity: 1 },
    media: { transform: "scale(1.7)", opacity: 0.9 },
  },
  centerModes: {
    default: { width: 8, height: 8, borderRadius: "50%", border: "2px solid" },
    link: {
      width: 14,
      height: 14,
      borderRadius: "50%",
      border: "2px solid",
      boxShadow: true,
    },
    button: { width: 14, height: 14, borderRadius: "3px", background: true },
    text: { width: 3, height: 22, background: true },
    input: { width: 4, height: 26, background: true, boxShadow: true },
    media: { width: 18, height: 18, border: "2px dashed" },
  },
};
