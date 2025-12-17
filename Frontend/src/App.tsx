import { useState } from "react";
import UrlInput from "./components/UrlInput";
import Scene from "./components/Scene";
import { analyzeArticle } from "./api/analyze";
import type { Keyword } from "./api/analyze";

function App() {
  const [url, setUrl] = useState("");
  const [keywords, setKeywords] = useState<Keyword[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = async () => {
    if (!url.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const result = await analyzeArticle(url);
      setKeywords(result);
    } catch (err) {
      if (err instanceof Error) setError(err.message);
      else setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ position: 'relative', height: "100vh", width: "100vw", background: '#050505' }}>
      
      {/* 1. UI Layer */}
      <UrlInput
        url={url}
        setUrl={setUrl}
        onSubmit={handleAnalyze}
        loading={loading}
        error={error}
      />

      {/* 2. 3D Scene Layer */}
      <Scene keywords={keywords} />
      
    </div>
  );
}

export default App;