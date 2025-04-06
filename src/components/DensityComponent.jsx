import { useState } from "react";
import LetterInfo from "./LetterInfo";
export default function DensityComponent({ statsData }) {
  const { totalCharNum, totalChar } = statsData;
  // const [letterDensity, setLetterDensity] = useState([]);
  const handleLetterDensity = () => { 
    const letterArr = totalChar.match(/[a-zA-Z]/g) || [];
    console.log(letterArr)
    const letterDensity = {};
    letterArr.forEach((letter)=> {
      letterDensity[letter] = (letterDensity[letter] || 0) + 1
    })
    return Object.entries(letterDensity).map(([letterChar, count]) =>({
        letterChar,
        count,
      
    }))
  };
  const letterDensity = handleLetterDensity();
  
  return (
    <section>
      <h2 className="text-text text-2xl/[130%] font-semibold mb-5">
        Letter Density
      </h2>
      {totalCharNum === 0 ? (
        <p className="text-text text-base/[130%]">
          No characters found. Start typing to see letter density.
        </p>
      ) : (
        <ul>
          {letterDensity.map((letter, index) => {
             return <LetterInfo key={index} totalChar={totalChar} letterCount={letter} />;
          })}
        </ul>
      )}
    </section>
  );
}
