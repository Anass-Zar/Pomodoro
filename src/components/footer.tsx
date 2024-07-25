import { useTheme } from '../context/theme-context'; // Adjust the path as necessary
import '../index.css';

const Footer = () => {
  const { themeColor } = useTheme();

  const themeColors: Record<'theme-red' | 'theme-blue' | 'theme-green', string> = {
    'theme-red': '#C54141',
    'theme-blue': '#3B82F6',
    'theme-green': '#10B981',
  };

  return (
    <section className="bg-gray-50 border-t border-t-gray-500">
      <div className="w-full max-w-4xl mx-auto px-4 py-8 space-y-7 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-700 text-base">
            Made by <a href="https://anasszarioh.onrender.com" target='_blank' className="font-semibold" style={{ color: themeColors[themeColor], transition: 'background-color 1s ease' }}>Anass Zarioh</a>
          </p>
          <p className="mt-4 text-gray-700 text-base">
            © 2024 Pomodoro Technique. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
