import { useEffect } from "react";
import { supabase } from "./supabaseClient";
import { useState } from "react";

function App() {
  const [words, setWords] = useState<any[]>([]);

  useEffect(() => {
    const fetchWords = async () => {
      const { data, error } = await supabase.from("words").select("*");

      if (error) {
        console.error("Error fetching words:", error);
      } else {
        console.log("Fetched words:", data);
        setWords(data || []);
      }
    };

    fetchWords();
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Mandarin Dictionary</h1>
      
      {words.length === 0 && <p>No words found or still loading...</p>}

      <ul>
        {words.map((word, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            <strong>{word.simplified}</strong> ({word.pinyin}) - {word.definition}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;