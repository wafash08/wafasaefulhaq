import { Link } from "@remix-run/react";
import { MoonIcon } from "./icons";
import Navbar from "./navbar";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-[100] w-full h-24">
      <div className="absolute w-full h-full top-0 left-0 bg-white/[0.01] backdrop-blur-md" />
      <div className="relative max-w-[1200px] h-full mx-auto flex items-center justify-between">
        <div className="absolute w-full h-[1px] bottom-0 left-0 bg-gradient-to-r from-white/0 via-white/50 to-white/0" />
        <Link to='/' className='font-medium text-2xl'>wafasaefulhaq</Link>
        
        <Navbar />

        <button type="button" className="flex items-center justify-center border border-[#E2E8FF]/10 rounded-full w-14 h-14 p-1">
          <span className='sr-only'>Switch to light mode</span>
          <MoonIcon />
        </button>
      </div>
    </header>
  )
}