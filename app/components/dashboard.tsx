import styles from "./dashboard.module.css";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <h1>Animations & Visual Effects</h1>
      <h2>Natalia Chernysheva</h2>
      <div className={styles.projectContainer}>
        <div className={styles.project}>
          <Link href='/sidebar-menu' rel='noopener noreferrer'>
            <div className={styles.projectImage}>
              <img src={"/dash/project_sidebar.jpg"} alt='sidebar project' />
            </div>
            <div className={styles.projectTech}>
              NextJS, TypeScript, GSAP Animations <br />
              Stroke Drawing Effect | Staggered Menu Pop-up
            </div>
          </Link>
        </div>
        <div className={styles.project}>
          <Link href='/data-visualisation' rel='noopener noreferrer'>
            <div className={styles.projectImage}>
              <img src={"/dash/project_data.jpg"} alt='data project' />
            </div>
            <div className={styles.projectTech}>
              NextJS, TypeScript, Chart.js <br />
              Data-driven Charts
            </div>
          </Link>
        </div>
        <div className={styles.project}>
          <Link href='/gift-card' rel='noopener noreferrer'>
            <div className={styles.projectImage}>
              <img src={"/dash/project_giftcard.jpg"} alt='gift card project' />
            </div>
            <div className={styles.projectTech}>
              NextJS, TypeScript, GSAP Animations <br />
              Smooth Text Reveal
            </div>
          </Link>
        </div>
        <div className={styles.project}>
          <Link href='/browse-products' rel='noopener noreferrer'>
            <div className={styles.projectImage}>
              <img
                src={"/dash/project_browse_products.jpg"}
                alt='browse products project'
              />
            </div>
            <div className={styles.projectTech}>
              NextJS, TypeScript, GSAP animations <br />
              Rainbow Shadow | Staggered Cards | Smooth Pop-up
            </div>
          </Link>
        </div>
        <div className={styles.project}>
          <Link href='/scroll-photos' rel='noopener noreferrer'>
            <div className={styles.projectImage}>
              <img src={"/dash/project_photo.jpg"} alt='swipe photos project' />
            </div>
            <div className={styles.projectTech}>
              NextJS, TypeScript, GSAP animations <br />
              Scroll-in Images
            </div>
          </Link>
        </div>
        <div className={styles.project}>
          <Link href='/spa-products' rel='noopener noreferrer'>
            <div className={styles.projectImage}>
              <img src={"/dash/h-scroll.jpg"} alt='swipe photos project' />
            </div>
            <div className={styles.projectTech}>
              NextJS, TypeScript, GSAP Animations <br />
              Horizontal Scroll
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
