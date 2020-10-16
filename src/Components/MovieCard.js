import React from "react";
import RateMovie from "./RateMovie";
import {Link} from "react-router-dom";

const MovieCard = ({ movie: { id, title, description, posterurl,rate, trailer} }) => {
  return (
    <div className="container">
      <div>
        <img src={posterurl} alt="Poster Movie" style={{ width: "200px", height: "250px" }} />
      </div>
      <div className="moviedetails">
        <h2>{title}</h2>
        <RateMovie rate={rate} />
        <p >{description}</p>
        <div>
        {/* Router */}
        <Link to={`/${id}`}> <a href="#" className="btn btn-secondary btn-lg active" role="button" aria-pressed="true">More information</a></Link>
           {/* <Button variant="light" className="btinfo">More information</Button></Link> */}
        </div>
      </div>
    </div>
  );
};
export default MovieCard;