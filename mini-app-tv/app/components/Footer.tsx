import { useOpenUrl } from "@coinbase/onchainkit/minikit";
import Image from "next/image";
import SITE_LOGO from "@/assets/creative.svg";

export function Footer() {
  // Get current Year
  const currentYear = new Date().getFullYear();
  const openUrl = useOpenUrl();
  return (
    <footer className="w-full border-t bg-[#F7F7F7] dark:bg-gray-950 dark:border-gray-800 py-4 md:py-2.5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
          {/* Logo */}
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

          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <button
              onClick={() => openUrl("https://app.creativeplatform.xyz")}
              className="flex items-center text-[13px] text-gray-600 dark:text-gray-300 \
                hover:text-red-600 dark:hover:text-red-400 focus-visible:text-red-600 dark:focus-visible:text-red-400 \
                transition-colors duration-300 ease-in-out group"
            >
              <PowerIcon
                className="h-[18px] w-[18px] mr-1 group-hover:stroke-red-600 \
                  dark:group-hover:stroke-red-400 transition-colors duration-300 ease-in-out"
              />
              Exit dApp
            </button>

            <button
              onClick={() => openUrl("https://creativeplatform.xyz")}
              className="text-xs text-gray-500 dark:text-gray-400 text-center md:text-left \
                hover:text-red-600 dark:hover:text-red-400 focus-visible:text-red-600 dark:focus-visible:text-red-400 \
                transition-colors duration-300 ease-in-out"
            >
              © {currentYear} Creative Organization DAO. All rights reserved.
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

function PowerIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3v9M5.63 5.64a9 9 0 1 0 12.74 0" />
    </svg>
  );
}
