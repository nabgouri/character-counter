import siteLogo from "../assets/Logo.svg";
import lightIcon from "../assets/sun-icon.svg";
export default function Header({ theme, setTheme }) {
  const isDarkMode = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark')
  }
  return (
    <header className="flex items-center justify-between py-4 md:py-5 lg:py-8">
      <a href="/" className="flex items-center gap-2.5  ">
        <img src={siteLogo} alt="" />
        <span className="text-text font-semibold text-lg md:text-2xl leading-[130%] -tracking-[0.75px]">
          Character Counter
        </span>
      </a>
      <button onClick={isDarkMode} className="bg-stroke p-[11px] text-title rounded-[8px] flex items-center justify-center cursor-pointer ">
        {/* <img src={lightIcon} alt="light-mode icon" className="bg-stroke p-[11px] text-title  rounded-[8px]" /> */}
        {theme === 'dark' ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"  viewBox="0 0 24 24" fill="none" stroke="#ffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-sun-icon lucide-sun stroke-title"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg> :<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon-icon lucide-moon stroke-title"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>}
      </button>
    </header>
  );
}
