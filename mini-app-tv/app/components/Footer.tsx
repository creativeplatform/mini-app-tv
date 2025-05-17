import { useOpenUrl } from "@coinbase/onchainkit/minikit";
import Image from "next/image";
import SITE_LOGO from "../../public/creative.svg";

export function Footer() {
  // Get current Year
  const currentYear = new Date().getFullYear();
  const openUrl = useOpenUrl();
  return (
    <footer className="w-full border-t bg-[#F7F7F7] dark:bg-gray-950 dark:border-gray-800 py-4 md:py-2.5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-y-3 gap-x-6 md:gap-x-20">
          {/* Logo and Title Grouped */}
          <div className="flex items-center justify-center md:justify-start">
            <Image
              src={SITE_LOGO}
              alt="Creative Logo"
              width={20}
              height={20}
              className="object-contain w-5 h-5"
            />
            <h1
              className="text-md ml-2 dark:text-white text-gray-900"
              style={{ fontFamily: "ConthraxSb-Regular , sans-serif" }}
            >
              CREATIVE
            </h1>
          </div>

          {/* Copyright Button */}
          <div className="flex w-full md:w-auto justify-center md:justify-end">
            <button
              onClick={() => openUrl("https://creativeplatform.xyz")}
              className="text-xs text-gray-500 dark:text-gray-400 text-center md:text-left hover:text-red-600 dark:hover:text-red-400 focus-visible:text-red-600 dark:focus-visible:text-red-400 transition-colors duration-300 ease-in-out"
            >
              © {currentYear} Creative Organization DAO. All rights reserved.
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
