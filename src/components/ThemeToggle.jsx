import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className={`relative p-2 rounded-full border transition-all duration-300 flex items-center justify-center cursor-pointer shadow-md ${
        isDark
          ? 'bg-white/5 hover:bg-white/10 border-white/15 text-yellow-400 shadow-yellow-500/10'
          : 'bg-white hover:bg-slate-100 border-slate-300 text-slate-700 shadow-slate-200'
      } ${className}`}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        exit={{ rotate: 90, scale: 0.5, opacity: 0 }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
        className="flex items-center justify-center"
      >
        {isDark ? (
          <Sun size={18} className="text-yellow-400 stroke-[2.2]" />
        ) : (
          <Moon size={18} className="text-indigo-600 stroke-[2.2]" />
        )}
      </motion.div>
    </motion.button>
  );
}
