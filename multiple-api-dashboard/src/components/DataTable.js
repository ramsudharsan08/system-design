import React from "react";

export default function DataTable({ data, columns }) {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col.key}>{col.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, i) => (
          <tr key={i}>
            {columns.map((col) => (
              <td key={col.key}>{item[col.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}