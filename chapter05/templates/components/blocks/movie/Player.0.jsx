export const Player = ({ movie }) => (
  <div className="movie-box">
    <iframe
      width="560"
      height="315"
      frameBorder="0"
      src={`https://www.youtube.com/embed/${movie.videoID}`}
      allow="accelerometer; autoplay; clipboard-write; 
             encrypted-media; gyroscope; 
             picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  </div>
);
