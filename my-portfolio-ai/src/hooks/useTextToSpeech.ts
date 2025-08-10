import { useState, useEffect } from "react";

export default function useTextToSpeech() {
  const [speaking, setSpeaking] = useState(false);

  const speak = (text: string) => {
    if (!("speechSynthesis" in window)) {
      alert("Sorry, your browser does not support speech synthesis.");
      return;
    }
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.onstart = () => setSpeaking(true);
    utterance.onend = () => setSpeaking(false);
    window.speechSynthesis.speak(utterance);
  };

  return { speak, speaking };
}
