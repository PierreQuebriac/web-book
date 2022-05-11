import useSWR from "swr";

const fetcher = async (url) => {
  let pageIndex = 0;
  let finished = false;
  while (!finished) {
    let urlWithPage = `${url}?page=${pageIndex}`;
    const response = await fetch(urlWithPage).then((response) => response.json(), { mode: "cors" });
    content = response[0];
    finished = response.length !== 0;
    console.log(finished);
    console.log(response);
  }
  return content;
};

// const fetcher = async (url) => {
//   let pageIndex = 0;
//   let messages = [];
//   let finished = false;
//   while (!finished) {
//     let urlWithPage = `${url}?page=${pageIndex}`;
//     const response = await fetch(urlWithPage).then((response) => response.json());
//     messages = messages.concat(response);
//     pageIndex += 1;
//     finished = response.length === 0;
//     //console.log(messages);
//   }
//   return messages.reverse();
// };
const Feuille = (props) => {
  const { data, error } = useSWR("http://localhost:8080/posts/0", fetcher, {
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
