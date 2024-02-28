import { ScrollShadow } from "@nextui-org/react";
import React from "react";

const AlertTable = ({ heading }) => {
  return (
    <div className="shadow-md lg:w-[calc(100vw-18em)] w-[calc(100vw-2em)] rounded-lg border dark:border-zinc-800 border-zinc-200 p-4">
      <ScrollShadow>
        <table className="w-full">
          <thead className="capitalize border-b-1 dark:border-zinc-700 border-zinc-300 text-center text-zinc-600">
            <tr>
              <th className="p-4">Alert ID</th>
              <th className="p-4">Timestamp</th>
              <th className="p-4">{heading}</th>
              <th className="p-4">Severity</th>
              <th className="p-4">Attacker IP</th>
              <th className="p-4">Response Action</th>
            </tr>
          </thead>
          <tbody className="text-center text-sm">
            <tr className="capitalize border-b-1 dark:border-zinc-700 border-zinc-300">
              <td className="p-4 max-w-24">Hello</td>
              <td className="p-4 max-w-24">Hello</td>
              <td className="p-4 max-w-24 truncate">Hello</td>
              <td className="p-4 max-w-24">Hello</td>
              <td className="p-4 max-w-24">Hello</td>
              <td className="p-4 max-w-24 truncate">Hello</td>
            </tr>
          </tbody>
        </table>
      </ScrollShadow>
    </div>
  );
};

export default AlertTable;
