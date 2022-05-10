import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const addOne = (i) => {
  console.log("+1");
  return i + 1;
};
const suppOne = (i) => {
  console.log("-1");
  return i - 1;
};
const ButtonManager = (props) => {
  let i = props.currentFeuille;
  return (
    <div>
      <button id="button" className="container-fluid" onClick={addOne}>
        Page suivante
      </button>

      <Popup trigger={<button> Ajouter du texte </button>} position="right center">
        <form action="/api/feuilles" method="post">
          <label htmlFor="text">Texte :</label>
          <input type="text" id="text" name="texte" />

          <button type="submit">Ajouter</button>
        </form>
      </Popup>
      <Popup trigger={<button> Ajouter une image </button>} position="right center">
        <form action="/api/feuilles" method="post">
          <label htmlFor="text">url :</label>
          <input type="text" id="url" name="url" />

          <button type="submit">Ajouter</button>
        </form>
      </Popup>
      {/* <button id="button" className="container-fluid">
        Ajouter page de texte
      </button>
      <button id="button" className="container-fluid">
        Ajouter image par url
      </button> */}
      <button id="button" className="container-fluid" onClick={suppOne}>
        Page précédente
      </button>
    </div>
  );
};

export default ButtonManager;
