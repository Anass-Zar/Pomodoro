import PomodoroTechnique from "./pomodoro-technique"
import Pomofocus from "./pomofocus"
import UsePomodoroTechnique from "./use-pomodoro-technique"
// import Featrures from './features';
import { useTheme } from '../context/theme-context'; // Adjust the path as necessary
import '../index.css';

const Content = () => {
  const { themeColor } = useTheme();

  const themeColors: Record<'theme-red' | 'theme-blue' | 'theme-green', string> = {
    'theme-red': '#2e0a0a',
    'theme-blue': '#0a0a2e',
    'theme-green': '#0a2e0a',
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-16">
      <h1 style={{ color: themeColors[themeColor], transition: 'background-color 1s ease' }} className="font-semibold text-4xl leading-snug">This is an online Web Site to use the Pomodoro Timer for Free</h1>
      <Pomofocus />
      <PomodoroTechnique />
      <UsePomodoroTechnique />
      {/* <Featrures /> */}
    </div>
  )
}

export default Content