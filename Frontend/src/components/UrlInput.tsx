import { motion } from "framer-motion";
import React from "react";
import { sampleUrls } from "../data/sampleUrls";

interface UrlInputProps {
  url: string;
  setUrl: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: () => void;
  loading: boolean;
  error: string | null;
}

const UrlInput: React.FC<UrlInputProps> = ({
  url,
  setUrl,
  onSubmit,
  loading,
  error,
}) => {
  return (
    <div className="ui-overlay">
      <motion.div 
        className="glass-panel"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.input
          className="url-input"
          type="text"
          value={url}
          placeholder="Paste article URL here..."
          disabled={loading}
          onChange={(e) => setUrl(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") onSubmit();
          }}
        />

      {/* Sample URL "Data Chips" */}
      <div className="sample-grid">
        {sampleUrls.map((sample, index) => (
          <motion.button
            key={index}
            type="button"
            className="sample-card" // CHANGED: New class name
            disabled={loading}
            onClick={() => setUrl(sample.url)}
            whileHover={{ scale: 1.02 }} // Subtle scale
            whileTap={{ scale: 0.98 }}
          >
            {/* We added a span for specific text styling */}
            <span className="sample-text">{sample.label}</span>
          </motion.button>
        ))}
      </div>

        <motion.button
          className="analyze-btn"
          onClick={onSubmit}
          disabled={loading}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {loading ? "Analyzing Context..." : "Generate Cloud"}
        </motion.button>

        {error && (
          <motion.p
            className="error-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Error: {error}
          </motion.p>
        )}
      </motion.div>
    </div>
  );
};

export default UrlInput;