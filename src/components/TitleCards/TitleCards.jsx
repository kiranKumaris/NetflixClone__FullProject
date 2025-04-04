// import React, { useEffect, useRef, useState } from "react";
// import "./TitleCards.css";
// import cards_data from "../../assets/cards/Cards_data";
// import { Link } from "react-router-dom";

// const TitleCards = ({ title, category }) => {
//   const [apiData, setApiData] = useState([]);
//   const cardsRef = useRef();

//   const options = {
//     method: "GET",
//     headers: {
//       accept: "application/json",
//       Authorization:
//         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NGMyOGI4OTMwMzMyZTM0MWIxNmMyODRlMTA3MDJlZCIsIm5iZiI6MTc0MjkzNDg1Mi4zNjIsInN1YiI6IjY3ZTMxMzQ0M2RiZTNhYjFmMmYwM2Y1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UTg1yX-_nmPswi5J1ZT0AFkSJfVKLNa-ZT4dyFRibxQ",
//     },
//   };

//   const handleWheel = (event) => {
//     event.preventDefault();
//     cardsRef.current.scrollLeft += event.deltaY;
//   };

//   useEffect(() => {
//     fetch(
//       `https://api.themoviedb.org/3/movie/${
//         category ? category : "now_playing"
//       }?language=en-US&page=1`,
//       options
//     )
//       .then((response) => response.json())
//       .then((response) => setApiData(response.results))
//       .catch((err) => console.error(err));

//     cardsRef.current.addEventListener("wheel", handleWheel);
//   }, []);

//   return (
//     <div className="title-cards">
//       <h2>{title ? title : "Popular on Netflix"}</h2>
//       <div className="card-list" ref={cardsRef}>
//         {apiData.map((card, index) => {
//           return (
//             <Link to={`/player/${card.id}`} className="card" key={index}>
//               <img
//                 src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path}
//                 alt=""
//               />
//               <p>{card.original_title}</p>
//             </Link>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default TitleCards;

import React, { useEffect, useRef, useState } from "react";
import "./TitleCards.css";
import { Link } from "react-router-dom";

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef(null);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NGMyOGI4OTMwMzMyZTM0MWIxNmMyODRlMTA3MDJlZCIsIm5iZiI6MTc0MjkzNDg1Mi4zNjIsInN1YiI6IjY3ZTMxMzQ0M2RiZTNhYjFmMmYwM2Y1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UTg1yX-_nmPswi5J1ZT0AFkSJfVKLNa-ZT4dyFRibxQ",
    },
  };

  const handleWheel = (event) => {
    event.preventDefault();
    if (cardsRef.current) {
      cardsRef.current.scrollLeft += event.deltaY;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${
            category ? category : "now_playing"
          }?language=en-US&page=1`,
          options
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setApiData(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    const currentCardsRef = cardsRef.current;
    if (currentCardsRef) {
      currentCardsRef.addEventListener("wheel", handleWheel);
    }

    return () => {
      if (currentCardsRef) {
        currentCardsRef.removeEventListener("wheel", handleWheel);
      }
    };
  }, [category]);

  return (
    <div className="title-cards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => (
          <Link to={`/player/${card.id}`} className="card" key={index}>
            <img
              src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`}
              alt={card.original_title}
            />
            <p>{card.original_title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TitleCards;
