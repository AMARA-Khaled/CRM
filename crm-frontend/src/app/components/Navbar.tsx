import Link from "next/link";

type NavbarProps = {
  x: number;
};

export default function Navbar({x}: NavbarProps) {
  return (
    <nav className="flex gap-4 p-4 bg-gray-800 text-white justify-evenly rounded-2xl " style={{ fontFamily: "Roboto, sans-serif"  }}>
      <Link
        href="/dashboard"
        className={x === 0 ? "text-green-400" : ""}
      >
        Dashboard
      </Link>
      <Link
        href="/client-list"
        className={x === 1 ? "text-green-400" : ""}
      >
        Clients List
      </Link>
      <Link
        href="/add-client"
        className={x === 2 ? "text-green-400" : ""}
      >
        Add a Client
      </Link>
    </nav>
  );
}