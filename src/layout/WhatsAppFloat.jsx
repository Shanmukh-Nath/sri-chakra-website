import { useEffect, useState } from "react";
import { FaWhatsapp, FaFilePdf } from "react-icons/fa";

const messages = [
  "👋 Need steel solutions? Chat with us",
  "💬 Have a project query? We’re on WhatsApp",
  "⚡ Instant support for steel fabrication",
  "🤝 Let’s discuss your steel requirements",

  // New additions 👇
  "🏗️ Talk to our steel experts in seconds",
  "😊 We’re just a message away for your project",
  "🟢 Online now — discuss your requirements",
  "📞 Prefer chat? WhatsApp Sri Chakra Industries",
  "🚀 Quick responses from our technical team",
  "💡 Need guidance on steel products? Ask us",
  "🏭 Planning a project? Chat with us now",
  "🌱 Looking for durable steel solutions? Let’s talk",
  "📦 Product & dispatch support — chat here",
  "👨‍💼 Connect with our project team instantly",
  "💚 Reliable support from steel professionals",
  "⚡ Fast answers for fabrication & supply",
  "🤗 We’re happy to assist — tap to chat",
  "📲 Your steel queries, answered quickly",
  "🗨️ Start a conversation with our team",

  "🏗️ Talk to us about roof sheets & barriers",
  "🟢 We’re active now — share your requirement",
  "💬 Got tender or contract questions? Ask us",
  "⚡ Fast quotes, expert support",
  "🤝 Trusted steel solutions, real people",
  "🚧 Need highway crash barriers? Chat here",
  "🚆 Railway project support — message us",
  "🏭 Curious about our manufacturing capacity? Chat now",
  "👋 Say hello to Sri Chakra Industries",
  "💚 Strength, quality & support you can trust",
  "📞 Skip the call — discuss on WhatsApp",
  "🗨️ Message us for project assistance",
  "🚀 Get instant replies from our team",
  "🤗 We’d be glad to work with you",
  "📲 Start your project discussion in one tap",
  "🧠 Need technical clarity? We’re here",
  "💡 Ask us about steel fabrication",
  "🟢 Available now for project discussions",
  "🤝 Let’s build something strong together",
  "⚡ Steel solutions are just a tap away",
];

const WhatsAppFloat = () => {
  const phoneNumber = "919542111985";
  const message = encodeURIComponent("Hi");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  const [showPopup, setShowPopup] = useState(true);
  const [popupText, setPopupText] = useState("👋 Hello! Click here to chat");

  useEffect(() => {
    // Hide initial popup after 6 seconds
    const initialTimer = setTimeout(() => {
      setShowPopup(false);
    }, 6000);

    // Show popup every 45 seconds with different message
    const interval = setInterval(() => {
      const random = messages[Math.floor(Math.random() * messages.length)];
      setPopupText(random);
      setShowPopup(true);

      setTimeout(() => {
        setShowPopup(false);
      }, 6000);
    }, 10000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {/* Popup */}
      {showPopup && <div style={styles.popup}>{popupText}</div>}
      {/* Brochure Button */}
      {/* <a
        href={brochureUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View Brochure"
        style={styles.brochureButton}
      >
        <FaFilePdf style={styles.brochureIcon} />
      </a> */}

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        style={styles.button}
      >
        <FaWhatsapp style={styles.icon} />
      </a>

      {/* Keyframes */}
      <style>
        {`
          @keyframes whatsappPulse {
            0% {
              box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.6);
            }
            70% {
              box-shadow: 0 0 0 18px rgba(37, 211, 102, 0);
            }
            100% {
              box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
            }
          }

          @keyframes slideFade {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </>
  );
};

const styles = {
  button: {
    position: "fixed",
    bottom: "24px",
    right: "24px",
    width: "58px",
    height: "58px",
    borderRadius: "50%",
    backgroundColor: "#25D366",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
    cursor: "pointer",
    animation: "whatsappPulse 2.5s infinite",
    textDecoration: "none",
  },
  icon: {
    color: "#ffffff",
    fontSize: "32px",
  },
  brochureButton: {
    position: "fixed",
    bottom: "96px", // sits above WhatsApp button
    right: "24px",
    width: "52px",
    height: "52px",
    borderRadius: "50%",
    backgroundColor: "#E53935", // PDF red
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
    cursor: "pointer",
    textDecoration: "none",
    boxShadow: "0 6px 18px rgba(0,0,0,0.2)",
    transition: "transform 0.2s ease",
  },

  brochureIcon: {
    color: "#ffffff",
    fontSize: "26px",
  },

  popup: {
    position: "fixed",
    bottom: "38px",
    right: "96px",
    backgroundColor: "#ffffff",
    color: "#1a1a1a",
    padding: "10px 14px",
    borderRadius: "10px",
    fontSize: "14px",
    fontWeight: 500,
    boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
    zIndex: 9999,
    animation: "slideFade 0.4s ease-out",

    /* 🔑 AUTO WIDTH MAGIC */
    width: "fit-content",
    maxWidth: "280px",
    whiteSpace: "normal",
    wordBreak: "break-word",
  },
};

export default WhatsAppFloat;
