import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  console.log(year);

  const y = new Date();
  console.log(y);

  return (
    <footer>
      <p id="name"> copyright {year} </p>
    </footer>
  );
}

export default Footer;
