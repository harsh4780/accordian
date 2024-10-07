// import { useState } from "react";
// import { Menu, X } from "lucide-react"; // Icons
// import Homepage from "./Homepage";

// export default function AdventureHeader() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <header className="relative">
//       <nav className="absolute top-0 left-0 right-0 z-20">
//         <div className="container border border-white mx-auto px-4 py-4">
//           <div className="flex items-center justify-between md:hidden">
//             {/* Left: Hamburger Icon for Mobile */}
//             <button
//               className="text-white"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//             >
//               {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//               <span className="sr-only">Toggle menu</span>
//             </button>

//             {/* Center: Logo for Mobile */}
//             <a href="/" className="text-2xl font-bold text-white mx-auto">
//               ADVENTURE
//             </a>

//             {/* Right: Button for Mobile */}
//             <button className="bg-indigo-500 text-white py-2 px-4 rounded">
//               Button
//             </button>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center justify-between">
//             {/* Logo */}
//             <a href="/" className="text-2xl font-bold text-white">
//               ADVENTURE
//             </a>

//             {/* Navigation Links */}
//             <div className="flex space-x-6">
//               <NavLink href="/">Home</NavLink>
//               <NavLink href="/tours">Tours</NavLink>
//               <NavLink href="/explore">Explore</NavLink>
//               <NavLink href="/about">About</NavLink>
//               <NavLink href="/contact">Contact</NavLink>
//             </div>

//             {/* Right: Button */}
//             <button className="bg-indigo-500 text-white py-2 px-4 rounded">
//               Button
//             </button>
//           </div>
//         </div>

//         {/* Mobile Dropdown Menu */}
//         {isMenuOpen && (
//           <div className="md:hidden bg-gray-800 transition-all duration-500 bg-opacity-90">
//             <div className="container mx-auto px-4 py-4">
//               <div className="flex flex-col items-center space-y-4">
//                 <NavLink href="/">Home</NavLink>
//                 <NavLink href="/tours">Tours</NavLink>
//                 <NavLink href="/explore">Explore</NavLink>
//                 <NavLink href="/about">About</NavLink>
//                 <NavLink href="/contact">Contact</NavLink>
//               </div>
//             </div>
//           </div>
//         )}
//       </nav>

//       {/* Background Image Section */}
//       <div className="relative h-screen">
//         <img
//           src="https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           alt="Mountain landscape"
//           className="object-cover w-full h-full"
//         />
//         <div className="absolute inset-0 bg-black bg-opacity-50" />
        
//         {/* Homepage content inside the image */}
//         <section className="container absolute inset-0 top-20 mx-auto py-16 px-4">
//         <div className="flex flex-col md:flex-row justify-between items-center">
//           {/* Left Section: Two paragraphs */}
//           <div className="md:w-1/2 space-y-4">
//             <h1 className="text-4xl font-bold text-gray-800">Discover Adventure</h1>
//             <p className="text-lg text-gray-600">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
//               commodo ligula eget dolor. Aenean massa.
//             </p>
//             <p className="text-lg text-gray-600">
//               Cum sociis natoque penatibus et magnis dis parturient montes,
//               nascetur ridiculus mus. Donec quam felis, ultricies nec.
//             </p>
//           </div>

//           {/* Right Section: Image */}
//           <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
//             <img
//               src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438"
//               alt="Adventure"
//               className="w-full max-w-md object-cover rounded-lg shadow-lg"
//             />
//           </div>
//         </div>
//       </section>
//       </div>

//     </header>
//   );
// }

// function NavLink({ href, children }) {
//   return (
//     <a href={href} className="text-white hover:text-gray-300 transition-colors">
//       {children}
//     </a>
//   );
// }

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function AdventureHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/tours", label: "Tours" },
    { href: "/explore", label: "Explore" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative">
      <nav className={`fixed top-0 left-0 right-0 z-20 transition-all duration-300 ${isSticky ? 'bg-gray-800 shadow-md' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between md:hidden">
            <button
              className="text-white"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle menu</span>
            </button>

            <a href="/" className="text-2xl font-bold text-white mx-auto">
              ADVENTURE
            </a>

            <button className="bg-indigo-500 text-white py-2 px-4 rounded">
              Button
            </button>
          </div>

          <div className="hidden md:flex items-center justify-between">
            <a href="/" className="text-2xl font-bold text-white">
              ADVENTURE
            </a>

            <div className="flex space-x-6">
              {menuItems.map((item) => (
                <NavLink key={item.href} href={item.href}>{item.label}</NavLink>
              ))}
            </div>

            <button className="bg-indigo-500 text-white py-2 px-4 rounded">
              Button
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu with scale animation */}
        <div 
          className={`md:hidden bg-gray-800 overflow-hidden transition-all duration-300 ease-in-out origin-top ${
            isMenuOpen ? 'max-h-screen opacity-100 scale-y-100' : 'max-h-0 opacity-0 scale-y-0'
          }`}
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col items-center space-y-4">
              {menuItems.map((item) => (
                <NavLink 
                  key={item.href} 
                  href={item.href}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Rest of the component remains the same */}
      <div className="relative h-screen">
        <img
          src="https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Mountain landscape"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        
        <section className="container absolute inset-0 top-20 mx-auto py-16 px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="md:w-1/2 space-y-4">
              <h1 className="text-4xl font-bold text-white">Discover Adventure</h1>
              <p className="text-lg text-gray-200">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa.
              </p>
              <p className="text-lg text-gray-200">
                Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Donec quam felis, ultricies nec.
              </p>
            </div>

            <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
              <img
               src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438"
                alt="Adventure"
                className="w-full max-w-md object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>
      </div>
    </header>
  );
}

function NavLink({ href, children }) {
  return (
    <a href={href} className="text-white hover:text-gray-300 transition-colors relative group">
      {children}
      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
    </a>
  );
}