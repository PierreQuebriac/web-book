import Feuille from "../components/Feuille";
import ButtonManager from "../components/ButtonManager";
import React from "react";

function Home() {
  const [page, setPage] = React.useState(1);
  const handlePageChange = (event) => setPage(event.target.value);
  return (
    <div>
      <h1> Web Book</h1>
      <div id="page" className="container-fluid d-flex flex-column  ">
        <Feuille page={page}></Feuille>
      </div>
      <div id="boutons" className="container-fluid d-flex flex-column  ">
        <ButtonManager changePage={handlePageChange}></ButtonManager>
      </div>
    </div>
  );
}
export default Home;
