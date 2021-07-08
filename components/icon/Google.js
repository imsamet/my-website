import * as React from "react";

function SvgGoogle(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21 12.21c0 5.136-3.574 8.79-8.852 8.79C7.087 21 3 16.979 3 12s4.087-9 9.148-9c2.463 0 4.536.89 6.134 2.355l-2.49 2.355C12.535 4.62 6.478 6.941 6.478 12c0 3.14 2.549 5.683 5.67 5.683 3.622 0 4.979-2.555 5.193-3.88h-5.194v-3.095h8.71c.084.461.143.904.143 1.502z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgGoogle;
