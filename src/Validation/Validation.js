import React from "react";

const validation = (props) => {
  const valid = "Text long enough";
  const invalid = "Text too short";

  if (props.length >= 5) {
    return <div>{valid}</div>;
  } else {
    return <div>{invalid}</div>;
  }
};

export default validation;
