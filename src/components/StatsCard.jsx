export default function StatsCard({ stat }) {
  const { statTitle, statValue, backgroundColor } = stat;
  // const pseudoVariant = `marker:content-[url(${shapeUrl})]`;
  return (
    <li
      className={`px-5 py-[27px] rounded-xl relative w-full   `}
      style={{ backgroundColor: `${backgroundColor}` }}
    >
      <span className="text-background text-[2.5rem]/[100%] md:text-[4rem]/[100%] font-bold ">
        {statValue}
      </span>
      <h2 className="text-xl/[140%] -tracking-[0.6px] text-background mt-2">
        {statTitle}
      </h2>
    </li>
  );
}
