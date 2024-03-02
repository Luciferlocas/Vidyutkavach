import React, { useContext } from "react";
import DashboardContext from "../../Context/Dashboard/DashboardContext";

const CompMonitorTable = () => {
  const { component } = useContext(DashboardContext);

  if (!component.length) return <p className="text-center">No record found.</p>;

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
          {component.map((data) => (
            <tr
              key={data.componentID}
              className="border-b-1 dark:border-zinc-700 border-zinc-300 text-lg"
            >
              <td className="capitalize p-4 max-w-24">{data.name}</td>
              <td className="capitalize p-4 max-w-24">{data.type}</td>
              <td className="capitalize p-4 max-w-24 truncate">{data.status}</td>
              <td className="p-4 max-w-24 text-green-600">{data.value} kW</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default CompMonitorTable;
