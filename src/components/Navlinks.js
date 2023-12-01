// // NavLinks.js

// import React from "react";
// import { NavLink } from "react-router-dom";
// import styles from "./navbar.module.css";

// const NavLinks = ({ closeNavbar }) => (
//   <ul className={styles.bigScreenMenu}>
//     <li>
//       <NavLink
//         to="/"
//         className={({ isActive }) => (isActive ? styles.active : "")}
//         onClick={closeNavbar}
//       >
//         Home
//       </NavLink>
//     </li>
//     <li>
   
//         <NavLink
//           to="about"
//           className={({ isActive }) => (isActive ? styles.active : "")}
//           onClick={closeNavbar}
//         >
//           About
//         </NavLink>
    
//     </li>
//     <li>
//       <NavLink
//         to="donate"
//         className={({ isActive }) => (isActive ? styles.active : "")}
//         onClick={closeNavbar}
//       >
//         Donate
//       </NavLink>
//     </li>
//     <li>
//       <NavLink
//         to="contact"
//         className={({ isActive }) => (isActive ? styles.active : "")}
//         onClick={closeNavbar}
//       >
//         Contact
//       </NavLink>
//     </li>
//   </ul>
// );

// export default NavLinks;
