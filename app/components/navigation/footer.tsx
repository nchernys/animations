import Link from "next/link";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Link href={`https://nchernysheva.com`}>
        Return to Natalia Chernysheva&#39;s Portfolio
      </Link>
    </footer>
  );
}
