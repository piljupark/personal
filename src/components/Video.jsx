import React from "react";

function Video({ videoId }) {
    const src = `https://player.vimeo.com/video/${945203743}?autoplay=1&muted=1&loop=1`;

    return (
      <section id="video">
        <iframe
          src={src}
          width="1920"
          height="1080"
          title="Vimeo Video add"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
      </section>
    );
  }
  
  export default Video;