import Image from "next/image";
import styles from "./page.module.scss";
import NavBar from "./components/navBar";
import HeroSection from "./components/heroSection";

export default function Home() {
  return (
    <main className={styles.main}>
      <NavBar/>
      <HeroSection/>
    </main>
  );
}
