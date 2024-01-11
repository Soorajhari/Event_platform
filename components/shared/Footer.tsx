import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="border-t">
     <div className="flex items-center justify-between flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
          <Image src="/assets/images/logo.svg" alt="image" width={128} height={124} />
        </Link>
        <p>2023 Evently. All Right Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
