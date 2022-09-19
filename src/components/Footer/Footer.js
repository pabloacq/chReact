import React from 'react';
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <footer className="bg-dark text-center text-white mt-auto">
      <Link to="/" className="logoMain navbar-brand">CatShop</Link>
      <div className="text-center">
        © 2022 Copyright CatShop
      </div>
    </footer>


  );
}

export default NavBar;