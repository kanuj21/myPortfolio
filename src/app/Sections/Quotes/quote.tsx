'use client'

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import quotes from "@/app/Data/quote"; // Ensure this is an array of strings

const Quotes: React.FC = () => {
  const [index, setIndex] = useState<number>(
    Math.floor(Math.random() * quotes.length)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      let newIndex: number;
      do {
        newIndex = Math.floor(Math.random() * quotes.length);
      } while (newIndex === index); // Ensures no consecutive duplicates

      setIndex(newIndex);
    }, 10000); // Change quote every 10 seconds

    return () => clearInterval(interval);
  }, [index]); // Depend on index so that effect runs on change

  return (
    <div className="flex justify-center items-center h-32 text-center p-4">
      <motion.div
        key={index}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-slate-400 drop-shadow-md opacity-80 md:opacity-50 md:text-5xl text-lg font-mono">
          &quot;{quotes[index]}&quot;
        </h1>
      </motion.div>
    </div>
  );
};

export default Quotes;
