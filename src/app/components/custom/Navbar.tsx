import { TvMinimalPlay } from "lucide-react";
import Link from "next/link";
import NavbarSearch from "../common/NavbarSearch";

export default function Navbar() {
  return (
    <nav className="bg-balck/90 sticky -top-2 z-50 md:py-3">
      <div className="baseContainer flex justify-between items-center gap-4">
        <div className="absolute inset-0 bg-white/40 backdrop-blur-sm -z-10" />

        <div className="flex gap-2">
          <Link
            href={"/"}
            className="flex text-md md:text-2xl justify-center items-center font-bold gap-2"
          >
            <TvMinimalPlay className="size-5 md:size-8 text-red-600" /> Youter
          </Link>
        </div>

        <div className="hidden md:flex justify-center items-center">
          <NavbarSearch />
        </div>

        <div className="flex justify-center items-center text-[1rem] lg:text-lg">
          <div className="rounded-full size-8 border"></div>
        </div>
      </div>
    </nav>
  );
}
