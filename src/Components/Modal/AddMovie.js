import React, { useState } from "react";
import Modal from "react-modal";
import RateMovie from "../RateMovie";
import "./CssModal/AddMovie.css";
//modal dialog!!
Modal.setAppElement("#root");
const AddMovie = ({ adding }) => {
  var subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [posterurl, setPosterurl] = useState("");
  const [description, setDescription] = useState("");
  const [rate, setRate] = useState(0);

  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    subtitle.style.color = "";
  }
  function closeModal() {
    setIsOpen(false);
  }
  const addMovie = (e) => { 
    let newMovie = {
      title,
      posterurl,
      description,
      rate,
    };
    adding(e, newMovie);
    setIsOpen(false);
    setTitle("");
    setPosterurl("");
    setDescription("");
    setRate("0");
  };
  return (
    <div className="addmodal">
      <button className="add-btn" onClick={openModal}> Add new Movie</button>
      <Modal className="modalcnt"
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Add">
        <h3 ref={(_subtitle) => (subtitle = _subtitle)}> New Movie</h3>
        <form className="form">
          <input
            type="text"
            value={title}
            placeholder="Movie title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="url"
            value={posterurl}
            placeholder="Url Poster"
            onChange={(e) => setPosterurl(e.target.value)}
          />
          <input
            type="text"
            value={description}
            placeholder="Description movie (genre, year,...)"
            onChange={(e) => setDescription(e.target.value)}
          />
          <RateMovie  rate={rate} setRateMovie={setRate} />
          <button className="btr" onClick={addMovie}>Submit</button>
          <button className="btr" onClick={closeModal}>Cancel</button>
        </form>
      </Modal>
    </div>
  );
};
export default AddMovie;