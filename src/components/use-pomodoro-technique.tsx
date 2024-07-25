import { useTheme } from '../context/theme-context'; // Adjust the path as necessary
import '../index.css';

const UsePomodoroTechnique = () => {
  const { themeColor } = useTheme();

  const themeColors: Record<'theme-red' | 'theme-blue' | 'theme-green'  , string> = {
    'theme-red': '#2e0a0a',
    'theme-blue': '#0a0a2e',
    'theme-green': '#0a2e0a',

  };

  return (
    <div className="mt-12">
      <h1 style={{ color: themeColors[themeColor], transition: 'background-color 1s ease' }} className="font-semibold text-2xl">What is Pomodoro Technique?</h1>
      <ol className="pl-5 list-decimal text-lg mt-4 text-gray-700 leading-10">
        <li><span style={{ color: themeColors[themeColor], transition: 'background-color 1s ease' }} className="font-semibold">Choose a Task:</span> Decide on the task you want to work on.</li>
        <li><span style={{ color: themeColors[themeColor], transition: 'background-color 1s ease' }} className="font-semibold">Set the Timer:</span> Set a timer for 25 minutes (one Pomodoro).</li>
        <li><span style={{ color: themeColors[themeColor], transition: 'background-color 1s ease' }} className="font-semibold">Work:</span> Focus on the task and work on it until the timer rings. Avoid distractions and stay concentrated on the task at hand.</li>
        <li><span style={{ color: themeColors[themeColor], transition: 'background-color 1s ease' }} className="font-semibold">Short Break:</span> Take a short break, typically 5 minutes.</li>
        <li><span style={{ color: themeColors[themeColor], transition: 'background-color 1s ease' }} className="font-semibold">Repeat:</span> Repeat steps 2-4. After four Pomodoros, take a longer break, usually 15-30 minutes.</li>
      </ol>
    </div>
)
}

export default UsePomodoroTechnique