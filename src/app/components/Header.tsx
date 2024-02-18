"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
const Header = () => {
  const [menuOpen, toggleMenu] = useState({
    wasOpen: false,
    isOpen: false,
  });
  const pathname = usePathname();
  const [linkStatus, setLinkStatus] = useState({
    current: pathname,
    lastClicked: "",
  });
  useEffect(() => {
    setLinkStatus((prev) => {
      return {
        lastClicked: prev.current,
        current: pathname,
      };
    });
  }, [pathname]);

  const [top, setTop] = useState(true);

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  useEffect(() => {
    window.scrollY > 10 ? setTop(false) : setTop(true);
  }, []);

  return (
    <header
      className={`px-10 py-5 w-full font-montserrat text-neutral fixed top-0 ${
        !top
          ? `shadow-lg bg-base-100`
          : "bg-base-100 shadow-none md:bg-transparent"
      }  transition-all  z-50 flex flex-row justify-center items-center`}
    >
      <div className="flex flex-row items-center w-full justify-between relative py-2">
        <Link
          href="/"
          aria-label="Go to Homepage"
          className="hover:cursor-pointer hover:scale-105 transition-all"
        >
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 430.000000 430.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,430.000000) scale(0.100000,-0.100000)"
              fill="currentColor"
              stroke="none"
            >
              <path
                d="M2000 4249 c-276 -16 -604 -109 -843 -240 -38 -22 -71 -39 -73 -39
-11 0 -255 -173 -285 -202 -8 -7 -43 -38 -78 -68 -61 -53 -180 -184 -255 -283
-207 -271 -352 -622 -401 -973 -19 -129 -21 -409 -5 -539 21 -173 80 -419 88
-365 44 338 245 657 539 852 298 200 644 303 1263 378 807 97 1044 151 1336
306 171 90 276 180 331 285 24 46 28 65 27 134 0 67 -4 88 -26 130 -15 28 -37
62 -50 76 -21 24 -184 159 -192 159 -2 0 5 -25 15 -57 85 -255 -124 -472 -566
-588 -145 -38 -223 -49 -850 -115 -162 -17 -394 -48 -565 -76 -42 -7 -44 -6
-31 10 40 48 312 146 586 210 179 43 324 82 419 116 145 51 323 141 383 195
107 95 157 171 169 257 18 130 -80 283 -233 361 -106 55 -437 91 -703 76z"
              />
              <path
                d="M3895 3230 c-35 -69 -56 -99 -130 -185 -72 -84 -66 -78 -140 -141
-125 -107 -336 -233 -490 -294 -303 -120 -533 -171 -1112 -245 -606 -78 -884
-159 -1152 -335 -210 -138 -336 -315 -386 -544 -24 -108 -16 -329 15 -436 63
-220 233 -471 394 -584 81 -57 96 -65 74 -40 -26 31 -85 154 -111 235 -75 228
-68 480 18 668 103 225 327 402 635 504 112 37 183 53 375 86 440 76 684 125
825 163 186 51 384 111 540 166 30 10 -55 -69 -119 -111 -141 -93 -166 -108
-274 -161 -217 -106 -338 -152 -682 -261 -191 -61 -221 -72 -355 -139 -335
-169 -531 -434 -547 -741 -15 -280 109 -560 303 -689 86 -56 306 -91 584 -91
232 0 348 15 555 73 276 77 533 209 755 390 86 70 243 228 314 317 242 301
383 625 447 1025 20 126 18 477 -4 610 -30 177 -67 314 -126 462 -33 83 -114
248 -154 312 l-25 40 -27 -54z"
              />
            </g>
          </svg>
        </Link>
        <div className="hidden md:flex flex-row justify-center gap-4 items-center">
          <Link
            href="/"
            className="text-lg transition-all hover:cursor-pointer font-semibold hover:text-info px-2 relative"
          >
            Início
            {linkStatus.current === "/" && (
              <motion.div
                initial={{ x: -10, scale: 0, opacity: 0 }}
                animate={{ x: 0, scale: 1, opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="w-2 h-2 rounded-full bg-info absolute top-3 -right-2"
              />
            )}
            {linkStatus.lastClicked === "/" && (
              <motion.div
                initial={{ x: 0, scale: 1, opacity: 1 }}
                animate={{ x: -10, scale: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="w-2 h-2 rounded-full bg-info absolute top-3 -right-2"
              />
            )}
          </Link>
          <Link
            href="/services"
            className="text-lg transition-all hover:cursor-pointer font-semibold hover:text-info px-2 relative"
          >
            Serviços
            {linkStatus.current === "/services" && (
              <motion.div
                initial={{ x: -10, scale: 0, opacity: 0 }}
                animate={{ x: 0, scale: 1, opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="w-2 h-2 rounded-full bg-info absolute top-3 -right-2"
              />
            )}
            {linkStatus.lastClicked === "/services" && (
              <motion.div
                initial={{ x: 0, scale: 1, opacity: 1 }}
                animate={{ x: -10, scale: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="w-2 h-2 rounded-full bg-info absolute top-3 -right-2"
              />
            )}
          </Link>
          <Link
            href="/portfolio"
            className="text-lg transition-all hover:cursor-pointer font-semibold hover:text-info px-2 relative"
          >
            Portfolio
            {linkStatus.current === "/portfolio" && (
              <motion.div
                initial={{ x: -10, scale: 0, opacity: 0 }}
                animate={{ x: 0, scale: 1, opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="w-2 h-2 rounded-full bg-info absolute top-3 -right-2"
              />
            )}
            {linkStatus.lastClicked === "/portfolio" && (
              <motion.div
                initial={{ x: 0, scale: 1, opacity: 1 }}
                animate={{ x: -10, scale: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="w-2 h-2 rounded-full bg-info absolute top-3 -right-2"
              />
            )}
          </Link>
          {/*<Link
            href="/about"
            className="text-lg transition-all hover:cursor-pointer font-semibold hover:text-info px-2 relative"
          >
            Sobre Nós
            {linkStatus.current === "/about" && (
              <motion.div
                initial={{ x: -10, scale: 0, opacity: 0 }}
                animate={{ x: 0, scale: 1, opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="w-2 h-2 rounded-full bg-info absolute top-3 -right-2"
              />
            )}
            {linkStatus.lastClicked === "/about" && (
              <motion.div
                initial={{ x: 0, scale: 1, opacity: 1 }}
                animate={{ x: -10, scale: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="w-2 h-2 rounded-full bg-info absolute top-3 -right-2"
              />
            )}
            </Link>*/}
          <Link
            href="/contact"
            className="text-lg transition-all hover:cursor-pointer font-semibold bg-info rounded-lg p-2 border-2 border-transparent text-info-content hover:text-info hover:bg-transparent hover:border-info"
          >
            Contacte-nos
          </Link>
        </div>
        <div
          onBlur={(e) => {
            if (!e.relatedTarget) {
              toggleMenu({
                isOpen: false,
                wasOpen: true,
              });
            }
          }}
          className="md:hidden relative"
        >
          <button
            aria-label="Toggle Hamburger Menu"
            onClick={(e) => {
              toggleMenu((prev) => {
                return {
                  isOpen: !prev.isOpen,
                  wasOpen: prev.isOpen,
                };
              });
            }}
            className="btn btn-square btn-ghost"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
          {menuOpen.isOpen && (
            <motion.div
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute w-screen flex flex-col items-stretch justify-start gap-2 bg-base-100 shadow-lg outline-1 outline outline-neutral-content p-3 -right-10 rounded top-[4.89rem]"
            >
              <Link
                onClick={(e) => {
                  toggleMenu({
                    isOpen: false,
                    wasOpen: true,
                  });
                }}
                href="/"
                className="text-lg text-center transition-all hover:cursor-pointer font-semibold hover:text-info px-2"
              >
                Início
              </Link>
              <Link
                onClick={() => {
                  toggleMenu({
                    isOpen: false,
                    wasOpen: true,
                  });
                }}
                href="/services"
                className="text-lg text-center transition-all hover:cursor-pointer font-semibold hover:text-info px-2"
              >
                Serviços
              </Link>
              <Link
                onClick={() => {
                  toggleMenu({
                    isOpen: false,
                    wasOpen: true,
                  });
                }}
                href="/portfolio"
                className="text-lg text-center transition-all hover:cursor-pointer font-semibold hover:text-info px-2"
              >
                Portfólio
              </Link>
              {/*<Link
                onClick={() => {
                  toggleMenu(false);
                }}
                href="/"
                className="text-lg text-center transition-all hover:cursor-pointer font-semibold hover:text-info px-2"
              >
                Sobre Nós
              </Link>*/}
              <Link
                onClick={() => {
                  toggleMenu({
                    isOpen: false,
                    wasOpen: true,
                  });
                }}
                href="/contact"
                className="text-lg text-center transition-all hover:cursor-pointer font-semibold bg-info rounded-lg p-2 border-2 border-transparent text-info-content hover:text-info hover:bg-transparent hover:border-info"
              >
                Contacte-nos
              </Link>
            </motion.div>
          )}
          {!menuOpen.isOpen && menuOpen.wasOpen && (
            <motion.div
              initial={{ y: 0, opacity: 1 }}
              animate={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute pointer-events-none w-screen flex flex-col items-stretch justify-start gap-2 bg-base-100 shadow-lg outline-1 outline outline-neutral-content p-3 -right-10 rounded top-[4.89rem]"
            >
              <Link
                onClick={(e) => {
                  toggleMenu({
                    isOpen: false,
                    wasOpen: true,
                  });
                }}
                href="/"
                className="text-lg text-center transition-all hover:cursor-pointer font-semibold hover:text-info px-2"
              >
                Início
              </Link>
              <Link
                onClick={() => {
                  toggleMenu({
                    isOpen: false,
                    wasOpen: true,
                  });
                }}
                href="/services"
                className="text-lg text-center transition-all hover:cursor-pointer font-semibold hover:text-info px-2"
              >
                Serviços
              </Link>
              <Link
                onClick={() => {
                  toggleMenu({
                    isOpen: false,
                    wasOpen: true,
                  });
                }}
                href="/portfolio"
                className="text-lg text-center transition-all hover:cursor-pointer font-semibold hover:text-info px-2"
              >
                Portfólio
              </Link>
              {/*<Link
                onClick={() => {
                  toggleMenu(false);
                }}
                href="/"
                className="text-lg text-center transition-all hover:cursor-pointer font-semibold hover:text-info px-2"
              >
                Sobre Nós
              </Link>*/}
              <Link
                onClick={() => {
                  toggleMenu({
                    isOpen: false,
                    wasOpen: true,
                  });
                }}
                href="/contact"
                className="text-lg text-center transition-all hover:cursor-pointer font-semibold bg-info rounded-lg p-2 border-2 border-transparent text-info-content hover:text-info hover:bg-transparent hover:border-info"
              >
                Contacte-nos
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
};
export default Header;
