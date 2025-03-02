import React, { useState } from 'react';
import JournalEntryComponent from './JournalEntry';
import { JournalEntry } from '../types';
import YoutubePlayer from './YoutubePlayer';

interface JournalListProps {
  entries: JournalEntry[];
}

const JournalList: React.FC<JournalListProps> = ({ entries }) => {
  const [playingEntry, setPlayingEntry] = useState<JournalEntry | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleContentClick = (entry: JournalEntry) => {
    if (playingEntry?.id === entry.id && isPlaying) {
      // Stop playing if the same entry is clicked again
      setIsPlaying(false);
      setPlayingEntry(null);
    } else {
      // Start playing a new entry
      setPlayingEntry(entry);
      setIsPlaying(true);
    }
  };

  return (
    <div>
      <YoutubePlayer 
        videoUrl={playingEntry?.youtubeUrl || null} 
        isPlaying={isPlaying}
        startTime={playingEntry?.startTime}
        endTime={playingEntry?.endTime}
      />
      
      <div className="mt-8">
        {entries.map(entry => (
          <JournalEntryComponent 
            key={entry.id} 
            entry={entry} 
            isPlaying={isPlaying && playingEntry?.id === entry.id}
            onContentClick={() => handleContentClick(entry)}
          />
        ))}
      </div>
    </div>
  );
};

export default JournalList;