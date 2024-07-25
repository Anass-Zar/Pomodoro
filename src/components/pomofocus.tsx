import { useTheme } from '../context/theme-context'; // Adjust the path as necessary
import '../index.css';

const Pomofocus = () => {
  const { themeColor } = useTheme();

  const themeColors: Record<'theme-red' | 'theme-blue' | 'theme-green', string> = {
    'theme-red': '#2e0a0a',
    'theme-blue': '#0a0a2e',
    'theme-green': '#0a2e0a',
  };

  return (
    <div className="mt-12">
      <h1 style={{ color: themeColors[themeColor], transition: 'background-color 1s ease' }} className="font-semibold text-2xl">What is Pomofocus?</h1>
      <p className="text-lg mt-4 text-gray-700 leading-8">
        Pomofocus is a web-based Pomodoro timer app designed to help 
        users stay focused and productive. The Pomodoro Technique is 
        a time management method that involves working for a set period
        , typically 25 minutes, followed by a short break, usually 5
        minutes. After completing four work sessions, or "Pomodoros,"
        a longer break of 15-30 minutes is taken.
        <br />
        Pomofocus provides a simple and intuitive interface to implement
        this technique, allowing users to customize their work and break
        intervals according to their preferences. It can be used to
        manage tasks, track productivity, and improve time management skills.
      </p>
    </div>
  )
}

export default Pomofocus