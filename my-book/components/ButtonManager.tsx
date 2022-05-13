import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

interface Props {
  page: number;
  onPageChange: (page: number) => void;
}

// A Conponenent to manage the button of the page.
// With this architecture it's easier to manage their style
const ButtonManager = ({ page, onPageChange }: Props) => {
  //Add One to the page counter
  const handlePageAdd = () => {
    onPageChange(page + 1);
  };

  //reduce by one the page counter
  const handlePageMin = () => {
    if (page - 1 < 0) {
      return;
    }
    onPageChange(page - 1);
  };
  return (
    <div>
      <button id="button" className="container-fluid" onClick={handlePageMin}>
        Page précédente
      </button>

      <Popup trigger={<button> Ajouter une page </button>} position="right center">
        <form method="post">
          <label htmlFor="type">enter 0 for texte, 1 for Url </label>
          <input type="text" name="type" id="type" required></input>
          <span className="input-group-text bg-light">texte ou url</span>
          <textarea id="message" name="Message" placeholder="Texte ou URL" className="form-control" required />

          <button type="submit">Ajouter</button>
        </form>
      </Popup>
      <button id="button" className="container-fluid" onClick={handlePageAdd}>
        Page suivante
      </button>
    </div>
  );
};

export default ButtonManager;
