import React from "react";

type PageMenuMoleculeProps = {
  onClose: () => void;
};

const actions = [
  {
    key: "setFirst",
    label: "Set as first page",
    icon: (
      <svg
        className="w-4 h-4 mr-2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M5 3v18" /> {/* Flagpole */}
        <path d="M5 3c2 0 4 2 6 2s4-2 6-2v8c-2 0-4 2-6 2s-4-2-6-2V3z" />{" "}
        {/* Flag */}
      </svg>
    ),
    className: "text-gray-700",
  },
  {
    key: "rename",
    label: "Rename",
    icon: (
      <svg
        className="w-4 h-4 mr-2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4 12.5-12.5z" />
      </svg>
    ),
    className: "text-gray-700",
  },
  {
    key: "duplicate",
    label: "Duplicate",
    icon: (
      <svg
        className="w-4 h-4 mr-2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
        <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
      </svg>
    ),
    className: "text-gray-700",
  },
];

const deleteAction = {
  key: "delete",
  label: "Delete",
  icon: (
    <svg
      className="w-4 h-4 mr-2 text-red-600"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" />
      <path d="M10 11v6" />
      <path d="M14 11v6" />
      <path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2" />
    </svg>
  ),
  className: "text-red-600",
};

export const PageMenuMolecule: React.FC<PageMenuMoleculeProps> = ({
  onClose,
}) => (
  <div
    className="absolute top-full right-0 mt-1 w-48 bg-white border border-gray-300 rounded shadow-lg text-gray-700 z-50
    transition-opacity duration-200 ease-in-out opacity-100"
  >
    <div className="px-4 py-2 font-semibold text-gray-500">Settings</div>
    <hr className="border-gray-200" />
    {actions.map(({ key, label, icon, className }) => (
      <button
        key={key}
        type="button"
        className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition flex items-center ${className}`}
        onClick={onClose}
      >
        {icon}
        {label}
      </button>
    ))}
    <hr className="border-gray-200 my-1" />
    <button
      key={deleteAction.key}
      type="button"
      className={`w-full text-left px-4 py-2 text-sm hover:bg-red-100 transition flex items-center ${deleteAction.className}`}
      onClick={onClose}
    >
      {deleteAction.icon}
      {deleteAction.label}
    </button>
  </div>
);
