import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="pt-4">
      <div className="container">
        <h1 className="mb-5">Wilders Shop</h1>
        <nav className="c">
          <ul className="flex">
            <li className="mr-2 h-8">
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li className="mr-2 h-8">
              <NavLink to={"/admin/products"}>Ajouter un produit</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
