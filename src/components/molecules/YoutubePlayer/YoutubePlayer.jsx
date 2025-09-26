import React from "react";

const YouTubePlayer = ({ url }) => {
  if (!url) return null;

  // Extract videoId from YouTube URL
  let videoId = "";
  if (url.includes("v=")) {
    videoId = url.split("v=")[1]?.split("&")[0];
  } else if (url.includes("youtu.be/")) {
    videoId = url.split("youtu.be/")[1];
  }

  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="mt-6 w-full">
      <h2 className="text-2xl font-bold text-[#5A3E1B] mb-3">Video Tutorial</h2>

      {/* Responsive container for iframe */}
      <div className="relative w-full pb-[56.25%] overflow-hidden rounded-lg shadow-md">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={embedUrl}
          title="Recipe Tutorial"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default YouTubePlayer;
