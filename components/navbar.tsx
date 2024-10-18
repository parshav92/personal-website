"use client";
import Link from "next/link";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // first prevent the default behavior
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav className="fixed top-10 left-0 right-0 z-50 my-0  mx-auto  flex w-[306px] items-center justify-center gap-1 rounded-lg bg- [#e4ded7] px-1 py-1 text- [#050101] text-white bg-[hsl(0,0,8%)] backdrop-blur-md sm:w-[383.3px] md:p-2 lg:w-[391.3px] *:font-clash-display-semibold">
      <Link
        href="https://drive.google.com/file/d/1-bgnBDhIEA31mn00TGf8R4X2C65nQYv7/view"
        target="_blank"
        className="flex"
        aria-label="Open my resume"
        data-blobity-tooltip="View Resume"
        data-blobity-magnetic="false"
      >
        <FontAwesomeIcon
          icon={faFilePdf}
          className="py-2 px-2 text-[16px] sm:px-4 md:py-1"
        />
      </Link>

      <Link
        href="#home"
        data-blobity-magnetic="false"
        onClick={handleScroll}
        aria-label="Scroll to Home Section"
      >
        <h4 className="rounded py-2 px-2 sm:px-4 text-[12px] font-bold sm:text-[14px] md:py-1 md:px-4">
          Home
        </h4>
      </Link>
      <Link
        href="#work"
        data-blobity-magnetic="false"
        onClick={handleScroll}
        aria-label="Scroll to Work Section"
      >
        <h4 className="rounded py-2 px-2 sm:px-4 text-[12px] font-bold sm:text-[14px] md:py-1 md:px-4">
          Work
        </h4>
      </Link>

      <Link
        href="#about"
        data-blobity-magnetic="false"
        onClick={handleScroll}
        aria-label="Scroll to About Section"
      >
        <h4 className="rounded py-2 px-2 sm:px-4 text-[12px] font-bold sm:text-[14px] md:py-1 md:px-4">
          About
        </h4>
      </Link>

      <Link
        href="#contact"
        data-blobity-magnetic="false"
        onClick={handleScroll}
        aria-label="Scroll to Contact Section"
      >
        <h4 className="rounded py-2 px-2 sm:px-4 text-[12px] font-bold sm:text-[14px] md:py-1 md:px-4">
          Contact
        </h4>
      </Link>
    </nav>
  );
};

export default NavBar;