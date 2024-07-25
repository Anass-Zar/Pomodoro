import { useTheme } from '../context/theme-context'; // Adjust the path as necessary
import '../index.css';

const PomodoroTechnique = () => {
  const { themeColor } = useTheme();

  const themeColors: Record<'theme-red' | 'theme-blue' | 'theme-green', string> = {
    'theme-red': '#2e0a0a',
    'theme-blue': '#0a0a2e',
    'theme-green': '#0a2e0a',
  };
  const themeColors2: Record<'theme-red' | 'theme-blue' | 'theme-green', string> = {
    'theme-red': '#b63838',
    'theme-blue': '#1E3A8A',
    'theme-green': '#065F46',
  };

  return (
    <div className="mt-12">
      <h1 style={{ color: themeColors[themeColor], transition: 'background-color 1s ease' }} className="font-semibold text-2xl" >What is Pomodoro Technique?</h1>
      <p className="text-lg mt-4 text-gray-700 leading-8">
        <span style={{ color: themeColors2[themeColor], transition: 'background-color 1s ease' }} className='font-semibold'>The Pomodoro Technique </span>
        is a time management method developed by Francesco Cirillo in
        the late 1980s. It uses a kitchen timer to break work into intervals, typically
        25 minutes in length, separated by short breaks. Each interval is known as a pomodoro
        , from the Italian word for tomato, after the tomato-shaped kitchen timer Cirillo
        used as a university student.
        <br />
        Apps and websites providing timers and instructions have widely popularized the
        technique. Closely related to concepts such as timeboxing and iterative and
        incremental development used in software design, the method has been adopted
        in pair programming contexts.
      </p>
    </div>
  )
}

export default PomodoroTechnique