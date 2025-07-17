import { useState } from "react";

// Simple column type - no generics!
export interface SimpleColumn {
  label: string;
  accessor: string; // Just a string, much simpler!
}

interface ListTableRowProps {
  row: any;
  columns: SimpleColumn[];
}

const statusIcons = {
  Pending: "/Pending.svg",
  Posted: "/Posted.svg",
  Deleted: "/Deleted.svg",
  Active: "/Posted.svg",
  Removed: "/Deleted.svg",
} as const;

function ListTableRow({ row, columns }: ListTableRowProps) {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckBoxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <tr className="border-b border-gray-300 text-sm text-gray-700">
      <td className="px-4 py-3 font-normal">
        <label className="custom-checkbox-label">
          <input
            type="checkbox"
            className="hidden-checkbox size-5"
            checked={isChecked}
            onChange={handleCheckBoxChange}
          />
          <span className="custom-checkbox-icon"></span>
        </label>
      </td>

      {columns.map((col, index) => {
        const value = col.accessor === "actions" ? null : row[col.accessor];

        // Special handling for title column
        if (col.accessor === "title") {
          return (
            <td key={index} className="px-4 py-4">
              <div className="font-medium text-gray-900">{row.title}</div>
              <div className="text-sm text-gray-500">{row.author}</div>
            </td>
          );
        }

        // Special handling for status column
        if (col.accessor === "status") {
          return (
            <td key={index} className="p-4">
              <span
                className={`inline-flex items-center gap-2 px-4 py-1 rounded-full text-sm font-medium ${
                  value === "Deleted" || value === "Removed"
                    ? "bg-red-100 text-red-600"
                    : value === "Posted" || value === "Active"
                    ? "bg-green-100 text-green-500"
                    : "bg-orange-100 text-orange-600"
                }`}
              >
                <img
                  src={statusIcons[value as keyof typeof statusIcons]}
                  alt={value}
                  className="w-4 h-4"
                />
                {value}
              </span>
            </td>
          );
        }

        // Special handling for actions column
        if (col.accessor === "actions") {
          return (
            <td key={index} className="p-4">
              <div className="flex gap-3 justify-center bg-gray-200 rounded-3xl px-5 py-2">
                <img src="/file.svg" alt="copy" />
                <img src="/Edit.svg" alt="edit" />
                <img src="/Trash.svg" alt="delete" />
              </div>
            </td>
          );
        }

        // Regular columns
        return (
          <td key={index} className="p-4">
            {value || ""}
          </td>
        );
      })}
    </tr>
  );
}

export default ListTableRow;
