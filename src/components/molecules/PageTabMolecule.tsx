import React from "react";
import { FiMoreVertical } from "react-icons/fi";
import { motion } from "framer-motion";
import { PageMenuMolecule } from "./PageMenu";
import { PageNameAtom } from "../atoms/PageName";

import { InfoIcon } from "../../assets/InfoIcon";
import { ShareIcon } from "../../assets/ShareIcon";
import { CheckIcon } from "../../assets/CheckIcon";
import { DetailsIcon } from "../../assets/DetailsIcon";

type PageTabMoleculeProps = {
  page: { id: string; name: string };
  isActive: boolean;
  isDragOver: boolean;
  onDragStart: () => void;
  onDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
  onDrop: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragLeave: () => void;
  onClick: () => void;
  isMenuOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
  index: number;
  totalCount: number;
};

export const PageTabMolecule: React.FC<PageTabMoleculeProps> = ({
  page,
  isActive,
  isDragOver,
  onDragStart,
  onDragOver,
  onDrop,
  onDragLeave,
  onClick,
  isMenuOpen,
  toggleMenu,
  closeMenu,
  index,
  totalCount,
}) => {
  return (
    <motion.div
      draggable
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDrop={onDrop}
      onDragLeave={onDragLeave}
      onClick={onClick}
      layout
      initial={{ scale: 1 }}
      whileDrag={{ scale: 1.05, boxShadow: "0 0 8px rgba(0,0,0,0.15)" }}
      className={`relative flex items-center gap-2 px-4 h-10 rounded cursor-pointer
        transition-colors duration-200
        ${
          isActive
            ? "bg-white text-black font-semibold border border-gray-300 shadow min-w-[110px]"
            : "bg-gray-200 text-gray-700 border border-transparent hover:bg-gray-300 min-w-[90px]"
        }
        ${isDragOver ? "border-blue-500 border-2" : ""}
      `}
    >
      {/* First tab: InfoIcon */}
      {index === 0 && (
        <InfoIcon
          className={`w-5 h-5 ${
            isActive ? "text-yellow-400" : "text-gray-600"
          }`}
          aria-label="Info"
        />
      )}

      {/* Middle tabs: DetailsIcon only if not first or last */}
      {index > 0 && index < totalCount - 1 && (
        <DetailsIcon
          className={`w-5 h-5 transition-colors duration-200 ${
            isActive ? "text-yellow-400" : "text-gray-600"
          }`}
          aria-label="Details"
        />
      )}

      {/* Last tab: CheckIcon */}
      {index === totalCount - 1 && (
        <CheckIcon
          className={`w-5 h-5 mr-1 transition-colors duration-200 ${
            isActive ? "text-yellow-400" : "text-gray-600"
          }`}
          aria-label="Completed"
        />
      )}

      <PageNameAtom name={page.name} />

      {/* Share icon always shown aligned right */}
      <ShareIcon
        className={`ml-auto w-5 h-5 transition-colors duration-200 ${
          isActive ? "text-yellow-400" : "text-gray-600"
        }`}
        aria-label="Share page"
      />

      {/* Menu button only if active */}
      {isActive && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            toggleMenu();
          }}
          className="p-1 rounded hover:bg-gray-100 transition ml-2"
          aria-label="Open menu"
        >
          <FiMoreVertical size={18} />
        </button>
      )}

      {/* The menu itself */}
      {isMenuOpen && <PageMenuMolecule onClose={closeMenu} />}
    </motion.div>
  );
};
