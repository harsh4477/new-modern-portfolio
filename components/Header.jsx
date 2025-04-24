import Image from "next/image";
import Link from "next/link";

import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="sticky top-0 z-30 w-full items-center">
      <div className="container mx-auto">
        <div className="flex justify-between items-center gap-y-6 py-5">
          {/* logo */}
          <Link href="/">
            <Image
              className="w-[150px] lg:w-[190px]"
              src="/my-logo-white.png"
              alt="logo"
              width={220}
              height={48}
              priority
            />
          </Link>

          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
