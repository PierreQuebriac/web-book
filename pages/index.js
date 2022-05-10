import Feuille from "../components/Feuille";
import ButtonManager from "../components/ButtonManager";
function Home() {
  let currentFeuille = 0;
  let pages = [];

  return (
    <div>
      <h1> Web Book</h1>
      <div id="page" className="container-fluid d-flex flex-column  ">
        <Feuille currentFeuille={currentFeuille}></Feuille>
      </div>
      <div id="boutons" className="container-fluid d-flex flex-column  ">
        <ButtonManager currentFeuille={currentFeuille}></ButtonManager>
      </div>
    </div>
  );
}
export default Home;
