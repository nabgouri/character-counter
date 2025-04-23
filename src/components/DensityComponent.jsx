import { useState } from "react";
import LetterInfo from "./LetterInfo";
import { ChevronDown, ChevronUp } from "lucide-react";
export default function DensityComponent({ statsData }) {
  const { totalCharNum, totalChar } = statsData;
  const [showMore, setShowMore] = useState(false);
  
  const handleLetterDensity = () => { 
    const letterArr = totalChar.match(/[a-zA-Z]/g) || [];
    const letterDensity = {};
    letterArr.forEach((letter)=> {
      letterDensity[letter] = (letterDensity[letter] || 0) + 1
    })
    return Object.entries(letterDensity).map(([letterChar, count]) =>({
        letterChar,
        count,
      
    }))
  };
  const letterDensity = handleLetterDensity().sort((a, b) => {
    return b.count - a.count;
  }
  );
  
  const handleSeeMore = () => {
    setShowMore(!showMore);
  };
  return (
    <section className="mb-[64px]">
      <h2 className="text-text text-2xl/[130%] font-semibold mb-5">
        Letter Density
      </h2>
      {totalCharNum === 0 ? (
        <p className="text-text text-base/[130%]">
          No characters found. Start typing to see letter density.
        </p>
      ) : letterDensity.length > 5?  (
        <>
          <ul>
          {showMore ? letterDensity.map((letter, index) => {
             return <LetterInfo key={index} totalChar={totalChar} letterCount={letter} />;
          }) : letterDensity.slice(0,5).map((letter, index) => {
               return <LetterInfo key={index} totalChar={totalChar} letterCount={letter} />;
            })}
          </ul>
        <button className="text-text cursor-pointer mt-[20px] flex items-center gap-2 " onClick={handleSeeMore}>See {showMore ? 'Less'  : 'More'} { showMore ? <ChevronUp /> : <ChevronDown /> } </button>
          
        </>
      ): (
        <>
          <ul>
          {letterDensity.map((letter, index) => {
             return <LetterInfo key={index} totalChar={totalChar} letterCount={letter} />;
          })}
                </ul>
          
        </>

      )}
    </section>
  );
}
