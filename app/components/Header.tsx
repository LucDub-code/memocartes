import Image from "next/image";
import NavToggle from "./NavToggle";
import UserButton from "./UserButton";

export default function Header() {
  return (
    <header className="flex justify-between w-full">
      <Image
        src="/logo-large.svg"
        alt="MemoCartes"
        width={193}
        height={40}
        className="hidden sm:block"
      />
      <Image
        src="/logo-small.svg"
        alt="MemoCartes"
        width={48}
        height={48}
        className="block sm:hidden"
      />

      <div className="flex gap-4">
        <NavToggle />
        <UserButton />
      </div>
    </header>
  )
}