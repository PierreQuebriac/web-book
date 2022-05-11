import useSWR from "swr";

const fetcher = async (url) => {
  let pageIndex = 0;
  let finished = false;
  while (!finished) {
    let urlWithPage = `${url}?page=${pageIndex}`;
    const response = await fetch(urlWithPage).then((response) => response.json(), { mode: "cors" });
    content = response[0];
    finished = response.length !== 0;
  }
  return content;
};

const Feuille = (props) => {
  let page = props.page;
  console.log("http://localhost:8080/posts/" + String(page));
  const { data, error } = useSWR("http://localhost:8080/posts/" + String(page), fetcher, {
    refreshInterval: 20000,
  });
  console.log(error);
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return <>{data["CONTENT"]}</>;
};

const Lecture = (id) => {
  return "test" + String(id);
};

// const Feuille = (props) => {
//   return <div> {Lecture(props.currentFeuille)}</div>;
// };
export default Feuille;
