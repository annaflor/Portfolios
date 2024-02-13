import Image from "next/image";
import "./header.scss"

export function Header() {
  return (
    <div className="header">
      <div>
        <h1> Hi, Im Ana Caroline </h1>
        <h2> Software Engineer </h2>
        <Image src="/fotoAna.jpg" alt="Ana" width={325} height={310} />
      </div>
    </div>
  );
}
