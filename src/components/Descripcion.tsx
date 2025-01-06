import React, { useState, useEffect } from "react";
import Img from "../components/Img";

const Descripcion = () => {
  const terms = [
    { text: "Developer", gradient: "text-red-800" },
    { text: "Designer", gradient: "text-gray-500" },
  ];

  const [currentTermIndex, setCurrentTermIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    let timeout;

    const handleTyping = () => {
      const fullText = terms[currentTermIndex].text;

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
        return;
      }

      if (isDeleting && text === "") {
        setIsDeleting(false);
        setCurrentTermIndex((prevIndex) => (prevIndex + 1) % terms.length);
        return;
      }

      if (isDeleting) {
        setText((prevText) => prevText.slice(0, -1));
        setSpeed(50);
      } else {
        setText((prevText) => fullText.slice(0, prevText.length + 1));
        setSpeed(150);
      }
    };

    timeout = setTimeout(handleTyping, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, currentTermIndex, speed, terms]);

  return (
    <main className="flex flex-col md:flex-row justify-start md:justify-center items-center min-h-screen text-white max-w-4xl mx-auto px-6 space-y-6 md:space-y-0 md:space-x-6 mt-20 md:mt-5 lg:-mt-60 ">
     
      <Img />
      <div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white font-semibold">
          Hello, It's{" "}
          <span className="text-red-800 font-semibold">Lionel</span>
        </h1>
        <h2 className="text-4xl font-semibold">
          I'm a&nbsp;
          <span
            className={`inline-block font-semibold ${terms[currentTermIndex].gradient}`}
          >
            {text}
          </span>
          <span className="inline-block w-1 h-8 bg-white ml-1 animate-blink font-semibold"></span>
        </h2>
      </div>
    </main>
  );
};

export default Descripcion;
