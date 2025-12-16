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
    <div className="url-input-wrapper">
      {/* Input Field */}
      <motion.input
        className="url-input"
        type="text"
        value={url}
        placeholder="Enter a news article URL..."
        disabled={loading}
        onChange={(e) => setUrl(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") onSubmit();
        }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      />

      {/* Sample URL Buttons */}
      <div className="sample-buttons">
        {sampleUrls.map((sample, index) => (
          <motion.button
            key={index}
            type="button"
            className="sample-btn"
            disabled={loading}
            onClick={() => setUrl(sample)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Sample {index + 1}
          </motion.button>
        ))}
      </div>

      {/* Analyze Button */}
      <motion.button
        className="analyze-btn"
        onClick={onSubmit}
        disabled={loading}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {loading ? "Analyzing..." : "Analyze"}
      </motion.button>

      {/* Error Message */}
      {error && (
        <motion.p
          className="error-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {error}
        </motion.p>
      )}
    </div>
  );
};

export default UrlInput;