import { useState } from "react";
import CheckBox from "./CheckBox";
export default function UserInput({ setStatsData, statsData }) {
  const [isSpacesExluded, setIsSpacesEcluded] = useState(false);
  const [CharacterLimit, setCharacterLimit] = useState({
    ischecked: false,
    CharacterLimitNum: null,
  });

  function handleCharCounter(e) {
    setStatsData((prevState) => {
      let wordCount = 0;
      let sentenceCount = 0;
      if (e.target.value.length > 0) {
        wordCount = e.target.value.split(" ").length;
        sentenceCount = e.target.value.split(".").length - 1;
      }
      return {
        ...prevState,
        totalChar: e.target.value,
        totalCharNum: isSpacesExluded
          ? e.target.value.split(" ").join("").length
          : e.target.value.length,
        wordCount: wordCount,
        sentenceCount,
      };
    });
  }
  function handleSpaceChar(e) {
    setIsSpacesEcluded(e.target.checked);
    if (e.target.checked) {
      setStatsData((prevState) => {
        const updatedTotalCharNum = prevState.totalChar
          .split(" ")
          .join("").length;

        return {
          ...prevState,
          totalCharNum: updatedTotalCharNum,
        };
      });
    } else {
      setStatsData((prevState) => {
        return {
          ...prevState,
          totalCharNum: prevState.totalChar.length,
        };
      });
    }
  }
  function handleTimeReading() {
    const { wordCount } = statsData;
    const wordPerMinute = 250;
    const readingTime = wordCount / wordPerMinute;
    if (readingTime === 0) {
      return "0";
    } else if (readingTime < 1) {
      return "<1";
    }
    return Math.ceil(readingTime);
  }
  function handleCharacterLimitChecked(e) {
    setCharacterLimit((prevState) => {
      return {
        ...prevState,
        ischecked: e.target.checked,
      };
    });
  }
  function handleCharacterLimitNum(e) {
    setCharacterLimit((prevState) => {
      return {
        ...prevState,
        CharacterLimitNum: Number(e.target.value),
      };
    });
  }

  return (
    <section>
      <h1 className="my-10 text-title text-balance text-center font-bold text-[2.5rem]/[100%] md:text-[4rem]/[100%] -tracking-[-1px] ">
        Analyze your text in real-time.
      </h1>
      <textarea
        id={
          statsData.totalCharNum === CharacterLimit.CharacterLimitNum
            ? "limitError"
            : ""
        }
        onChange={handleCharCounter}
        placeholder="Start typing here… (or paste your text)"
        className="w-full bg-text-area h-[12.5rem] placeholder:text-text placeholder:text-wrap border-2 rounded-[12px] border-stroke text-text text-[1.25rem]/[140%] p-4  focus:border-[#C27CF8] focus-visible:outline-none "
      ></textarea>
      {statsData.totalCharNum >= CharacterLimit.CharacterLimitNum && CharacterLimit.CharacterLimitNum > 0 &&  (
        <span className="text-[#FE8159] text-base/[130%]">
          Limit reached! Your text exceeds {CharacterLimit.CharacterLimitNum} characters.
        </span>
      )}
      <div className="mt-4 mb-10 flex flex-col gap-y-3 md:flex-row md:items-center md:justify-between  ">
        <div className=" flex flex-col gap-y-3 md:flex-row gap-x-6 md:items-center">
          <CheckBox
            name="spaces"
            handleOnChange={handleSpaceChar}
            label="Exclude Spaces"
          ></CheckBox>
          <CheckBox
            name="character"
            handleOnChange={handleCharacterLimitChecked}
            label="Set Character Limit"
          ></CheckBox>
          {CharacterLimit.ischecked && (
            <input
              className="border-[2px] w-20 text-white leading-[130%] border-[#404254] px-3 py-1 round-[6px]"
              inputMode="numeric"
              type="text"
              pattern="[0-9]*"
              onChange={handleCharacterLimitNum}
              name="number"
            />
          )}
        </div>
        <p className="text-text leading-[130%]  ">
          Approx. reading time: {handleTimeReading()} minute
        </p>
      </div>
    </section>
  );
}
