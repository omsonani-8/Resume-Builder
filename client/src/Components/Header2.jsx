import DropdownButton from "./DropdownButton"; // Assuming DropdownButton is exported from another file

export const Header2 = () => {
  return (
      <nav id="menu" className="fixed top-0 w-full z-50 bg-gray-800">
        <div className="container mx-auto px-6 py-3 flex items-center justify-between">
          <a href="#page-top" className="text-white font-bold text-xl">Resume Builder</a>
          <div className="flex items-center space-x-4 mt-2">
            <a href="/" className="hidden md:inline-block text-white hover:text-gray-300">
              Home
            </a>
            <a href="/profile" className="hidden md:inline-block text-white hover:text-gray-300">
              Resume
            </a>
            <a href="/about" className="hidden md:inline-block text-white hover:text-gray-300">
              About
            </a>
            <a href="/contact" className="hidden md:inline-block text-white hover:text-gray-300">
              Contact
            </a>

            <a
                href="/logout"
                className="inline-flex items-center px-4 py-2 bg-white border  border-gray-300 rounded-md font-semibold text-xs uppercase tracking-widest">
              Logout
            </a>
            <DropdownButton className="md:hidden" />
          </div>
        </div>
      </nav>
  );
};

export default Header2;
