import React, { useEffect, useState } from "react";
import "./Player.css";
import back_arrow_icon from "../../assets/back_arrow_icon.png";
import { useNavigate, useParams } from "react-router-dom";

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Initialize with null so we can easily check if data is loaded
  const [apiData, setApiData] = useState(null);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NGMyOGI4OTMwMzMyZTM0MWIxNmMyODRlMTA3MDJlZCIsIm5iZiI6MTc0MjkzNDg1Mi4zNjIsInN1YiI6IjY3ZTMxMzQ0M2RiZTNhYjFmMmYwM2Y1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UTg1yX-_nmPswi5J1ZT0AFkSJfVKLNa-ZT4dyFRibxQ",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((response) => {
        // Only set apiData if results exist
        if (response.results && response.results.length > 0) {
          setApiData(response.results[0]);
        }
      })
      .catch((err) => console.error(err));
  }, [id]);

  // Render a fallback while loading data
  if (!apiData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="player">
      <img src={back_arrow_icon} alt="Back" onClick={() => navigate(-1)} />
      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title="trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;
