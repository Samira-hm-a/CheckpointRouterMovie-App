import React, { useState }  from "react";
import Header from "./Components/Navbar/Header";
import MovieList from "./Components/MovieList";
import SearchMovie from "./Components/SearchMovie";
import { movieContainer } from "./Components/MovieContainer";
import AddMovie from "./Components/Modal/AddMovie";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import MovieTrailer from './Components/MovieTrailer';
import { Route, Switch } from "react-router-dom";
import  Home from "./Components/Home";


function App(props) {
  const [movieData, setMovieData] = useState(movieContainer);
  const [movieSearch, setMovieSearch] = useState("");
  const [rateMovie, setRateMovie] = useState(1);
  const adding = (e, newMovie) => {
    e.preventDefault();
    setMovieData([...movieData, newMovie]);
  };
    return (
    <div className="App">
      <h1>
      <Header text="MOVIE APP" /></h1>
      <div style={{ cursor: "pointer" }}>
        <SearchMovie
          setMovieSearch={setMovieSearch}
          rateMovie={rateMovie}
          setRateMovie={setRateMovie}
        />
      </div>
      <AddMovie adding={adding} />
      <MovieList movieData={movieData} movieSearch={movieSearch} rateMovie={rateMovie} />
      <>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path="/:id" component={MovieTrailer}/>
      </Switch>
      </>
      <Footer/>
    </div>
  );
}

export default App;