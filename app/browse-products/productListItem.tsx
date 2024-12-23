import styles from "./productListItem.module.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

interface ProductListItemProps {
  image: string;
  title: string;
  price: string;
  className?: string;
}

export default function ProductListItem({
  image,
  title,
  price,
  className,
}: ProductListItemProps) {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };
  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <div
      className={styles.box}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.inner}>
        <div className={styles.image}>
          <img src={image} alt={styles.title + " Photo"} />
        </div>
        <div className={styles.caption}>
          <div>
            <div className={styles.title}>{title}</div>
            <div className={styles.price}>{price}</div>
          </div>

          <img
            className={styles.icon}
            style={{ opacity: hover ? "1" : "0" }}
            src='/icons/look-4.gif'
            alt='check out the product details'
          />
        </div>
      </div>
    </div>
  );
}
