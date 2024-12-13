import Link from "next/link";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer
      className={styles.footer}
      style={{
        padding: "1rem",
        background: "#000",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <p>
        {" "}
        Return to{" "}
        <Link href={`https://nchernysheva.com`}>
          Natalia Chernysheva&#39;s Portfolio
        </Link>
      </p>
    </footer>
  );
}
