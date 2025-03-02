export interface JournalEntry {
  id: string;
  content: string;
  date: string;
  youtubeUrl: string;
  startTime?: number;
  endTime?: number;
}