import * as React from "react";

function SvgPrev(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M6 6h2v12H6V6zm3.5 6l8.5 6V6l-8.5 6z" fill="currentColor" />
    </svg>
  );
}

export default SvgPrev;
