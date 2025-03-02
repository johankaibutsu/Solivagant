import React from 'react';
import { Book } from 'lucide-react';
import JournalList from './components/JournalList';
import ThemeToggle from './components/ThemeToggle';
import { journalEntries } from './data/journalEntries';
import { useTheme } from './hooks/useTheme';

function App() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
        <header className="flex justify-between items-center mb-8 sm:mb-12">
          <div className="flex items-center">
            <Book className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700 dark:text-gray-300 mr-2" />
            <h1 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-gray-200">Journal</h1>
          </div>
          <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
        </header>
        
        <main>
          <JournalList entries={journalEntries} />
        </main>
        
        <footer className="mt-12 sm:mt-16 text-center text-gray-500 dark:text-gray-400 text-sm">
          <p>© 2025</p>
        </footer>
      </div>
    </div>
  );
}

export default App;