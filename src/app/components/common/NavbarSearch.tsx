"use client";
import { Search } from "lucide-react";
import { FormEvent, useState } from "react";

export default function NavbarSearch() {
  const [search, setSearch] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form className="flex" onSubmit={() => handleSubmit}>
      <label
        htmlFor="search"
        className="shadow-inner outline outline-gray-400 rounded-full flex justify-center items-center  w-full"
      >
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search"
          className="md:px-4 py-1 px-2 md:py-2 md:w-md outline-none"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button
          type="submit"
          className="cursor-pointer bg-gray-50 outline outline-gray-300 text-white p-[auto] px-4 rounded-r-full py-2"
        >
          <Search className="text-black" />
        </button>
      </label>
    </form>
  );
}
