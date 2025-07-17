// list/ListTableHeader.tsx
export interface SimpleColumn {
  label: string;
  accessor: string;
}

interface ListTableHeaderProps {
  columns: SimpleColumn[];
}

function ListTableHeader({ columns }: ListTableHeaderProps) {
  return (
    <tr className="border-b border-gray-300 text-left  text-gray-700">
      <th className="px-4 py-3 font-normal ">
        <img src="/Rectangle3.svg" alt="Checkbox" />
      </th>
      {columns.map((col, index) => (
        <th key={index} className="p-6  font-semibold py-6">
          {col.label}
        </th>
      ))}
    </tr>
  );
}

export default ListTableHeader;
