import { useState, useEffect } from "react";
import { Button } from "@mantine/core";
import AquilaLogo from "../../../assets/logo/logo.svg";

const Navigation = ({ bgColor = "bg-blue-400/15" }) => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const scrollDiff = Math.abs(currentScroll - lastScroll);

      if (scrollDiff < 5) return;

      // Show navbar at top of page
      if (currentScroll < 50) {
        setShowNavbar(true);
      }
      // Hide when scrolling down
      else if (currentScroll > lastScroll && currentScroll > 100) {
        setShowNavbar(false);
      }
      // Show when scrolling up
      else if (currentScroll < lastScroll) {
        setShowNavbar(true);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  const navLinks = [
    { name: "For Jobs", href: "/m-gigs" },
    { name: "For Business", href: "/business" },
    { name: "Services", href: "/models" },
    { name: "About", href: "/why-promotr" },
  ];

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={`fixed top-4 md:top-8 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-[90%] max-w-[1400px] transition-all duration-300 ${
          showNavbar ? "translate-y-0 opacity-100" : "-translate-y-32 opacity-0"
        }`}
      >
        <div
          className={`${bgColor} backdrop-blur-lg rounded-full shadow-2xl px-4 md:px-12 py-3 md:py-6 flex items-center justify-between border border-white/3`}
        >
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img src={AquilaLogo} alt="Aquila" className="h-8 md:h-12" />
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10 flex-1 justify-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:text-[#ff6e1f] transition-colors text-lg font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Login Button */}
          <Button
            radius="xl"
            size="lg"
            className="hidden md:block bg-[#ff6e1f] hover:bg-[#ff8c4a] text-white px-10 text-lg font-semibold"
          >
            Login / Signup
          </Button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white p-1 hover:text-[#ff6e1f] transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 backdrop-blur-md bg-black/60"
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="px-4 pt-4 flex flex-col gap-3 w-[90vw] max-w-md mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile Header */}
            <div className="bg-[#2a2a2a]/95 backdrop-blur-lg rounded-full px-6 py-3 flex items-center justify-between border border-white/10 shadow-xl">
              <a href="/" onClick={() => setMenuOpen(false)}>
                <img src={AquilaLogo} alt="Aquila" className="h-8" />
              </a>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-white hover:text-[#ff6e1f] transition-colors"
                aria-label="Close menu"
              >
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Mobile Menu Content */}
            <div className="bg-[#2a2a2a]/95 backdrop-blur-lg rounded-3xl p-6 border border-white/10 shadow-xl">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-white hover:text-[#ff6e1f] transition-colors text-lg font-medium py-3 px-2"
                >
                  {link.name}
                </a>
              ))}

              <div className="mt-4">
                <Button
                  radius="xl"
                  size="lg"
                  fullWidth
                  className="bg-[#ff6e1f] hover:bg-[#ff8c4a] text-white text-lg font-semibold"
                >
                  Login / Signup
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
