import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import ButtonManager from "../components/ButtonManager";
import Feuille from "../components/Feuille";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [page_num, setPage_num] = useState(0);
  const handlePageChange = (page_num: number) => {
    setPage_num(page_num);
  };
  return (
    <div>
      <Head>
        <title>My WebBook, page {page_num}</title>
      </Head>
      <h1>Livre</h1>

      <Feuille currentFeuille={String(page_num)}></Feuille>
      <ButtonManager page={page_num} onPageChange={handlePageChange}></ButtonManager>
    </div>
  );
};

export default Home;
