import type { NextPage } from "next";
import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { HeaderBar } from "../components/Organisms/HeaderBar";
import { SignUpForm } from "../components/Organisms/SignUpForm";

const SiginUp: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sigin Up</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderBar />
      <SignUpForm />
    </div>
  );
};

export default SiginUp;
