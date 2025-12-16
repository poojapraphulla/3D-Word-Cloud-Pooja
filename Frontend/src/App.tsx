import { useState } from "react";
import UrlInput from "./components/UrlInput";
import Scene from "./components/Scene";

function App() {
  const [url, setUrl] = useState("");

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <UrlInput url={url} setUrl={setUrl} />
      <Scene />
    </div>
  );
}

export default App;
