"use client";

import React, { useState } from "react";
import useStateStore from "@/app/zustand/store";

// todo -- autocomplete feature
const SearchBar = () => {
  const { searchValue, setSearchValue } = useStateStore((state) => state);
  const handleChange = (e): void => {
    e.preventDefault();
    setSearchValue(e.target.value);
  };

  return (
    <input className="bg-slate-900 color-white w-min" onChange={handleChange} />
  );
};

export default SearchBar;
