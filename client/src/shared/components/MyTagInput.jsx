import React, { useState } from "react";
import Tags from "@yaireo/tagify/dist/react.tagify"; // Import the React component
import "@yaireo/tagify/dist/tagify.css"; // Import the required CSS

const MyTagInput = () => {
  const [values, setValues] = useState([]);

  const whitelist = ["hello", "world"];

  const tagifySettings = {
    enforceWhitelist: true,
    tagTextProp: "label",
    maxTags: 5,
    dropdown: {
      enabled: 0, // 2. Show suggestions on focus (0 chars typed)
      maxItems: 20, // Limit visible items in list
      classname: "tags-look", // Optional: Custom class for styling
    },
  };

  const onChange = (e) => {
    setValues(e.detail.tagify.value);
  };

  return (
    <div className="m-1 w-full">
      <label>Tag</label>
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
