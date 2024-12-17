'use client'
import { menu } from "@/app/base/utils/data";
import Link from "next/link";
import React, { useState } from "react";
import { Typography } from "../../../common";

export const NavMenu = (): React.ReactElement => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="relative">
            {/* Hamburger Icon for Small Screens */}
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="block md:hidden text-white focus:outline-none"
            >
                <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    {isMenuOpen ? (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    ) : (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    )}
                </svg>
            </button>

            {/* Navigation Menu */}
            <ul
                className={`${
                    isMenuOpen ? "flex" : "hidden"
                } flex-col md:flex md:flex-row justify-center items-center gap-4 md:gap-6 mt-2 md:mt-0  md:bg-transparent p-4 md:p-0 rounded-md md:rounded-none absolute md:relative top-full md:top-0 left-0 w-full md:w-auto`}
            >
                {menu.map((item, index) => (
                    <li key={index} className="text-white">
                        <Link href={item.route}>
                            <Typography
                                variant="bodyRegular"
                                className="hover:underline text-white"
                                onClick={() => setIsMenuOpen(false)} // Close menu on link click
                            >
                                {item.name}
                            </Typography>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
