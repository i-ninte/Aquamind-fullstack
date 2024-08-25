import Link from "next/link";

import { SignedIn, UserButton } from "@clerk/nextjs";

import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex justify-between fixed z-50 w-full bg-black     px-6 py-4 lg:px-10  shadow-sm">
      <Link href="/dashboard" className="flex items-center gap-1">
        <p className="text-[26px] font-extrabold text-white">Aquamind</p>
      </Link>
      <div className="flex-between gap-5">
        <SignedIn>
          <UserButton afterSignOutUrl="/sign-in" />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
