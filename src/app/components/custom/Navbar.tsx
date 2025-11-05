import { Search, TvMinimalPlay } from "lucide-react";
import Link from "next/link";
import { FormEvent } from "react";

export default function Navbar() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <main className="bg-balck/90 sticky -top-2 z-50 md:py-3">
      <div className="baseContainer flex justify-between items-center gap-4">
        <div className="absolute inset-0 bg-white/40 backdrop-blur-sm -z-10" />

        <div className="flex gap-2">
          <Link href={"/"} className="flex gap-2">
            <TvMinimalPlay /> Youter
          </Link>
        </div>

        <form className="flex" onSubmit={() => handleSubmit}>
          <label htmlFor="search">
            <input type="text" name="search" id="search" placeholder="Search" />
            <button type="submit" className="bg-gray-300 p-[auto]">
              <Search />
            </button>
          </label>
        </form>

        <div className="hidden lg:flex justify-center items-center text-[1rem] lg:text-lg">
          large{" "}
        </div>
      </div>
    </main>
  );
}
