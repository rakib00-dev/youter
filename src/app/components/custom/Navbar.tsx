"use client";
import { Search, TvMinimalPlay, X } from "lucide-react";
import Link from "next/link";
import NavbarSearch from "../common/NavbarSearch";
import React from "react";
import useWindowSize from "@/hooks/useWindowSize";

export default function Navbar() {
  const [mobileSearchClicked, setMobileSearchClicked] = React.useState(false);
  const { width: windowWidth } = useWindowSize();

  return (
    <nav className="bg-balck/90 sticky -top-2 z-50 md:py-3">
      <div className="baseContainer flex justify-between items-center gap-4">
        <div className="absolute inset-0 bg-white/40 backdrop-blur-sm -z-10" />

        <div
          className={`flex gap-2 ${
            mobileSearchClicked && windowWidth < 768 && "hidden"
          }`}
        >
          <Link
            href={"/"}
            className="flex text-xl md:text-2xl justify-center items-center font-bold gap-2"
          >
            <TvMinimalPlay className="size-6 md:size-8 text-red-600" /> Youter
          </Link>
        </div>

        <div className="hidden md:flex justify-center items-center">
          <NavbarSearch />
        </div>

        {mobileSearchClicked && windowWidth < 768 && (
          <div className="flex justify-center items-center gap-4">
            <button
              type="submit"
              className="cursor-pointer outline outline-gray-300 text-white px-1 rounded-full py-1 md:hidden"
              onClick={() => setMobileSearchClicked(false)}
            >
              <X className="text-black" />
            </button>
            <NavbarSearch />
          </div>
        )}

        <div
          className={`flex justify-center items-center text-[1rem] lg:text-lg gap-2  ${
            mobileSearchClicked && windowWidth < 768 && "hidden"
          }`}
        >
          <button
            type="submit"
            className="cursor-pointer outline outline-gray-300 text-white px-1 rounded-full py-1 md:hidden"
            onClick={() => setMobileSearchClicked(true)}
          >
            <Search className="text-black" />
          </button>
          <div
            className={`rounded-full md:size-10 size-8 border-2 border-gray-600 flex justify-center items-center bg-amber-400 cursor-pointer`}
          >
            R
          </div>
        </div>
      </div>
    </nav>
  );
}
