import React from "react";

const Tag = function ({ variant, children }) {
  let variantClass;

  if (variant === "primary") variantClass = "bg-green-300 ml-1";

  if (variant === "secondary") variantClass = "bg-gray-300";

  return (
    <span className={`border rounded-2xl px-2 ${variantClass}`}>
      {children}
    </span>
  );
};

export default Tag;
