import { useState, useEffect } from "react";
import DensityComponent from "./components/DensityComponent";
import Header from "./components/Header";
import StatsCards from "./components/StatsCards";
import UserInput from "./components/UserInput";

function App() {
  const [charCounter, setCharCounter] = useState({
    totalChar: "",
    totalCharNum: 0,
    wordCount: 0,
    sentenceCount: 0,
  });
  const [theme, setTheme] = useState('dark')
  useEffect(() => {
    if (theme === 'light') {
      document.getElementById('body').classList.add('light')
      document.getElementById('body').classList.remove('dark')

    }
    else {
      document.getElementById('body').classList.add('dark')
      document.getElementById('body').classList.remove('light')

    }
  }, [theme])
  return (
    <article className="font-family   overflow-auto"> 
      <Header theme={theme} setTheme={setTheme} />
      <UserInput setStatsData={setCharCounter} statsData={charCounter} />
      <StatsCards statsData={charCounter} />
      <DensityComponent statsData={charCounter} />
    </article>
  );
}

export default App;
