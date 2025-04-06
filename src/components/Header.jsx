import siteLogo from "../assets/logo.svg";
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
      <button onClick={isDarkMode}>
        <img src={lightIcon} alt="light-mode icon" />
      </button>
    </header>
  );
}
