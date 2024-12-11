export default function WaveSvg({ color }: { color: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "auto", // Adjust wave height here
      }}
      preserveAspectRatio="none"
    >
      <path
        fill={color}
        fill-opacity="1"
        d="M0,128L40,133.3C80,139,160,149,240,128C320,107,400,53,480,32C560,11,640,21,720,69.3C800,117,880,203,960,229.3C1040,256,1120,224,1200,181.3C1280,139,1360,85,1400,58.7L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
      ></path>
    </svg>
  );
}
