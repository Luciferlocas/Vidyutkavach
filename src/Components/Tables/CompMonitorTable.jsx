import React from 'react';

const CompMonitorTable = () => {
    <>
    <table className="w-full">
      <thead className="uppercase border-t border-b dark:border-zinc-700 border-zinc-200">
        <tr className="text-center">
          <th>Source Type</th>
          <th>Energy Created</th>
          <th>Active Component Sites</th>
        </tr>
      </thead>
      <tbody>
        {data.map((alert) => (
          <tr key={alert.id}>
           <td>{}</td>
           <td>{}</td>
           <td>{}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </>

}
export default CompMonitorTable