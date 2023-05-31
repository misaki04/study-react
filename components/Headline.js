// import React from "react";
// import Head from "next/head";
// import Image from "next/image";
import styles from "../styles/Home.module.css";
// import { Footer } from "../components/Footer";
// import Links from "../components/Link";

export function Headlien(props) {
  return (
    <div>
      <h1 className={styles.title}>{props.page} Page</h1>

      <p className={styles.description}>
        Get started by editing {props.children}
      </p>
    </div>
  );
}
