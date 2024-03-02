import React from 'react';

const CompMonitorTable = ({generated}) => {
  if (!generated || !generated.length) return <p className="text-center">No record found.</p>;
  return (
    <>
    <table className="w-full">
      <thead className="uppercase border-t border-b dark:border-zinc-700 border-zinc-200">
        <tr className="text-center h-12">
          <th>Source</th>
          <th>Energy Created</th>
          <th>Active Component Sites</th>
        </tr>
      </thead>
      <tbody>
        {generated.map((data) => (
          <tr key={data.id} className='h-12 text-center'>
           <td>{data.type}</td>
           <td>{data.energy}</td>
           <td className=' max-w-[100px]'>{data.active}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
  )
}
export default CompMonitorTable