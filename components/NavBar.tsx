"use client";

import Link from "next/link";
import Image from "next/image";
import { signOut, signIn, useSession } from "next-auth/react";

const NavBar = () => {
  const { data: session } = useSession();

  return (
    <header className="px-5 py-3 bg-amber-50">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={144} height={30} />
        </Link>
        <div className="flex items-center gap-5 text-black">
          {session?.user ? (
            <>
              <Link href="/startup/create">
                <span>Create</span>
              </Link>
              <button 
                onClick={() => signOut()} 
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition "
              >
                <span>Log Out</span>
              </button>
              <Link href={`/user/${session.user.name}`}>
                <span>{session.user.name}</span>
              </Link>
            </>
          ) : (
            <button 
              onClick={() => signIn("github")} 
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
            >
              <span>Login</span>
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
