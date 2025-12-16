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
      console.log("Keywords from backend:", result);
      setKeywords(result);
    } catch (err) {
      if (err instanceof Error) setError(err.message);
      else setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <UrlInput
        url={url}
        setUrl={setUrl}
        onSubmit={handleAnalyze}
        loading={loading}
        error={error}
      />
      <Scene/>
    </div>
  );
}

export default App;
