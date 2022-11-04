import Image from 'next/image';
import Logo from '../assets/images/logo_efma.webp';

const Navbar = ({ links }) => {
  return (
    <div className="bg-transparent absolute top-10 left-0 right-0 z-50 pt-2">
      <nav className="container">
        <div className="grid grid-cols-1 gap-4 place-items-center">
          <div className="hidden w-full md:block" id="navbar-default">
            <ul className="flex flex-row space-x-8 text-sm font-medium justify-center">
              {links && links.length
                ? links.map((navItem) => (
                    <li key={navItem.id}>
                      <a
                        href={navItem.path}
                        className="block py-2 p-3 text-sm text-white bg-yellow-600 hover:bg-yellow-500 rounded md:bg-transparent hover:text-white transition duration-200 ease-in-out"
                        aria-current="page"
                      >
                        {navItem.title}
                      </a>
                    </li>
                  ))
                : null}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
