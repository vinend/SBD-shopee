// Create a new file: src/BackgroundVideo.jsx
import React, { useEffect } from 'react';

const BackgroundVideo = () => {
  useEffect(() => {
    // This script loads the YouTube IFrame API
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // This function is called by the YouTube API when it's ready
    window.onYouTubeIframeAPIReady = () => {
      new window.YT.Player('youtube-background', {
        videoId: 'gW3sCwEC_xk',
        playerVars: {
          autoplay: 1,
          controls: 0,
          showinfo: 0,
          rel: 0,
          loop: 1,
          playlist: 'gW3sCwEC_xk',
          start: 40,
          end: 60,
          mute: 1,
          modestbranding: 1
        },
        events: {
          onReady: (event) => {
            event.target.playVideo();
            event.target.mute();
          },
          onStateChange: (event) => {
            // If video ends, replay from start time
            if (event.data === window.YT.PlayerState.ENDED) {
              event.target.seekTo(40);
              event.target.playVideo();
            }
          }
        }
      });
    };

    return () => {
      window.onYouTubeIframeAPIReady = null;
    };
  }, []);

  return (
    <div className="fixed inset-0 z-2 pointer-events-none overflow-hidden">
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-[#F48F7B]/70 z-3"></div>
      {/* YouTube container */}
      <div id="youtube-background" className="w-full h-full"></div>
    </div>
  );
};

export default BackgroundVideo;