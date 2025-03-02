import React, { useEffect, useState } from 'react';
import { WebPlaybackSDK } from 'react-spotify-web-playback-sdk';

interface SpotifyPlayerProps {
  trackId: string | null;
  isPlaying: boolean;
  onPlaybackStateChange: (isPlaying: boolean) => void;
}

const SpotifyPlayer: React.FC<SpotifyPlayerProps> = ({ 
  trackId, 
  isPlaying,
  onPlaybackStateChange 
}) => {
  const [token, setToken] = useState<string | null>(null);
  const [player, setPlayer] = useState<Spotify.Player | null>(null);

  // In a real app, you would implement proper Spotify authentication
  // This is a placeholder for demonstration purposes
  useEffect(() => {
    // Simulating token retrieval
    // In a real app, you would get this from your backend after OAuth flow
    setToken("DEMO_TOKEN_PLACEHOLDER");
  }, []);

  useEffect(() => {
    if (!player || !trackId) return;

    if (isPlaying) {
      // In a real implementation, this would play the track
      console.log(`Playing track: spotify:track:${trackId}`);
      // Simulate successful playback
      setTimeout(() => {
        console.log("Track playing");
      }, 500);
    } else {
      // In a real implementation, this would pause the track
      console.log("Pausing playback");
    }
  }, [player, trackId, isPlaying]);

  // This is a mock implementation since we can't actually authenticate with Spotify in this demo
  const getOAuthToken = React.useCallback(
    (callback: (token: string) => void) => {
      if (token) {
        callback(token);
      }
    },
    [token]
  );

  if (!token) {
    return (
      <div className="text-xs text-amber-700 italic mt-2">
        Note: Spotify integration is simulated in this demo. In a real app, you would implement proper Spotify authentication.
      </div>
    );
  }

  return (
    <WebPlaybackSDK
      deviceName="Retro Journal Player"
      getOAuthToken={getOAuthToken}
      volume={0.5}
      connectOnInitialized={true}
      initialDeviceName="Retro Journal"
      initialVolume={0.5}
    >
      <div className="text-xs text-amber-700 italic mt-2">
        {isPlaying && trackId 
          ? `Now playing track ID: ${trackId} (simulated)` 
          : "Music player ready"}
      </div>
    </WebPlaybackSDK>
  );
};

export default SpotifyPlayer;