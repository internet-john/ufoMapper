"use client";

import React from "react";
import useStateStore from "@/app/zustand/store";
import { useRouter } from "next/navigation";

const StateList = () => {
  const router = useRouter();
  const { searchValue, setSelectedState } = useStateStore((state) => state);

  const stateNames = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];

  const displayedStates =
    searchValue.length >= 2
      ? stateNames.filter((state) =>
          state.toLowerCase().includes(searchValue.toLowerCase())
        )
      : [];

  const handleClickState = (e) => {
    setSelectedState(e.target.innerText);

    router.push(`/state/${e.target.innerText.toLowerCase()}`);
  };

  return (
    <div>
      {displayedStates?.length &&
        displayedStates.map((state, id) => (
          <div onClick={handleClickState}>{state}</div>
        ))}
    </div>
  );
};

export default StateList;
