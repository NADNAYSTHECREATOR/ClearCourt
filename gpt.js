async function getGeminiResponse(text) {
  const apiKey = AIzaSyDjz-O7bHDY6hTTj51czVHeK_b-yZL2w5I; 
  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`;

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [{ text: `Explain this legal document in plain English:\n\n${text}` }] }]
    }),
  });

  const data = await response.json();
  return data?.candidates?.[0]?.content?.parts?.[0]?.text || "No explanation returned.";
}
