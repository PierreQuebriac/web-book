const Lecture = (id) => {
  return "test";
};

const Feuille = (props) => {
  return <div> {Lecture(props.Feuille)}</div>;
};
export default Feuille;
