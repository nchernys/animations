import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function ReturnHome({ color }: { color: string }) {
  return (
    <Link href={"https://animations.nchernysheva.com"}>
      <div
        style={{
          position: "absolute",
          left: "1rem",
          top: "1rem",
          fontSize: "1.5rem",
          zIndex: "100",
          color: color,
        }}
      >
        <FontAwesomeIcon icon={faHouse} />
      </div>
    </Link>
  );
}
