"use client";
import { Search } from "lucide-react";
import { FormEvent } from "react";

export default function NavbarSearch() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form className="flex" onSubmit={() => handleSubmit}>
      <label htmlFor="search">
        <input type="text" name="search" id="search" placeholder="Search" />
        <button type="submit" className="bg-gray-300 p-[auto]">
          <Search />
        </button>
      </label>
    </form>
  );
}
