// import Head from "next/head";
// import Image from "next/image";
import classes from "./Main.module.css";
// import { Footer } from "../components/Footer";
import { Links } from "../components/Link";
import { Headlien } from "../components/Headline";

export function Main(props) {
  return (
    <main className={classes.main}>
      <Headlien page={props.page}>
        <code className={classes.code}>pages/{props.page}.js</code>
      </Headlien>
      <Links />
    </main>
  );
}
