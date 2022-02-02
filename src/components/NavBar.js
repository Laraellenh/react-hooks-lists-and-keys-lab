import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const anchorTags = links.map((link) => (
    <a key={link} href={"#" + link}>
      {link}
    </a>
  ));

  return (
  <nav> {anchorTags}</nav>
    
  )
}

export default NavBar;
