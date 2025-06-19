import React from "react";
import { ButtonAtom } from "../atoms/Button";

type AddPageButtonMoleculeProps = {
  onClick: () => void;
  title?: string;
  className?: string;
  children?: React.ReactNode;
};

export const AddPageButtonMolecule: React.FC<AddPageButtonMoleculeProps> = ({
  onClick,
  title,
  className,
  children = "+",
}) => (
  <ButtonAtom
    onClick={onClick}
    title={title}
    className={`text-gray-400 hover:text-gray-600 px-2 select-none ${
      className ?? ""
    }`}
  >
    {children}
  </ButtonAtom>
);
