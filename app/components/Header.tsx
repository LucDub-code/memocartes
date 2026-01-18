import Image from "next/image";
import NavToggle from "./NavToggle";

export default function Header() {
  return (
    <div className="flex justify-between w-full">
      <Image
        src="/logo.svg"
        alt="MemoCartes"
        width={193}
        height={40}
      />
      <NavToggle />
    </div>
  )
}