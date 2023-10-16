"use client";

import React from "react";
import useStateStore from "@/app/zustand/store";
import { useRouter } from "next/navigation";
import { states } from "../../constants/states";

const StateList = () => {
  const router = useRouter();
  const { searchValue, setSelectedState } = useStateStore((state) => state);

  const displayedStates =
    searchValue.length >= 2
      ? states.filter((state) =>
          state.toLowerCase().includes(searchValue.toLowerCase())
        )
      : [];

  const handleClickState = (e) => {
    setSelectedState(e.target.innerText);

    router.push(`/state/${e.target.innerText.toLowerCase()}`);
  };

  return (
    <div>
      {displayedStates?.length
        ? displayedStates.map((state, idx) => (
            <div key={idx} onClick={handleClickState}>
              {state}
            </div>
          ))
        : null}
    </div>
  );
};

export default StateList;
