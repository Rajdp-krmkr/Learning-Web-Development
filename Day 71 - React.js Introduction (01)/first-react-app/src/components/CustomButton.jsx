import React from "react";

const CustomButton = () => {
  return (
    <button
      onClick={() => {
        console.log("Logging out...");
      }}
    >
      Log out
    </button>
  );
};

export default CustomButton;
