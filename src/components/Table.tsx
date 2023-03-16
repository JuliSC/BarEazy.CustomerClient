import React from "react";

interface TableProps {
  headers: string[];
  items: any[];
}

const Table: React.FC<TableProps> = (props) => {
  return (
    <table className="w-full">
      <thead>
        {props.headers.map((header) => (
          <th className="text-left">{header}</th>
        ))}
      </thead>
      <tbody>
        {props.items.map((item) => (
          <tr>
            {props.headers.map((header, i) => (
              <td>{item[i]}</td>
            ))}
          </tr>
        ))}
      </tbody>
      <tfoot></tfoot>
    </table>
  );
};

export default Table;
