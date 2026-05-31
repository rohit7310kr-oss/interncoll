import React from "react";

const Button = function ({ variant, className, children }) {
  let variantClass;

  if (variant === "primary")
    variantClass =
      "border px-3 py-2 rounded-2xl bg-green-300 text-gray-800 mr-2";

  if (variant === "secondary") variantClass = "p-2 bg-gray-300 rounded-xl mr-2";

  return (
    <button className={`${variantClass} ${className} cursor-pointer`}>
      {children}
    </button>
  );
};

export default Button;
