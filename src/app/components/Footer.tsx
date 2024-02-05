import { FaXTwitter, FaInstagram, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-neutral font-monteserrat text-primary-content">
      <aside>
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
        <p className="font-bold">
          Ocean InformatiX Lda. <br />
          Providing IT solutions since 2024
        </p>
        <p>Copyright © {new Date().getUTCFullYear()} - All rights reserved</p>
        <a href="mailto:geral@oceaninformatix.com" target="_blank">
          geral@oceaninformatix.com
        </a>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="https://www.instagram.com/oceaninformatix/" target="_blank">
            <FaXTwitter className="fill-current w-6 h-6" />
          </a>
          <a href="https://www.instagram.com/oceaninformatix/" target="_blank">
            <FaInstagram className="fill-current w-6 h-6" />
          </a>
          <a href="https://www.instagram.com/oceaninformatix/" target="_blank">
            <FaYoutube className="fill-current w-6 h-6" />
          </a>
        </div>
      </nav>
    </footer>
  );
};
export default Footer;
