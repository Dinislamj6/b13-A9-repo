"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const user = false;

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="border-b px-4 py-3 flex items-center justify-between relative">

      {/* LOGO */}
      <Link href="/" className="font-bold text-2xl text-blue-600">
        IdeaVault
      </Link>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/ideas">Ideas</Link>
        <Link href="/ideas/create">Add Idea</Link>
        <Link href="/ideas">My Ideas</Link>
        <Link href="/ideas">My Interactions</Link>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-2">

        {/* DARK MODE */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-1"
        >
          {darkMode ? (
            <SunIcon className="w-5 h-5 text-yellow-500" />
          ) : (
            <MoonIcon className="w-5 h-5" />
          )}
        </button>

        {/* LOGIN / REGISTER (ONLY DESKTOP) */}
        {!user && (
          <div className="hidden md:flex gap-2">
            <Link
              href="/login"
              className="px-2 py-1 border rounded text-sm"
            >
              Login
            </Link>

            <Link
              href="/register"
              className="px-2 py-1 bg-blue-600 text-white rounded text-sm"
            >
              Register
            </Link>
          </div>
        )}

        {/* MOBILE MENU BUTTON ONLY */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl px-1"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col gap-3 p-4 md:hidden z-50">

          <Link href="/" onClick={() => setOpen(false)}>
            Home
          </Link>

          <Link href="/ideas" onClick={() => setOpen(false)}>
            Ideas
          </Link>

          {/* AUTH ONLY IN MOBILE MENU */}
          {!user && (
            <>
              <Link href="/login" onClick={() => setOpen(false)}>
                Login
              </Link>

              <Link href="/register" onClick={() => setOpen(false)}>
                Register
              </Link>
            </>
          )}

          {user && (
            <button className="text-left text-red-500">
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
}