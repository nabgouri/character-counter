import StatsCard from "./StatsCard";

export default function StatsCards({ statsData }) {
  const { totalCharNum, wordCount, sentenceCount } = statsData;
  const stats = [
    {
      statTitle: "Total Characters",
      statValue: totalCharNum,
      backgroundColor: "#d3a0fa",
    },
    {
      statTitle: "Word Count",
      statValue: wordCount,
      backgroundColor: "#ff9f00",
    },
    {
      statTitle: "Sentence Count",
      statValue: sentenceCount,
      backgroundColor: "#fe8159",
    },
  ];
  return (
    <ul className="flex flex-col md:flex-row gap-4 mb-6 overlay-shape ">
      {stats.map((stat, index) => {
        return <StatsCard key={index} stat={stat} />;
      })}
    </ul>
  );
}
