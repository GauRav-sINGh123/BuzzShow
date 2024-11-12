import { Home, User, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
} from "@clerk/nextjs";

export default function Sidebar() {
  return (
    <div className="fixed h-screen w-64 lg:w-72 p-4 flex flex-col gap-6 border-r border-white/[0.08]">
      {/* Brand Card */}
      <div className="glass-card flex items-center gap-3 px-4 py-3 rounded-lg">
        <div className="accent-gradient p-2 rounded-lg">
          <Home className="w-6 h-6 text-white" />
        </div>
        <span className="text-xl font-bold text-white">BuzzShow</span>
      </div>

      {/* Navigation Menu */}
      <nav className="flex flex-col gap-2">
        <Link
          href="/"
          className="flex items-center gap-4 px-4 py-3 text-white hover-gradient rounded-lg transition-all duration-300"
        >
          <Home className="w-5 h-5" />
          <span>Home</span>
        </Link>
        <Link
          href="/profile"
          className="flex items-center gap-4 px-4 py-3 text-white hover-gradient rounded-lg transition-all duration-300"
        >
          <User className="w-5 h-5" />
          <span>Profile</span>
        </Link>
      </nav>

      {/* Sign Up Button */}
      <div className="mt-auto">
        <Button className="w-full accent-gradient hover:opacity-90 transition-opacity text-white border-0">
          <LogIn className="w-4 h-4 mr-2" />
          <SignedIn>
            <SignOutButton/>
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal"/>
          </SignedOut>
        </Button>
      </div>
    </div>
  );
}
