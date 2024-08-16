import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.gradientText}>DEMO SOFIA</h1>
      <div className={styles.poweredBy}>
        <span>Propulsé par</span>
        <Image
          src="/logo.png" // Chemin vers votre logo dans le dossier public
          alt="Logo"
          width={100}
          height={20}
          className={styles.logo}
        />
      </div>
    </main>
  );
}
