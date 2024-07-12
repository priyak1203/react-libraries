import { useGlobalContext } from '../context';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();

  return (
    <section>
      <button onClick={toggleDarkTheme}>
        {isDarkTheme ? <BsFillSunFill /> : <BsFillMoonFill />}
      </button>
    </section>
  );
};

export default ThemeToggle;
