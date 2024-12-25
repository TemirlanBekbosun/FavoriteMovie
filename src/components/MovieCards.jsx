import styled from "styled-components";
import React, { useState } from "react";
import moviefilmone from "../assets/Film1.svg";
import moviefilmotwo from "../assets/Film2.svg";
import moviefilmthree from "../assets/Film3.svg";
import moviefilmfourth from "../assets/Film4.svg";
import moviefilmfifth from "../assets/Film5.svg";
import moviefilmsixth from "../assets/Film6.svg";
import moviefilmseventh from "../assets/Film7.svg";
import moviefilmeighth from "../assets/Films8.svg";
import moviefilmninth from "../assets/Films9.svg";
import moviefilmtenth from "../assets/Films10.svg";
import moviefilmeleventh from "../assets/Films11.svg";
import moviefilmtwelfth from "../assets/Films12.svg";
import moviefilmthirteenth from "../assets/Films13.svg";
import moviefilmfourteenth from "../assets/Films14.svg";
import moviefilmfifteenth from "../assets/Films15.svg";

import moviefilmsixteenth from "../assets/Films16.svg";

export default function MovieCards() {
  const [movies, setMovies] = useState([
    { img: moviefilmone, id: 1, title: "THE MOTHER", stars: "4/5 " },
    { img: moviefilmotwo, id: 2, title: "BLOCK BUSTER", stars: "3/5 " },
    { img: moviefilmthree, id: 3, title: "RDX", stars: "5/5 " },
    { img: moviefilmfourth, id: 4, title: "the PERFECTION", stars: "4/5 " },
    { img: moviefilmfifth, id: 5, title: "EXTRACTION", stars: "5/5 " },
    { img: moviefilmsixth, id: 6, title: "THANDHIRAM", stars: "5/5 " },
    { img: moviefilmseventh, id: 7, title: "the IRISHMAN", stars: "4/5 " },
    { img: moviefilmeighth, id: 8, title: "LIFE", stars: "4/5 " },
    { img: moviefilmninth, id: 9, title: "PATHAAN", stars: "3/5 " },
    { img: moviefilmtenth, id: 10, title: "ECHOES", stars: "4/5 " },
    { img: moviefilmeleventh, id: 11, title: " PEAKY BLINDERS", stars: "5/5 " },
    { img: moviefilmtwelfth, id: 12, title: "SHADOW BONE", stars: "4/5 " },
    { img: moviefilmthirteenth, id: 13, title: "BELST", stars: "5/5 " },
    { img: moviefilmfourteenth, id: 14, title: "83", stars: "5/5 " },
    { img: moviefilmfifteenth, id: 15, title: "GRAY MAN", stars: "4/5 " },
    { img: moviefilmsixteenth, id: 16, title: "MONEY HEIST", stars: "5/5 " },
  ]);

  const handleDelete = (id) => {
    setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id));
  };

  return (
    <StiledMovieCard>
      {movies.map((movie) => (
        <div key={movie.id}>
          <KinoPhoto src={movie.img} alt="moviesphotos" />
          <div>
            <StiledMovieh2>
              <h2>{movie.title}</h2>
            </StiledMovieh2>
            <div>
              <StiledMovieP>
                <p>{movie.stars}</p>
              </StiledMovieP>
              <StiledMovieButtons>
                <StiledMovieButton onClick={() => handleDelete(movie.id)}>
                  DELETE
                </StiledMovieButton>
                <StiledMovieButtontwo>EDIT</StiledMovieButtontwo>
              </StiledMovieButtons>
            </div>
          </div>
        </div>
      ))}
    </StiledMovieCard>
  );
}
const StiledMovieCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  h2 {
    color: #ffffff;
    font-family: Inter;
    font-size: 15px;
    line-height: normal;
    text-align: left;
  }
  p {
    color: #ffffff;
    font-family: Inter;
    font-size: 12px;
    line-height: normal;
    text-align: left;
  }
`;
const KinoPhoto = styled.img`
  mask-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1) 5%,
    rgba(0, 0, 0, 0) 100%
  );
  -webkit-mask-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1) 5%,
    rgba(0, 0, 0, 0) 100%
  );
`;

const StiledMovieh2 = styled.div`
  display: flex;
  justify-content: center;
`;
const StiledMovieP = styled.div`
  display: flex;
  justify-content: center;
`;
const StiledMovieButton = styled.button`
  width: 60px;
  height: 20px;
  border-radius: 4px;
  background-color: #ff0000;
  border: none;
  color: white;
  &:hover {
    box-shadow: 0px 0px 80px 1px #e93131;
    transition: all 0.4s;
  }
  cursor: pointer;

  color: #ffffff;
  font-family: Inter;
  font-size: 10px;
  line-height: normal;
  text-align: center;
  font-weight: 600;
`;
const StiledMovieButtontwo = styled.button`
  width: 35px;
  height: 20px;
  border-radius: 4px;
  background-color: white;
  border: none;
  color: black;
  &:hover {
    box-shadow: 0px 0px 20px 2px gray;
    transition: all 0.4s;
  }
  cursor: pointer;
  color: black;
  font-family: Inter;
  font-size: 10px;
  line-height: normal;
  text-align: center;
  font-weight: 600;
`;
const StiledMovieButtons = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
