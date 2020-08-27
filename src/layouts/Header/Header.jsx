import React from "react";
import "./Header.css";
import { H3 } from "../../components/Headings/Headings";
import Navbar from "../Navbar/Navbar";
import { Search } from "../../components/Inputs/Inputs";
import Autocomplete from "../../components/Autocomplete/Autocomplete";

function Header() {
  return (
    <div className="flex-col items-center p-3 pt-6 pb-6 header-wrapper bg-indigo-900">
      <i className="fas fa-bars text-white text-2xl"></i>
      <Navbar />
    </div>
  );
}

export default Header;
