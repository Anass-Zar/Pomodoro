import { useTheme } from '../context/theme-context'; // Adjust the path as necessary
import Logo from "../images/Pomodoro-Technique-Logo.png";
import '../index.css';

const Navbar = () => {
  const { themeColor } = useTheme();

  const themeColors: Record<'theme-red' | 'theme-blue' | 'theme-green', string> = {
    'theme-red': '#b63838',
    'theme-blue': '#1E3A8A',
    'theme-green': '#065F46',
  };

  return (
    <div style={{ backgroundColor: themeColors[themeColor], transition: 'background-color 1s ease' }}>
      <div className="w-full max-w-6xl mx-auto pt-8">
        <div className="flex items-center gap-2" >
          <img src={Logo} alt="Pomodoro Technique Logo" className="size-12" />
          <h1 className="text-xl font-semibold text-gray-50">Pomodoro Technique</h1>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
