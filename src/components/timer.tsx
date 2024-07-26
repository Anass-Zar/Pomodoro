import { useEffect, useMemo, useState } from 'react';
import { useTheme } from '../context/theme-context';
import { LuRefreshCcw } from "react-icons/lu";
import { IoSettingsSharp } from "react-icons/io5";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../index.css';

// Import your audio files
import clickSound from '../assets/click.mp3';
import endSound from '../assets/end.mp3';

const Timer = () => {
  const [timer, setTimer] = useState(1500);
  const { themeColor, setThemeColor } = useTheme();
  const [activeButton, setActiveButton] = useState('Pomodoro');
  const [startAndPause, setStartAndPause] = useState(false);
  const clickAudio = useMemo(() => new Audio(clickSound), []);
  const endAudio = useMemo(() => new Audio(endSound), []);

  const getInitialTime = (buttonName: string) => {
    switch (buttonName) {
      case 'Pomodoro':
        return 1500;
      case 'Short Break':
        return 300;
      case 'Long Break':
        return 900;
      default:
        return 1500;
    }
  };

  const handleButtonClick = (buttonName: string, time: number) => {
    setStartAndPause(false);
    setActiveButton(buttonName);
    setTimer(time);
  };

  const handleButtonRefresh = () => {
    setStartAndPause(false);
    setTimer(getInitialTime(activeButton));
  };

  const handleButtonStartAndPause = () => {
    setStartAndPause(!startAndPause);
    clickAudio.play();
  };

  const handleButtonSettings = () => {
    toast.info("Settings functionality is under development.");
  };

  useEffect(() => {
    if (startAndPause) {
      const interval = setInterval(() => {
        setTimer(prevTimer => {
          if (prevTimer === 1) {
            endAudio.play();
            setStartAndPause(false);
            setTimer(getInitialTime(activeButton));
          }
          return prevTimer > 0 ? prevTimer - 1 : 0;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [startAndPause, activeButton, endAudio]);

  const formatTime = (time: number) => {
    const minutes = String(Math.floor(time / 60)).padStart(2, '0');
    const seconds = String(time % 60).padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  useEffect(() => {
    if (activeButton === 'Pomodoro') {
      setThemeColor('theme-red');
    } else if (activeButton === 'Short Break') {
      setThemeColor('theme-blue');
    } else if (activeButton === 'Long Break') {
      setThemeColor('theme-green');
    }
  }, [activeButton, setThemeColor]);

  const themeColors: Record<'theme-red' | 'theme-blue' | 'theme-green', string> = {
    'theme-red': '#b63838',
    'theme-blue': '#1E3A8A',
    'theme-green': '#065F46',
  };

  return (
    <div
      className="h-[calc(100vh-80px)] flex items-center justify-center"
      style={{ backgroundColor: themeColors[themeColor], transition: 'background-color 1s ease' }}
    >
      <div className="flex flex-col items-center gap-4 mb-10">
        <div className="flex gap-4 font-semibold text-xl">
          <button
            className={`border-2 py-1.5 px-6 rounded-3xl ${activeButton === 'Pomodoro' ? 'bg-gray-100' : ''}`}
            style={{ color: activeButton === 'Pomodoro' ? themeColors[themeColor] : '#f9fafb', transition: 'color 0.5s ease' }}
            onClick={() => handleButtonClick('Pomodoro', 1500)}
          >
            Pomodoro
          </button>
          <button
            className={`border-2 py-1.5 px-6 rounded-3xl ${activeButton === 'Short Break' ? 'bg-gray-100' : ''}`}
            style={{ color: activeButton === 'Short Break' ? themeColors[themeColor] : '#f9fafb', transition: 'color 0.5s ease' }}
            onClick={() => handleButtonClick('Short Break', 300)}
          >
            Short Break
          </button>
          <button
            className={`border-2 py-1.5 px-6 rounded-3xl ${activeButton === 'Long Break' ? 'bg-gray-100' : ''}`}
            style={{ color: activeButton === 'Long Break' ? themeColors[themeColor] : '#f9fafb', transition: 'color 0.5s ease' }}
            onClick={() => handleButtonClick('Long Break', 900)}
          >
            Long Break
          </button>
        </div>
        <div className="font-semibold text-[9rem] text-gray-100">{formatTime(timer)}</div>
        <div className="flex gap-4 font-semibold">
          <button
            onClick={handleButtonStartAndPause}
            className="border-2 border-gray-100 py-2 px-8 rounded-[30px] text-3xl"
            style={{ backgroundColor: startAndPause ? themeColors[themeColor] : '#f9fafb', color: startAndPause ? '#f9fafb' : themeColors[themeColor], transition: 'background-color 1s ease, color 1s ease' }}
          >
            {startAndPause ? 'Pause' : 'Start'}
          </button>
          <button onClick={handleButtonRefresh}>
            <LuRefreshCcw className='text-gray-50 text-5xl' />
          </button>
          <button onClick={handleButtonSettings}>
            <IoSettingsSharp className='text-gray-50 text-5xl' />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Timer;
