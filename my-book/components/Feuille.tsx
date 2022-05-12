import useSWR from "swr";
import Image from "next/image";

interface Props {
  currentFeuille: string;
}

interface FeuilleApi {
  ID: string;
  type: number;
  content: string;
  requete: string;
}

const fetcher = async (currentFeuille: string) => {
  let feuille: FeuilleApi = { ID: "0", type: 0, content: "Loading", requete: ".." };
  let finished = false;
  while (!finished) {
    let urlWithID: string = `http://localhost:3000/api/feuille/${currentFeuille}`;
    const response = await fetch(urlWithID).then((response) => response.json());
    //console.log(response);
    feuille = response;
    finished = response !== undefined;
  }
  return feuille;
};

const Feuille = ({ currentFeuille }: Props) => {
  const { data, error } = useSWR<FeuilleApi>(currentFeuille, fetcher, {
    refreshInterval: 20000,
  });
  //console.log(data);
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  if (data["type"] === 0)
    return (
      <>
        {data["content"]}

        {data["requete"]}
      </>
    );
  else return <div>ERROR</div>;
  //else return <Image src={data["content"]} alt="" width={500} height={500}></Image>;
};
// async function Feuille({ currentFeuille }: Props) {
//   let finished: Boolean = false;
//   while (!finished) {
//     let urlWithID: string = `http://localhost:3000/feuille/${currentFeuille}`;
//     const response = await fetch(urlWithID).then((response) => response.json());
//     finished = response.length !== 0;
//     let content: string = response[0]["message"];
//     return <>{content}</>;
//   }
//   return <>Loading</>;
// }

export default Feuille;
