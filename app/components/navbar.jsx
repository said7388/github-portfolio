// @flow strict
import { userData } from "@/data/user-data";
import Link from "next/link";


function Navbar() {
  return (
    <nav className="bg-transparent hidden md:block">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center opacity-0 md:opacity-100">
          <Link
            href="/"
            className=" text-primary-icon text-3xl font-bold">
            @{userData.githubUser}
          </Link>
        </div>

        <ul className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100" id="navbar-default">
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#projects">
              <div className="text-sm text-white transition-colors duration-300 hover:text-primary-icon">Projects</div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="#stats"><div className="text-sm text-white transition-colors duration-300 hover:text-primary-icon">Stats</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#contributions"><div className="text-sm text-white transition-colors duration-300 hover:text-primary-icon">Contributions</div></Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;