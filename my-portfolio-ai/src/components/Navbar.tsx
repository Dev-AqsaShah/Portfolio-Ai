// "use client";

// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";
// import { useState } from "react";
// import ThemeToggle from "@/components/ThemeToggle";
// import { HiOutlineDotsVertical, HiX } from "react-icons/hi";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const navLinks = [
//     { name: "Home", href: "/" },
//     { name: "About", href: "/about" },
//     { name: "Projects", href: "/projects" },
//     { name: "Skills", href: "/skills" },
//     { name: "Contact", href: "/contact" },
//   ];

//   // Animation variants for menu container
//   const menuVariants = {
//     hidden: { opacity: 0, x: 100 },
//     visible: { opacity: 1, x: 0, transition: { duration: 0.4, staggerChildren: 0.15 } },
//     exit: { opacity: 0, x: 100, transition: { duration: 0.3 } },
//   };

//   // Animation variants for menu items
//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
//   };

//   return (
//     <motion.nav
//       initial={{ y: -80 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.5, ease: "easeOut" }}
//       className="fixed w-full z-50 bg-purple-700 shadow-md"
//     >
//       <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        
//         {/* LEFT: Theme Toggle */}
//         <ThemeToggle />

//         {/* RIGHT: Navigation Links (Desktop) */}
//         <div className="hidden sm:flex items-center space-x-6">
//           {navLinks.map((link) => (
//             <Link
//               key={link.name}
//               href={link.href}
//               className="relative group font-bold text-purple-100"
//             >
//               {link.name}
//               <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-purple-400 group-hover:w-full transition-all"></span>
//             </Link>
//           ))}
//         </div>

//         {/* Mobile Menu Trigger (3 dots) */}
//         <div className="sm:hidden">
//           <button
//             onClick={() => setMenuOpen(true)}
//             className="text-white text-3xl"
//           >
//             <HiOutlineDotsVertical />
//           </button>
//         </div>
//       </div>

//       {/* 🔥 Animated Gradient Line at Bottom */}
//       <motion.div
//         initial={{ x: "-100%" }}
//         animate={{ x: "100%" }}
//         transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
//         className="w-full h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600"
//       />

//       {/* Animated Mobile Menu */}
//       <AnimatePresence>
//         {menuOpen && (
//           <motion.div
//             variants={menuVariants}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             className="fixed top-0 right-0 w-3/4 h-full shadow-lg flex flex-col items-center pt-16 space-y-6 z-50"
//           >
//             {/* Close Button */}
//             <button
//               onClick={() => setMenuOpen(false)}
//               className="absolute top-4 right-4 text-3xl text-purple-900"
//             >
//               <HiX />
//             </button>

//             {/* Menu Links */}
//             {navLinks.map((link) => (
//               <motion.div
//                 key={link.name}
//                 variants={itemVariants}
//                 className="w-40"
//               >
//                 <Link
//                   href={link.href}
//                   onClick={() => setMenuOpen(false)}
//                   className="block w-full text-center bg-purple-300 text-purple-900 font-semibold py-2 rounded-lg shadow-md hover:bg-purple-400 transition"
//                 >
//                   {link.name}
//                 </Link>
//               </motion.div>
//             ))}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// }






