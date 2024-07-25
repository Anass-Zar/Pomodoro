import { useState, useEffect } from 'react';
import Content from "../components/content";
import Timer from "../components/timer";
import { TiArrowSortedUp } from "react-icons/ti";
import { useTheme } from '../context/theme-context';

const Home = () => {
  const [showButton, setShowButton] = useState(false);
  const { themeColor } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 700) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const themeColors: Record<'theme-red' | 'theme-blue' | 'theme-green', string> = {
    'theme-red': '#b63838',
    'theme-blue': '#1E3A8A',
    'theme-green': '#065F46',
  };

  return (
    <div className="bg-gray-50 relative min-h-screen">
      <Timer />
      <Content />
      {showButton && (
        <button style={{ backgroundColor: themeColors[themeColor], transition: 'background-color 1s ease' }} className="fixed right-10 bottom-10 p-2 rounded-lg" onClick={scrollToTop} >
          <TiArrowSortedUp className="text-gray-50 text-3xl" />
        </button>
      )}
    </div>
  );
};

export default Home;
