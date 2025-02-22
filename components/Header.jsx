import Image from "next/image";
import Link from "next/link";

import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full items-center xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex justify-between items-center gap-y-6 py-8">
          {/* logo */}
          <Link href="/home">
            <Image
              className="w-[150px] lg:w-[220px]"
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
