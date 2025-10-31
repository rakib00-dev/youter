"use client";

import { useState } from "react";

export default function Counter() {
  const [click, setClick] = useState(0);

  return (
    <section onClick={() => setClick((prev) => prev + 1)}>{click}</section>
  );
}
