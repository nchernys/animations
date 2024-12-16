import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function ReturnHome({ color }: { color: string }) {
  return (
    <Link href={"https://animations.nchernysheva.com"}>
      <div
        style={{
          position: "fixed",
          left: "1rem",
          top: "1rem",
          fontSize: "1.5rem",
          zIndex: "1000",
          color: color,
        }}
      >
        <FontAwesomeIcon icon={faHouse} />
      </div>
    </Link>
  );
}
