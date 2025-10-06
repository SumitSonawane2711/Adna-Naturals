import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Footer = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ADNA Naturals",
    url: "https://adnanaturals.com",
    logo: "https://adnanaturals.com/public/feviicon.png",
    description: "Natural and organic baby care products made with love.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Baby Care Street",
      addressLocality: "Naturals City",
      addressRegion: "NA",
      postalCode: "12345",
      addressCountry: "US",
    },
    // geo: {
    //   "@type": "GeoCoordinates",
    //   latitude: "40.7128",
    //   longitude: "-74.0060",
    // },
    // telephone: "+1-800-000-0000",
    // openingHoursSpecification: [
    //   {
    //     "@type": "OpeningHoursSpecification",
    //     dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    //     opens: "09:00",
    //     closes: "17:00",
    //   },
    // ],
  };

  const links = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "PRODUCTS", path: "/products" },
    { name: "BABYCARE TIPS", path: "/babycare-tips" },
    { name: "WHY WE", path: "/why" },
    { name: "BLESSINGS", path: "/blessings" },
  ];

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>

      <footer className="bg-gray-50 border-t border-green-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-600">
            {/* Logo & Socials */}
            <div className="flex flex-col items-center sm:items-start space-y-4">
              {/* Logo */}
              <img
                src={"/skg.png"}
                sizes={"(max-width: 340px) 50px, 100px"}
                className="w-20 z-50"
                alt="logo"
              />
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/adna.naturals/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={"/assets/icons/instagram.png"}
                    alt="ADNA Naturals Logo"
                    className="w-6 h-6 hover:scale-125 transition-all duration-150 transform"
                  />
                </a>
                <a
                  href="https://www.facebook.com/adna.naturals"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={"/assets/icons/facebook.png"}
                    alt="ADNA Naturals Logo"
                    className="w-6 h-6 hover:scale-125 transition-all duration-150 transform"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/company/107899030/admin/page-posts/published/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={"/assets/icons/linkedin.png"}
                    alt="ADNA Naturals Logo"
                    className="w-6 h-6 hover:scale-125 transition-all duration-150 transform"
                  />
                </a>
                <a
                  href="https://www.youtube.com/@ADNA.Naturals"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={"/assets/icons/youtube.png"}
                    alt="ADNA Naturals Logo"
                    className="w-6 h-6 hover:scale-125 transition-all duration-150 transform"
                  />
                </a>
                <a
                  href="https://in.pinterest.com/adnanaturals/_pins/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={"/assets/icons/pinterest.png"}
                    alt="ADNA Naturals Logo"
                    className="w-6 h-6 hover:scale-125 transition-all duration-150 transform"
                  />
                </a>
                <a
                  href="https://x.com/AdnaNaturals"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={"/assets/icons/twitter.png"}
                    alt="ADNA Naturals Logo"
                    className="w-6 h-6 hover:scale-125 transition-all duration-150 transform"
                  />
                </a>
              </div>
              <p className="mb-2">
                Nurturing your baby with the best natural care products.
              </p>
              <p>
                © 2025 ADNA Naturals. All rights reserved.
              </p>
            </div>

            {/* Useful Links */}
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="grid grid-cols-2 space-y-2">
                {links.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="hover:text-blue-500"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Footer Description */}
            <div className="text-center sm:text-left flex flex-col justify-center">
              <h3 className="text-lg font-semibold mb-4">
                Privacy & Compliance
              </h3>
              <p>
                ADNA Naturals is committed to protecting your privacy. By using
                this website, you agree to our Privacy Policy and Terms of Use.
                We collect and use information only as necessary to provide our
                products and services, in compliance with applicable data
                protection laws. We do not sell or rent your personal
                information to third parties.
              </p>
              <p>
                For concerns, please contact : <a className="text-blue-500" href="mailto:contact@adnanaturals.com">contact@adnanaturals.com</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
