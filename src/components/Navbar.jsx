
import  { useRef, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo/logo2.png";
import { Search, Menu, X } from "lucide-react";
import products from "../data/products/products.js";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef(null);
  const searchInputRef = useRef(null);
  const navigate = useNavigate();

  const navlinks = [
    { name: "HOME", to: "/" },
    { name: "ABOUT", to: "/about" },
    { name: "PRODUCTS", to: "/products" },
    { name: "BLOG", to: "/blog" },
    { name: "WHY US", to: "/why" },
    { name: "BLESSINGS", to: "/blessings" },
   
  ];

  // Handle search queries
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      setShowSearchResults(false);
      return;
    }

    // Split the search query into keywords
    const keywords = searchQuery.toLowerCase().split(/\s+/).filter(word => word.length > 0);
    
    const filteredProducts = products.filter((product) => {
      // Check if any keyword matches in the product name
      const productName = product.name.toLowerCase();
      const productCategory = product.category.toLowerCase();
      const productDescription = product.description.toLowerCase();
      
      // Match if all keywords are found in any of the searchable fields
      return keywords.every(keyword => 
        productName.includes(keyword) || 
        productCategory.includes(keyword) || 
        productDescription.includes(keyword)
      );
    });

    setSearchResults(filteredProducts);
    setShowSearchResults(true);
  }, [searchQuery]);

  // Focus input when search is opened
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearchResults(false);
        
        // On mobile, also close the search bar when clicking outside
        if (window.innerWidth < 768) {
          setIsSearchOpen(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleProductClick = (productId) => {
    setSearchQuery("");
    setShowSearchResults(false);
    setIsSearchOpen(false);
    navigate(`/product/${productId}`);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      // Clear any previous search when opening
      setSearchQuery("");
      setSearchResults([]);
    }
  };

  // useEffect(() => {
  //   if (isMenuOpen) {
  //     gsap.to(menuRef.current, { duration: 0.5, y: 0, ease: "circ.in", });
  //   } else {
  //     gsap.to(menuRef.current, { duration: 0.5, y: "-100%", ease: "power3.in" });
  //   }
  // }, [isMenuOpen]);

  return (
    <nav className="shadow-md fixed capitalize w-full z-20 overflow-visible sm:px-10 p-1 bg-white">
      <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4">
        <div className="flex justify-between w-full md:w-auto items-center">
          {/* Logo */}
          <Link to={`/`} className="py-1.5 relative">
            <img src={logo} height={180} width={180} className="z-50" alt="logo" />
          </Link>

          {/* Mobile actions */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Search icon for mobile */}
            <button
              onClick={toggleSearch}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Search"
            >
              {isSearchOpen ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
            </button>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Search Bar - Desktop (always visible) and Mobile (conditionally visible) */}
        <div 
          ref={searchRef} 
          className={`
            order-3 md:order-2 mt-2 md:mt-0
            ${isSearchOpen ? 
              'absolute top-full left-0 right-0 p-4 bg-white shadow-lg z-50 transition-all duration-300 ease-in-out transform translate-y-0 opacity-100' : 
              'md:relative md:opacity-100 md:transform-none md:shadow-none md:w-1/3 md:block hidden'
            }
          `}
        >
          <div className="relative w-full md:w-full lg:w-full">
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search for products by keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 rounded border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          
          {/* Search Results Dropdown */}
          {showSearchResults && searchResults.length > 0 && (
            <div className="absolute z-50 top-full left-0 right-0 bg-white border border-gray-200 rounded-b-lg shadow-lg max-h-96 overflow-y-auto">
              {searchResults.map((product) => (
                <div
                  key={product.id}
                  className="p-3 border-b hover:bg-gray-50 cursor-pointer flex items-center"
                  onClick={() => handleProductClick(product.id)}
                >
                  <div className="w-12 h-12 mr-3 flex-shrink-0">
                    <img 
                      src={Array.isArray(product.image) ? product.image[0] : product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium line-clamp-1">{product.name}</p>
                    <div className="flex justify-between">
                      <p className="text-xs text-gray-500">{product.category}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {showSearchResults && searchResults.length === 0 && searchQuery.trim() !== "" && (
            <div className="absolute z-50 top-full left-0 right-0 bg-white border border-gray-200 rounded-b-lg shadow-lg p-4">
              <p className="text-gray-500 text-center">No products found</p>
            </div>
          )}
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-5 order-2 md:order-3">
          <div className="flex flex-wrap items-center font-semibold space-x-4">
            {navlinks.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                className={({ isActive }) =>
                  isActive
                    ? "text-green-800 underline underline-offset-2 transition-all duration-200"
                    : "text-gray-700 hover:text-green-800 hover:underline duration-150"
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden mt-2 border-t pt-2">
          <div className="px-2 pb-3 space-y-2">
            {navlinks.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                className={({ isActive }) =>
                  isActive
                    ? "block px-3 py-2 text-green-800 font-semibold bg-green-50 rounded-md"
                    : "block px-3 py-2 text-gray-700 hover:text-green-700 hover:bg-gray-50 rounded-md"
                }
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>

    // <div className="border-b-4  border-white  backdrop:opacity-15  backdrop-blur-lg w-full fixed h-[100px] z-50 ">
    //   <div className="mx-auto flex max-w-7xl items-center justify-between py-4 px-8">
    //     <div className="inline-flex items-center">
    //       <span></span>
    //       <Link to={`/`} className="font-bold">
    //         <img
    //           src={logo}
    //           className="w-32  rounded-full"
    //           alt="Logo"
    //         />
    //       </Link>
    //     </div>
    //     <div className="hidden lg:block">
    //       <ul className="inline-flex">
    //         {navlinks.map((item) => (
    //           <Link key={item.name} to={item.to} className="btn">
    //             {item.name}
    //           </Link>
    //         ))}
    //       </ul>
    //     </div>

    //     <div className="lg:hidden">
    //       <TfiMenuAlt
    //         color="white"
    //         onClick={toggleMenu}
    //         className="h-6 w-6 cursor-pointer"
    //       />
    //     </div>

    //     <div
    //       ref={menuRef}
    //       className={`absolute inset-x-0 text-black top-0 z-50 p-2 transition-transform duration-300 ease-in-out lg:hidden bg-gray-400 transform ${isMenuOpen ? "translate-y-0" : "-translate-y-full"
    //         }`}
    //     >
    //       <div className="divide-y-2 divide-gray-50 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
    //         <div className="px-5 pb-6 pt-5">
    //           <div className="flex items-center justify-between">
    //             <div className="inline-flex items-center space-x-2">
    //               <Link to={`/`} className="font-bold">
    //                 <img
    //                   src={logo}
    //                   className="w-32  rounded-full"
    //                   alt="Logo"
    //                 />
    //               </Link>
    //             </div>
    //             <div className="-mr-2">
    //               <button
    //                 type="button"
    //                 onClick={toggleMenu}
    //                 className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
    //               >
    //                 <span className="sr-only">Close menu</span>
    //                 <MdCancel
    //                   color="white"
    //                   className="h-6 w-6"
    //                   aria-hidden="true"
    //                 />
    //               </button>
    //             </div>
    //           </div>

    //           <div className="mt-6">
    //             <nav className="grid gap-y-4">
    //               {navlinks.map((item) => (
    //                 <Link key={item.name} to={item.to} className="btn">
    //                   {item.name}
    //                 </Link>
    //               ))}
    //             </nav>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Navbar;
