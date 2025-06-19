import React, { useState } from "react";
import { PageTabMolecule } from "../molecules/PageTabMolecule";
import { AddPageButtonMolecule } from "../molecules/AddPageButton";

type Page = {
  id: string;
  name: string;
};

const initialPages: Page[] = [
  { id: "info", name: "Info" },
  { id: "details", name: "Details" },
  { id: "other", name: "Other" },
  { id: "ending", name: "Ending" },
];

export const PagesManager = () => {
  const [pages, setPages] = useState<Page[]>(initialPages);
  const [activePageId, setActivePageId] = useState<string>("info");
  const [menuOpenId, setMenuOpenId] = useState<string | null>(null);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);

  const handleDrop = () => {
    if (
      draggedIndex !== null &&
      dragOverIndex !== null &&
      draggedIndex !== dragOverIndex
    ) {
      const updated = [...pages];
      const [moved] = updated.splice(draggedIndex, 1);
      updated.splice(dragOverIndex, 0, moved);
      setPages(updated);
      setActivePageId(moved.id);
    }
    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  const handleAddPage = (index: number) => {
    const newId = `page-${pages.length + 1}`;
    const newPage = { id: newId, name: `Page ${pages.length + 1}` };
    const updated = [...pages];
    updated.splice(index, 0, newPage);
    setPages(updated);
    setActivePageId(newId);
    setMenuOpenId(null);
  };

  return (
    <div className=" mx-auto p-4 bg-gray-50 rounded shadow flex items-center gap-1 select-none">
      {pages.map((page, i) => {
        const isActive = activePageId === page.id;
        const isDragOver = dragOverIndex === i;

        return (
          <React.Fragment key={page.id}>
            <PageTabMolecule
              page={page}
              index={i} // <-- Add index
              totalCount={pages.length} // <-- Add totalCount
              isActive={isActive}
              isDragOver={isDragOver}
              onDragStart={() => setDraggedIndex(i)}
              onDragOver={(e) => {
                e.preventDefault();
                setDragOverIndex(i);
              }}
              onDrop={(e) => {
                e.preventDefault();
                handleDrop();
              }}
              onDragLeave={() => setDragOverIndex(null)}
              onClick={() => {
                setActivePageId(page.id);
                setMenuOpenId(null);
              }}
              isMenuOpen={menuOpenId === page.id}
              toggleMenu={() =>
                setMenuOpenId(menuOpenId === page.id ? null : page.id)
              }
              closeMenu={() => setMenuOpenId(null)}
            />

            {/* Horizontal dashed line between tabs */}
            {i < pages.length - 1 && (
              <div className="w-12 border-b-2 border-dashed border-gray-400 my-1 pointer-events-none" />
            )}

            {/* Add page button between pages */}
            {i < pages.length - 1 && (
              <AddPageButtonMolecule
                onClick={() => handleAddPage(i + 1)}
                title="Add new page here"
              />
            )}
          </React.Fragment>
        );
      })}

      {/* Add button at the end */}
      <AddPageButtonMolecule
        onClick={() => handleAddPage(pages.length)}
        className="ml-4 px-4 py-2 border border-gray-400 rounded bg-white hover:bg-gray-100 text-gray-700 font-medium"
      >
        + Add Page
      </AddPageButtonMolecule>
    </div>
  );
};
