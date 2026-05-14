import type { ReactNode } from "react";

interface TableProps {
  headers: string[];
  children: ReactNode;
}

const Table = ({
  headers,
  children,
}: TableProps) => {
  return (
    <div className="theme-card overflow-hidden rounded-3xl">
      {/* WRAPPER */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px] border-collapse">
          {/* HEAD */}
          <thead>
            <tr className="border-b border-white/10 bg-white/5">
              {headers.map((header) => (
                <th
                  key={header}
                  className="px-6 py-5 text-left text-sm font-medium text-zinc-400"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          {/* BODY */}
          <tbody>{children}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;