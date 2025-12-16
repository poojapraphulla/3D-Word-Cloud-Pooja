export interface Keyword {
  word: string;
  weight: number;
}

export async function analyzeArticle(url: string): Promise<Keyword[]> {
  const response = await fetch("http://127.0.0.1:8000/analyze", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ url })
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.detail || "Failed to analyze article");
  }

  return response.json();
}