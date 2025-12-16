import { motion } from "framer-motion";
import { sampleUrls } from "../data/sampleUrls";

interface UrlInputProps {
  url: string;
  setUrl: (url: string) => void;
}

export default function UrlInput({ url, setUrl }: UrlInputProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        position: "absolute",
        top: 30,
        left: "50%",
        transform: "translateX(-50%)",
        width: "60%",
        maxWidth: 800,
        zIndex: 10
      }}
    >
      <input
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter a news article URL..."
        style={{
          width: "100%",
          padding: "14px 18px",
          borderRadius: 12,
          border: "none",
          fontSize: 16,
          outline: "none",
          background: "#020617",
          color: "white",
          boxShadow: "0 0 0 1px #1e293b"
        }}
      />

      <div style={{ marginTop: 10, display: "flex", gap: 8 }}>
        {sampleUrls.map((sample, idx) => (
          <button
            key={idx}
            onClick={() => setUrl(sample)}
            style={{
              padding: "6px 10px",
              fontSize: 12,
              borderRadius: 8,
              border: "none",
              cursor: "pointer",
              background: "#1e293b",
              color: "#cbd5f5"
            }}
          >
            Sample {idx + 1}
          </button>
        ))}
      </div>
    </motion.div>
  );
}
