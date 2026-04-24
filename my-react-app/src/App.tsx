import { useEffect } from "react";
import { supabase } from "./supabaseClient";
import { useState } from "react";
import Flashcard from "./Flashcard";


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

        {words.map((word) => (
          <Flashcard
            key={word.id}
            simplified={word.simplified}
            pinyin={word.pinyin}
            definition={word.definition}  
          />
        ))}
    </div>
  );
}

export default App;