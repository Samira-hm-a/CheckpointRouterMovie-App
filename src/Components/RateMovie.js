import React from "react";

const RateMovie = ({ rate, setRateMovie }) => {
  const stars = (x) => {
    let stararray = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= x) {
        stararray.push(
          <span key={i} onClick={() => setRateMovie(i)}>
            <i class="fas fa-star"></i>
          </span>
        );
      } else {
        stararray.push(
          <span key={i} onClick={() => setRateMovie(i)}>
            <i class="far fa-star"></i>
          </span>
        );
      }
    }
    return stararray;
  };
  return <div> {stars(rate)}</div>;
};
//default props solve the static display prob of the star
RateMovie.defaultProps = {
  setRateMovie : ()=>{},
  rate: 1
}

export default RateMovie;