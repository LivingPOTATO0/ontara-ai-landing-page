// src/components/ui/TypewriterText.jsx
import { useState, useEffect } from 'react';

export default function TypewriterText({ words, className = '', speed = 90, pause = 2000 }) {
  const [displayed, setDisplayed] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [waiting, setWaiting] = useState(false);

  useEffect(() => {
    if (waiting) return;
    const currentWord = words[wordIndex];

    if (!deleting && charIndex <= currentWord.length) {
      const timeout = setTimeout(() => {
        setDisplayed(currentWord.slice(0, charIndex));
        setCharIndex(c => c + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }

    if (!deleting && charIndex > currentWord.length) {
      setWaiting(true);
      const timeout = setTimeout(() => {
        setWaiting(false);
        setDeleting(true);
      }, pause);
      return () => clearTimeout(timeout);
    }

    if (deleting && charIndex >= 0) {
      const timeout = setTimeout(() => {
        setDisplayed(currentWord.slice(0, charIndex));
        setCharIndex(c => c - 1);
      }, speed / 2);
      return () => clearTimeout(timeout);
    }

    if (deleting && charIndex < 0) {
      setDeleting(false);
      setCharIndex(0);
      setWordIndex(i => (i + 1) % words.length);
    }
  }, [charIndex, deleting, waiting, wordIndex, words, speed, pause]);

  return (
    <span className={className}>
      {displayed}
      <span className="inline-block w-[3px] h-[0.85em] bg-current ml-1 align-middle animate-pulse" />
    </span>
  );
}
