export interface GridColumnType {
  displayName: string;
  id: string;
}

export interface LsqGridType {
  rows: any[];
  columns: GridColumnType[];
  rowUniqueId: string;
}

export default function LsqGrid({ rows, columns, rowUniqueId }: LsqGridType) {
  return (
    <section>
      <table>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.id}>{col.displayName}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => {
            return (
              <tr key={row[rowUniqueId]}>
                {columns.map((col) => (
                  <td key={col.id}>{JSON.stringify(row[col.id])}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
