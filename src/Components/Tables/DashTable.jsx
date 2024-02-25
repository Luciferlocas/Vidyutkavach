import React from "react";
import moment from "moment";

const DashTable = ({ data, header }) => {
  if (!data || !data.length) return <p className="text-center">No alerts found.</p>;

  return (
    <>
      <table className="w-full">
        <thead className="uppercase border-t border-b dark:border-zinc-700 border-zinc-200">
          <tr className="text-center">
            <th>Timestamp</th>
            <th>{header}</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((alert) => (
            <tr key={alert.id}>
              <td className="text-center">
                {moment(alert.timestamp).format("DD-MM-YYYY  HH:mm A")}
              </td>
              <td className="text-center">{alert.ip}</td>
              <td className="pl-8 py-1">{alert.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default DashTable;
