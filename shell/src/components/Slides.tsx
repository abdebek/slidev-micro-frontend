import React from 'react';

const Slides = () => {
  // Use an environment variable for the URL
  const slidesUrl = import.meta.env.VITE_SLIDES_URL || 'http://localhost:3003';

  return (
    <div className="p-4 md:p-6 lg:p-8 h-full bg-gray-100">
      <div className="w-full h-[calc(100vh-10rem)] border border-gray-200 rounded-lg overflow-hidden shadow-lg bg-white">
        <iframe
          src={slidesUrl}
          className="w-full h-full"
          title="Microfrontends Presentation"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Slides;