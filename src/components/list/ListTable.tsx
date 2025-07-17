import ListTableHeader, { type SimpleColumn } from "./ListTableHeader";
import ListTableRow from "./ListTableRow";

interface ListTableProps {
  columns: SimpleColumn[];
  data: any[]; // Simple - accepts any array of data
}

function ListTable({ columns, data }: ListTableProps) {
  return (
    <table className="w-full text-left">
      <thead>
        <ListTableHeader columns={columns} />
      </thead>
      <tbody>
        {data.map((row, index) => (
          <ListTableRow key={index} columns={columns} row={row} />
        ))}
      </tbody>
    </table>
  );
}

export default ListTable;
