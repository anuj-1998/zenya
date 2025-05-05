import { useState } from 'react';
import { Link } from 'react-scroll';

type MenuLink = {
  label: string;
  to: string;
};

type NavbarProps = {
  menuLinks: MenuLink[];
  logo: string;
};

const Navbar: React.FC<NavbarProps> = ({ menuLinks, logo }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Check if we're on the root domain and not a subpath
  const shouldRedirectToHome = () => {
    return window.location.pathname !== '/';
  };

  // Handle link click, check the condition to redirect to home
  const handleLinkClick = () => {
    if (shouldRedirectToHome()) {
      window.location.href = '/';
    }
    setIsOpen(false);
  };

  return (
    <nav
      className="w-full sticky top-0 z-30 shadow-sm border-b border-[#eee] backdrop-blur"
      style={{
        background:
          'linear-gradient(90deg, rgba(17, 42, 64, 1) 10%, rgba(17, 42, 64, 1) 30%, rgba(205, 129, 106, 1) 100%)',
      }}
    >
      <div className="max-w-7xl h-20 mx-auto flex items-center justify-between px-4 gap-8">
        {/* Logo */}
        <a href="/">
          <img src={logo} alt="Menu Logo M-Zenya" className="h-14" />
        </a>

        {/* Hamburger Menu Toggle */}
        <button
          className="block [@media(min-width:900px)]:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden [@media(min-width:900px)]:flex items-center gap-4 xl:gap-7">
          {menuLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.to}
                smooth
                duration={100}
                onClick={handleLinkClick}
                className="cursor-pointer text-white font-semibold text-sm xl:text-base px-2 py-1 rounded hover:text-black hover:bg-[#f7e6d5] transition"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li key="register">
            <a
              href="#register"
              onClick={(e) => {
                if (shouldRedirectToHome()) {
                  e.preventDefault();
                  window.location.href = '/';
                }
                setIsOpen(false);
              }}
              className="inline-flex items-center gap-1 px-3 py-1 rounded-full font-bold bg-[#dcbba4] hover:bg-[#be946d] text-[#1f3441] shadow ml-2 transition"
              rel="noopener noreferrer"
            >
              {/* <img
                src="https://ext.same-assets.com/1549166357/2999530113.png"
                className="h-6"
                alt="register now"
              /> */}
               Submit Inquiries
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="[@media(min-width:900px)]:hidden px-4 pb-4">
          <ul className="flex flex-col gap-3">
            {menuLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  smooth
                  duration={100}
                  onClick={handleLinkClick}
                  className="block text-white font-semibold text-sm px-3 py-2 rounded hover:bg-[#f7e6d5] hover:text-black transition"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li key="register">
              <a
                href="#register"
                onClick={(e) => {
                  if (shouldRedirectToHome()) {
                    e.preventDefault();
                    window.location.href = '/';
                  }
                  setIsOpen(false);
                }}
                className="inline-flex items-center gap-1 px-3 py-2 rounded-full font-bold bg-[#dcbba4] hover:bg-[#be946d] text-[#1f3441] shadow transition"
              >
                {/* <img
                  src="https://ext.same-assets.com/1549166357/2999530113.png"
                  className="h-6"
                  alt="register now"
                /> */}
                Submit Inquiries
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
