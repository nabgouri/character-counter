export default function LetterInfo({ letterCount, totalChar }) {
  const { letterChar, count } = letterCount;
  const totalLetter = totalChar.split(' ').join('').match(/[a-zA-Z]/g).join('').length
  let percentageCount = Number.isInteger(((count / totalLetter) * 100)) ? ((count / totalLetter) * 100) : ((count / totalLetter) * 100).toFixed(4)
  return (
    <li className='flex gap-[.875rem] items-center w-full '>
      <div className='w-[1rem]'><p className='text-text '>{letterChar.toUpperCase()}</p></div>
      <div className=' flex-1  h-[12px]  bg-text-area rounded-full'>
        <div style={{ "--width": `${percentageCount}%` }} className='rounded-full w-(--width) bg-[#D3A0FA] h-full'></div>
      </div>
      <span
        className="text-text inline-flex">
        {count} ({percentageCount}%)
      </span>
    </li>
  );
}
