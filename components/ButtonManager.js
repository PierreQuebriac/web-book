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
      <button id="button" className="container-fluid">
        Ajouter page de texte
      </button>
      <button id="button" className="container-fluid">
        Ajouter image par url
      </button>
      <button id="button" className="container-fluid" onClick={suppOne}>
        Page précédente
      </button>
    </div>
  );
};

export default ButtonManager;
