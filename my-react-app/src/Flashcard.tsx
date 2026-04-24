import { useState } from "react";

function Flashcard({ simplified, pinyin, definition }: { simplified: string; pinyin: string; definition: string }) {
  const [isPinyin, setIsPinyin] = useState(false)
  const [learningStatus, setLearningStatus] = useState(0); // 0 = not started, 1 = learning, 2 =  learning, 3 = mastered

  
  function togglePinyin() {
    setIsPinyin(!isPinyin);
  }

  function learningProgress() {
    // Placeholder for future learning progress tracking logic
    learningStatus === 0 && setLearningStatus(1); // Start learning
    return learningStatus === 0 ? "Not started" : learningStatus === 1 ? "Learning" : learningStatus === 2 ? "Almost there" : "Mastered";
  }

  function learningReset() {
    setLearningStatus(0); // Reset learning status
  }

  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '20px', marginBottom: '16px' }}>
      <h2>{simplified}</h2>
      <button onClick={togglePinyin} style={{ marginBottom: '10px' }}>
        {isPinyin ? <p><em>{pinyin}</em></p> : "Show Pinyin"}
      </button>
      <p>{definition}</p>
    </div>
  );
}

export default Flashcard;