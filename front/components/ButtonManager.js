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
  const [message, setMessage] = React.useState("");
  const handleMessageChange = (event) => setMessage(event.target.value);
  let i = props.currentFeuille;

  const handleSubmit = async (event) => {
    // Prevent browser to submit
    event.preventDefault();
    // Send data
    const response = await fetch("http://localhost:8080/posts", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ page: 1, type: "texte", content: message }),
    });
    // Refresh messages
    //mutate("http://localhost:8080/posts/");

    //Clear state
    console.log(response);
    setMessage("");
  };
  return (
    <div>
      <button id="button" className="container-fluid" onClick={addOne}>
        Page suivante
      </button>

      <Popup trigger={<button> Ajouter du texte </button>} position="right center">
        <form onSubmit={handleSubmit} method="post">
          <span className="input-group-text bg-light">Message</span>
          <textarea
            onChange={handleMessageChange}
            id="message"
            name="Message"
            placeholder="Texte de la page"
            className="form-control"
            value={message}
            required
          />

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
