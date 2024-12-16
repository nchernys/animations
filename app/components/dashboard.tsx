import styles from "./dashboard.module.css";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <h1>Animations & Visual Effects</h1>
      <h2>Natalia Chernysheva</h2>
      <div className={styles.projectContainer}>
        <div className={styles.project}>
          <Link href='/sidebar-menu' target='_blank' rel='noopener noreferrer'>
            <div className={styles.projectImage}>
              <img src={"./dash/project_sidebar.jpg"} alt='sidebar project' />
            </div>
            <div className={styles.projectTech}>
              NextJS, TypeScript, GSAP animations
            </div>
          </Link>
        </div>
        <div className={styles.project}>
          <Link
            href='/data-visualisation'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className={styles.projectImage}>
              <img src={"./dash/project_data.jpg"} alt='data project' />
            </div>
            <div className={styles.projectTech}>
              NextJS, TypeScript, Chart.js
            </div>
          </Link>
        </div>
        <div className={styles.project}>
          <Link href='/gift-card' target='_blank' rel='noopener noreferrer'>
            <div className={styles.projectImage}>
              <img
                src={"./dash/project_giftcard.jpg"}
                alt='gift card project'
              />
            </div>
            <div className={styles.projectTech}>
              NextJS, TypeScript, GSAP animations
            </div>
          </Link>
        </div>
        <div className={styles.project}>
          <Link
            href='/browse-products'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className={styles.projectImage}>
              <img
                src={"./dash/project_browse_products.jpg"}
                alt='browse products project'
              />
            </div>
            <div className={styles.projectTech}>
              NextJS, TypeScript, GSAP animations
            </div>
          </Link>
        </div>
        <div className={styles.project}>
          <Link href='/scroll-photos' target='_blank' rel='noopener noreferrer'>
            <div className={styles.projectImage}>
              <img
                src={"./dash/project_photo.jpg"}
                alt='swipe photos project'
              />
            </div>
            <div className={styles.projectTech}>
              NextJS, TypeScript, GSAP animations
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
