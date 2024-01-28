import Link from "next/link";
import React from "react";
import LoginModal from "./LoginModal";

export default function NavBar() {
    return (
        <nav className="bg-white p-2 flex justify-between">
        <Link href="" className="font-bold text-gray-700 text-2xl"> OpenTable </Link>
        <div>
          <div className="flex">
           
            <LoginModal isSignin={true} />
            <LoginModal isSignin={false} />
           
          </div>
        </div>
      </nav>
    )
};
