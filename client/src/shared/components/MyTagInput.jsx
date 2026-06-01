import React, { useState } from "react";
import Tags from "@yaireo/tagify/dist/react.tagify"; // Import the React component
import "@yaireo/tagify/dist/tagify.css"; // Import the required CSS

const MyTagInput = ({
  values,
  mode = "select",
  whitelist = [],
  label = "tag",
  onChange,
}) => {
  const tagifySettings = {
    mode,
    tagTextProp: "label",
    enforceWhitelist: true,
    maxTags: 5,
    dropdown: {
      enabled: 0,
      maxItems: 20,
      classname: "tags-look",
      mapValueTo: "label",
      closeOnSelect: mode === "select",
      searchKeys: ["label", "value"],
    },
  };

  return (
    <div className="m-1 w-full">
      <label className="mb-2">{label}</label>
      <Tags
        value={values}
        whitelist={whitelist}
        className="w-full rounded-2xl p-4"
        settings={tagifySettings}
        onChange={onChange}
      />
    </div>
  );
};

export default MyTagInput;
