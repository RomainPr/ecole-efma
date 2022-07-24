import Image from 'next/image';
import Logo from '../assets/images/logo_efma.webp';

const Navbar = ({ links }) => {
  const { data } = links;

  return (
    <div className="bg-header-light">
      <nav className="container py-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 place-items-center">
          <div className="w-full">
            <Image src={Logo} width={69} height={70} alt="efma_logo" />
          </div>
          <div className="hidden w-full md:block" id="navbar-default">
            <ul className="flex flex-row mt-4 space-x-8 text-sm font-medium justify-end">
              {data && data.length
                ? data.map((navItem) => (
                    <li key={navItem.id}>
                      <a
                        href={`/${navItem.attributes.title}`}
                        className="block py-2 p-3 text-sm text-black bg-yellow-600 hover:bg-yellow-500 rounded md:bg-transparent hover:text-white transition duration-200 ease-in-out"
                        aria-current="page"
                      >
                        {navItem.attributes.title}
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
