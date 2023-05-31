// import Head from "next/head";
// import Image from "next/image";
import styles from "../styles/Home.module.css";
// import { Footer } from "../components/Footer";
import { Links } from "../components/Link";
import { Headlien } from "../components/Headline";

export function Main(props) {
  return (
    <main className={styles.main}>
      <Headlien page={props.page}>
        {<code className={styles.code}>pages/{props.page}.js</code>}
      </Headlien>
      <Links />
    </main>
  );
}
