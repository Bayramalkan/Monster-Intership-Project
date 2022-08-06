import Head from "next/head";
import { useEffect, useState } from "react";
import NavbarBottom from "../components/navbar-bottom/NavbarBottom";
import Navbar from "../components/navbar/Navbar";
import FirstSeciton from "../components/first-section/FirstSection";
import CategoryList from "../components/categories/CategoryList";
import CardList from "../components/card/CardList";
import styles from "../styles/Home.module.css";
// import Home from "./Home";
// import Main from "../../Main";

// MUI Imports

// export async function getServerSideProps() {
//   const resp = await fetch(
//     "https://monster-p.mncdn.com/cckeyboardapp/response.json"
//   );

//   return {
//     props: {
//       data: await resp.json(),
//     },
//   };
// }

export default function Home({ data }) {
  console.log("sasasas", data);
  return (
    <div className={styles.container}>
      <Head>
        <title>Monster Gaming PC Page</title>
        <link
          rel="preconnect"
          crossOrigin="anonymous"
          href="https://monster-p.mncdn.com"
        />
        <link
          rel="preconnect"
          crossOrigin="anonymous"
          href="https://fonts.gstatic.com"
        />
      </Head>
      {/* <Navbar />
      <NavbarBottom />
      <FirstSeciton />
      <div
        style={{
          backgroundColor: "#323334",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CategoryList data={data} />
        <CardList data={data} />
      </div> */}

      {/* <Home /> */}
      {/* {[data].map((item) => (
        <Main key={item.id} data={item} />
      ))} */}
      {/* <Main /> */}
    </div>
  );
}

// export async function getServerSideProps({ req, res }) {
//   res.setHeader(
//     "Cache-Control",
//     "public, s-maxage=10, stale-while-revalidate=59"
//   );

//   const axios = require("axios");
//   const data = await axios.get(
//     "https://monster-p.mncdn.com/cckeyboardapp/response.json"
//   );

//   return {
//     props: { data: data.data },
//   };
// }
