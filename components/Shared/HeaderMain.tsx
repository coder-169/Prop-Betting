"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IconAdjustmentsHorizontal, IconX } from "@tabler/icons-react";
import Language from "./Language";
import SideNav from "./SideNav";
import NavItem from "./NavItem";
import GetStarted from "../utility/Button";
import { useSession } from "next-auth/react";
import ButtonLoader from "../utility/ButtonLoader";
import { FaAngleDown, FaUser } from "react-icons/fa";

export default function HeaderMain() {
  const { data: session, status } = useSession();
  return (
    <header className="text-white body-font px-40">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Prop Betting</span>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4	flex flex-wrap items-center text-base justify-center ml-12">
          <Link href={"/"} className="mr-5 hover:text-gray-300">
            Home
          </Link>
          <Link href={""} className="mr-5 hover:text-gray-300">
            Games
          </Link>
          <Link href={""} className="mr-5 hover:text-gray-300">
            Contact Us
          </Link>
          <Link href={""} className="mr-5 hover:text-gray-300">
            Bets
          </Link>
        </nav>
        {status === "loading" ? (
          <ButtonLoader />
        ) : status === "authenticated" ? (
          <div className="relative">
            <button className="px-4 py-2 flex gap-2 items-center rounded-lg bg-[#0E0E47] hover:opacity-90 text-white">
              {session?.user?.image ? (
                <Image
                  src={session?.user?.image}
                  width={16}
                  height={16}
                  className="rounded-full"
                  alt={session?.user?.username}
                />
              ) : (
                // <FaUser className="w-[16px] h-[22px]" />
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src="https://lh3.googleusercontent.com/a/ACg8ocJuV32ZNl5pCgarqCVMTdvuzlX_RwBYdewLgTEu0fOyvDmNm4ZK=s360-c-no"
                  width={24}
                  height={24}
                  className="rounded-full"
                  alt=""
                />
                // <FaUser className="w-[16px] h-[16] rounded-full" />
              )}
              {session?.user?.username}
              <FaAngleDown />
            </button>
            <div className="absolute top-12 rounded-lg right-0 w-40 bg-[#0E0E47] h-40">
              <ul className="flex">
                <li>
                  <Link
                    href={"/profile"}
                    className="px-4 py-2 hover:bg-gray-800"
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/profile"}
                    className="px-4 py-2 hover:bg-gray-800"
                  >
                    Profile
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <GetStarted extras={`transition-all duration-200 hover:opacity-80`} />
        )}
      </div>
    </header>
  );
}
