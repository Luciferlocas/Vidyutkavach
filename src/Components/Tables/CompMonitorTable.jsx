import React from "react";

const CompMonitorTable = ({ data, prop, unit, color }) => {
  if (!data.length) return <p className="text-center">No record found.</p>;

  return (
    <>
      <table className="w-full">
        <thead className="capitalize border-b-1 dark:border-zinc-700 border-zinc-300 text-center text-zinc-600">
          <tr className="text-lg">
            <th className="p-4">NAME</th>
            <th className="p-4">TYPE</th>
            <th className="p-4">STATUS</th>
            <th className="p-4">VALUE</th>
          </tr>
        </thead>
        <tbody className="text-center text-sm">
          {data.map(
            (data) =>
              data.type === prop && (
                <tr
                  key={data.componentID}
                  className="border-b-1 dark:border-zinc-700 border-zinc-300 text-lg"
                >
                  <td className="capitalize p-4 max-w-24">{data.name}</td>
                  <td className="capitalize p-4 max-w-24">{data.type}</td>
                  <td className="capitalize p-4 max-w-24 truncate">
                    {data.status}
                  </td>
                  <td className={`${(color === "g") ? "text-yellow-600" : "text-red-600"} p-4 max-w-24`}>
                    {data.value} {unit} 
                  </td>
                </tr>
              )
          )}
        </tbody>
      </table>
    </>
  );
};
export default CompMonitorTable;
