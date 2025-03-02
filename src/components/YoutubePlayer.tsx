import React, { useEffect, useRef } from 'react';

interface YoutubePlayerProps {
  videoUrl: string | null;
  isPlaying: boolean;
  startTime?: number;
  endTime?: number;
}

const YoutubePlayer: React.FC<YoutubePlayerProps> = ({ 
  videoUrl, 
  isPlaying,
  startTime = 0,
  endTime
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (!videoUrl || !isPlaying || !iframeRef.current) return;
    
    // Add start time parameter and volume parameter (50%)
    let embedUrl = `${videoUrl}?autoplay=1&start=${startTime}`;
    
    // Add end time parameter if provided
    if (endTime) {
      embedUrl += `&end=${endTime}`;
    }
    
    iframeRef.current.src = embedUrl;
    
    return () => {
      if (iframeRef.current) {
        iframeRef.current.src = '';
      }
    };
  }, [videoUrl, isPlaying, startTime, endTime]);

  return (
    <div className="hidden">
      <iframe
        ref={iframeRef}
        width="1"
        height="1"
        title="YouTube background player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  );
};

export default YoutubePlayer;