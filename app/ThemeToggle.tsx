"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const d = localStorage.getItem("theme") === "dark";
    setDark(d);
    document.documentElement.dataset.theme = d ? "dark" : "light";
  }, []);
  const toggle = () => {
    const d = !dark;
    setDark(d);
    document.documentElement.dataset.theme = d ? "dark" : "light";
    localStorage.setItem("theme", d ? "dark" : "light");
  };
  return (
    <button className="icon-btn" onClick={toggle} aria-label="Toggle dark mode">
      {dark ? "☀" : "☾"}
    </button>
  );
}
