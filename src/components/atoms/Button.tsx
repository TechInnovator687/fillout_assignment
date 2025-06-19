import React from "react";

type ButtonAtomProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  title?: string;
};

export const ButtonAtom: React.FC<ButtonAtomProps> = ({
  children,
  title,
  ...props
}) => (
  <button
    {...props}
    title={title}
    className={`select-none transition hover:bg-gray-100 rounded px-2 py-1 ${
      props.className ?? ""
    }`}
  >
    {children}
  </button>
);
