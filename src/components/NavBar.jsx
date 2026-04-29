"use client";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const userData = authClient.useSession();
  const user = userData.data?.user;

  const handelSignOut = async () => {
    await authClient.signOut();
  };

  return (
    <div className="border-b px-3">
      <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto">
        
        {/* Logo */}
        <div className="flex gap-2 items-center">
          <Image
            src={"/logo.png"}
            alt="logo"
            width={30}
            height={30}
          />
          <h3 className="font-black text-lg">pixgen.</h3>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-5 text-sm">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/all-photos">All Photos</Link></li>
          
          <li><Link href="/profile">Profile</Link></li>
        </ul>

        {/* Right side */}
        <div className="hidden md:flex gap-4">
          {!user ? (
            <ul className="flex items-center gap-2 text-sm">
              <li><Link href="/signup">SignUp</Link></li>
              <li><Link href="/signin">SignIn</Link></li>
            </ul>
          ) : (
            <div className="flex gap-2 items-center">
              <Avatar size="sm">
                <Avatar.Image src={user?.image} />
                <Avatar.Fallback>{user?.name}</Avatar.Fallback>
              </Avatar>
              <Button size="sm" color="danger" onClick={handelSignOut}>
                SignOut
              </Button>
            </div>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-xl cursor-pointer p-2"
          
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 pb-4">
          <Link href="/">Home</Link>
          <Link href="/all-photos">All Photos</Link>
          
          <Link href="/profile">Profile</Link>

          {!user ? (
            <>
              <Link href="/signup">SignUp</Link>
              <Link href="/signin">SignIn</Link>
            </>
          ) : (
            <div className="flex items-center gap-2">
              <Avatar size="sm">
                <Avatar.Image src={user?.image} />
                <Avatar.Fallback>{user?.name}</Avatar.Fallback>
              </Avatar>
              <Button size="sm" color="danger" onClick={handelSignOut}>
                SignOut
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;