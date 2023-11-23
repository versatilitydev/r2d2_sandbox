const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-3">
      <div className="container  text-center mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="mb-2 mt-2">
          <a
            href="#"
            className="mx-4 text-gray-300 hover:text-white transition duration-300"
          >
            About
          </a>
          <a
            href="#"
            className="mx-4 text-gray-300 hover:text-white transition duration-300"
          >
            Contact
          </a>
          <a
            href="#"
            className="mx-4 text-gray-300 hover:text-white transition duration-300"
          >
            Privacy Policy
          </a>
        </div>
        <p>&copy; {currentYear} CyberNoesis. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
