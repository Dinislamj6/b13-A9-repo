"use client";

import React, { useState, useEffect } from "react";
import { Avatar, Button } from "@heroui/react";
import Link from "next/link";
import { useTheme } from "next-themes";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // temporary dummy user (until auth setup)
  const user = null;

  // Hydration mismatch এড়ানোর জন্য useEffect ব্যবহার করা হয়েছে
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSignOut = () => {
    console.log("logout clicked");
  };

  return (
    <div className="bg-white dark:bg-zinc-900 py-3 border-b border-gray-200 dark:border-zinc-800 sticky top-0 z-50 transition-colors duration-300">
      <nav className="max-w-7xl mx-auto px-4">
        {/* DESKTOP & MOBILE HEADER ROW */}
        <div className="flex items-center justify-between h-12">
          
          {/* LOGO */}
          <div className="font-bold text-xl text-black dark:text-white">
            <Link href="/">IdeaVault</Link>
          </div>

          {/* DESKTOP LEFT MENU */}
          <ul className="hidden md:flex items-center gap-6 font-medium text-gray-600 dark:text-gray-300">
            <li><Link href="/" className="hover:text-black dark:hover:text-white transition">Home</Link></li>
            <li><Link href="/idea" className="hover:text-black dark:hover:text-white transition">Ideas</Link></li>
            <li><Link href="/addIdea" className="hover:text-black dark:hover:text-white transition">Add Idea</Link></li>
            <li><Link href="/MyIdea" className="hover:text-black dark:hover:text-white transition">My Ideas</Link></li>
          </ul>

          {/* DESKTOP RIGHT MENU */}
          <ul className="hidden md:flex items-center gap-4">
            {/* DARK MODE BUTTON (DESKTOP) */}
            {mounted && (
              <li>
                <Button
                  isIconOnly
                  size="sm"
                  variant="light"
                  aria-label="Toggle Dark Mode"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="text-gray-600 dark:text-gray-300"
                >
                  {theme === "dark" ? (
                    // Sun Icon
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707m2.828 9.9a5 5 0 117.071-7.071 5 5 0 01-7.071 7.071z" />
                    </svg>
                  ) : (
                    // Moon Icon
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  )}
                </Button>
              </li>
            )}

     

            {user ? (
              <>
                <li>
                  <Avatar src={user?.image} name="U" size="sm" />
                </li>
                <li>
                  <Button size="sm" color="danger" variant="flat" onClick={handleSignOut}>
                    Logout
                  </Button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link href="/login" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition">Login</Link>
                </li>
                <li>
                  <Link href="/signUp" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition">Sign Up</Link>
                </li>
        
              </>
            )}
          </ul>

          {/* MOBILE RIGHT CONTROLS (Hamburger & Dark Mode) */}
          <div className="md:hidden flex items-center gap-2">
            {/* DARK MODE BUTTON (MOBILE) */}
            {mounted && (
              <Button
                isIconOnly
                size="sm"
                variant="light"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="text-gray-600 dark:text-gray-300"
              >
                {theme === "dark" ? (
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707m2.828 9.9a5 5 0 117.071-7.071 5 5 0 01-7.071 7.071z" />
                  </svg>
                ) : (
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </Button>
            )}

            {/* HAMBURGER BUTTON */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white focus:outline-none p-1"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* MOBILE DROPDOWN MENU */}
        {isOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-gray-100 dark:border-zinc-800">
            <ul className="flex flex-col gap-4 pb-3 font-medium text-gray-600 dark:text-gray-300">
              <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
              <li><Link href="/idea" onClick={() => setIsOpen(false)}>Ideas</Link></li>
              <li><Link href="/AddIdea" onClick={() => setIsOpen(false)}>Add Idea</Link></li>
              <li><Link href="/MyIdea" onClick={() => setIsOpen(false)}>My Ideas</Link></li>
              <hr className="my-1 border-gray-100 dark:border-zinc-800" />
              <li><Link href="/profile" onClick={() => setIsOpen(false)}>Profile</Link></li>
              
              {user ? (
                <li className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2">
                    <Avatar src={user?.image} name="U" size="sm" />
                    <span className="text-sm text-gray-500">User</span>
                  </div>
                  <Button size="sm" color="danger" variant="flat" onClick={() => { handleSignOut(); setIsOpen(false); }}>
                    Logout
                  </Button>
                </li>
              ) : (
                <div className="flex flex-col gap-2 pt-2">
                  <li>
                    <Link href="/login" className="block text-center py-2 border dark:border-zinc-700 rounded-xl" onClick={() => setIsOpen(false)}>
                      Login
                    </Link>
                  </li>
                  <li>
                    <Button as={Link} href="/signup" color="primary" className="w-full" onClick={() => setIsOpen(false)}>
                      Sign Up
                    </Button>
                  </li>
                </div>
              )}
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;