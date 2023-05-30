import Head from "next/head";
// import Image from "next/image";
import styles from "../styles/Home.module.css";
import Links from "../components/Link";
import { Footer } from "../components/Footer";
import Headlien from "../components/Headline";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Headlien page="about" />

        <Links />
      </main>

      <Footer />
    </div>
  );
}
