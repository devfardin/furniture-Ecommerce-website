import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import parse from "html-react-parser";
const TextEditor = ({ textValue, setTextValue }) => {
  console.log(textValue);

  //   Customize the toolbar options
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "formula"],
      [{ "code-block": true }],
      [{ color: [] }],
      [{ align: [] }],
      ["clean"],
    ],
  };
  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "color",
    "align",
    "formula",
    "code-block",
  ];

  return (
    <div>
      <ReactQuill
        theme="snow"
        value={textValue}
        onChange={setTextValue}
        modules={modules}
        formats={formats}
      />
    </div>
  );
};

export default TextEditor;
