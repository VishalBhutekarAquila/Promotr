import { Box, TextInput, Button } from "@mantine/core";
import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";

const quickLinks = [
  { name: "About", href: "/why-promotr" },
  { name: "Event Staffing", href: "/staff" },
  { name: "Brand Ambassadors & Promoters", href: "/brand-ambassador" },
  { name: "Influencers & DJs", href: "/influencers" },
  { name: "Trade Show & Conference Staffing", href: "/m-trade_show" },
  { name: "Promotional Models", href: "/models" },
  { name: "Security & Bouncers", href: "/business" },
  { name: "Talent", href: "/talentpage" },
  { name: "Gigs", href: "/m-gigs" },
  { name: "Hosts", href: "/hosts" },
];

const FooterSection = () => {
  return (
    <Box className="relative w-full bg-gradient-to-b from-[#420300] to-[#080101] py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          <div>
            <h3 className="font-bold text-[#f36e29] text-2xl sm:text-3xl mb-8">
              Quick Links
            </h3>
            <nav className="space-y-4">
              {quickLinks.map((link, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="text-white text-2xl font-light">›</span>
                  <a
                    href={link.href}
                    className="font-normal text-white text-lg hover:text-[#f36e29] transition-colors"
                  >
                    {link.name}
                  </a>
                </div>
              ))}
            </nav>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-bold text-4xl sm:text-5xl lg:text-6xl mb-8">
              <span className="text-white">Stay </span>
              <span className="text-[#f36e29]">Connected</span>
            </h3>

            <p className="font-medium text-white text-lg sm:text-xl lg:text-2xl leading-normal mb-6">
              Stay updated with the latest opportunities, trends, and event
              insights. Join our community of event professionals and businesses
              today.
            </p>

            <div className="flex gap-4 mb-8">
              <a
                href="#"
                className="text-white hover:text-[#f36e29] transition-colors"
              >
                <Instagram size={32} />
              </a>
              <a
                href="#"
                className="text-white hover:text-[#f36e29] transition-colors"
              >
                <Twitter size={32} />
              </a>
              <a
                href="#"
                className="text-white hover:text-[#f36e29] transition-colors"
              >
                <Facebook size={32} />
              </a>
              <a
                href="#"
                className="text-white hover:text-[#f36e29] transition-colors"
              >
                <Youtube size={32} />
              </a>
            </div>

            <div className="relative w-full max-w-2xl h-[60px] sm:h-[68px] bg-[#7a625e8a] rounded-[23.33px] border border-[#faeecf6b] shadow-[4.17px_10px_3.33px_#00000066] flex items-center">
              <TextInput
                type="email"
                placeholder="Enter your email"
                className="flex-1 h-full"
                styles={{
                  root: {
                    flex: 1,
                    height: "100%",
                  },
                  wrapper: {
                    height: "100%",
                  },
                  input: {
                    backgroundColor: "transparent !important",
                    border: 0,
                    color: "black",
                    fontSize: "18px",
                    height: "100%",
                    paddingLeft: "24px",
                    "&::placeholder": {
                      color: "#ababab",
                    },
                    "&:focus": {
                      outline: "none",
                    },
                  },
                }}
              />
              <Button
                styles={{
                  root: {
                    backgroundColor: "#f36e29",
                    color: "#ffffff",
                    fontSize: "18px",
                    fontWeight: 600,
                    width: "180px",
                    height: "60px",
                    borderRadius: "23.33px",
                    border: "1px solid rgba(250, 238, 207, 0.42)",
                    boxShadow: "4.17px 10px 3.33px rgba(0, 0, 0, 0.4)",
                    marginRight: "4px",
                    "&:hover": {
                      backgroundColor: "#f36e29",
                      opacity: 0.9,
                    },
                  },
                }}
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="font-bold text-white text-lg mb-2">
            © 2025 Aquila Events & Marketing. All rights reserved.
          </p>
          <p className="font-normal italic text-white text-lg">
            Built to empower events. Driven by people.
          </p>
        </div>
      </div>
    </Box>
  );
};

export default FooterSection;
