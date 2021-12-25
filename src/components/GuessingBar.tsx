import React, { useEffect, useState } from "react";

interface Props {
  word: string[] | undefined;
}

const GuessingBar: React.FC<Props> = ({ word }) => {
  const [wordArray, setWordArray] = useState<string[][]>([]);

  useEffect(() => {
    const charArray = word!.map((w) => w.split(""));
    setWordArray(charArray);
  }, [word]);

  return (
    <ul className="word">
      {wordArray.length > 0
        ? wordArray.map((charArray, key) => (
            <div key={key}>
              {charArray.map((char, key) => (
                <li
                  key={key}
                  className={char === "_" ? "letter" : "letter correct"}
                >
                  {char === "_" ? "*" : char}
                </li>
              ))}
            </div>
          ))
        : "loading word..."}
    </ul>
  );
};

export default GuessingBar;
