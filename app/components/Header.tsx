import Image from "next/image";
import NavToggle from "./NavToggle";
import UserButton from "./UserButton";

export default function Header() {
  return (
    <header className="flex justify-between w-full">
      <Image
        src="/logo.svg"
        alt="MemoCartes"
        width={193}
        height={40}
      />
      <div className="flex gap-4">
        <NavToggle />
        <UserButton />
      </div>
    </header>
  )
}