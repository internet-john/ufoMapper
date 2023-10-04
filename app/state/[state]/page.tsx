import React from "react";

const StatePage = ({ params }: { params: { state: string } }) => {
  return <h1>{params.state}</h1>;
};

export default StatePage;
