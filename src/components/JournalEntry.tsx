import React from 'react';
import { JournalEntry as JournalEntryType } from '../types';
import { Music } from 'lucide-react';

interface JournalEntryProps {
  entry: JournalEntryType;
  isPlaying: boolean;
  onContentClick: () => void;
}

const JournalEntry: React.FC<JournalEntryProps> = ({ 
  entry, 
  isPlaying,
  onContentClick 
}) => {
  return (
    <div className="mb-4 sm:mb-6 py-3 sm:py-4 border-b dark:border-gray-700 border-gray-200">
      <div className="flex flex-col sm:flex-row sm:items-start">
        <div className="w-full sm:w-1/4 text-sm sm:text-base text-gray-500 dark:text-gray-400 mb-1 sm:mb-0">
          {entry.date}
        </div>
        <div 
          className={`w-full sm:w-3/4 text-sm sm:text-base whitespace-pre-line cursor-pointer ${
            isPlaying 
              ? 'text-gray-900 dark:text-gray-100' 
              : 'text-gray-600 dark:text-gray-400'
          }`}
          onClick={onContentClick}
        >
          {isPlaying && (
            <Music className="inline-block mr-2 h-3 w-3 sm:h-4 sm:w-4 animate-pulse" />
          )}
          {entry.content}
        </div>
      </div>
    </div>
  );
};

export default JournalEntry;