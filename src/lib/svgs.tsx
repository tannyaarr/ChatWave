// src/lib/svgs.tsx

import { SVGProps } from "react";

export const MessageSeenSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    {...props}
  >
    <path d="M12 20l-6-6h4V4h4v10h4l-6 6z" />
  </svg>
);