import React, { useContext } from 'react'
import PatchContext from '../../Context/PatchManagement/PatchContext'
import { Button } from '@nextui-org/react';

export const Patch = ({patchData}) => {
    // const {patchData} = useContext(PatchContext)
    if (!patchData || !patchData.length) return <p className="text-center">No record found.</p>;
    console.log(patchData)
    return (
        <>
      <table className="w-full ">
        <thead className="uppercase border-b dark:border-zinc-700 border-zinc-200">
          <tr className="text-center">
            <th>Device Type</th>
            <th>Total Devices</th>
            <th>Patched Devices</th>
            <th>Pending Devices</th>
          </tr>
        </thead>
        <tbody>
          {patchData.map((patch) => (
            <tr key={patch.id} className=' h-8'>
                <td className="text-center">{patch.type}</td>
                <td className="text-center">{patch.total}</td>
                <td className="text-center">{patch.patched}</td>
                <td className="text-center">{patch.pending}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
    )
}

export const UpdateTable = ({updateData}) => {
    // const {updateData} = useContext(PatchContext)
    if (!updateData|| !updateData.length) return <p className="text-center">No record found.</p>;
    console.log(updateData)
    return (
        <>
      <table className="w-full ">
        <thead className="uppercase border-t border-b dark:border-zinc-700 border-zinc-200">
          <tr className="text-center sm:text-md text-sm">
            <th className='px-2'>Updation Time</th>
            <th className='px-2'>Hardware Name</th>
            <th className='px-2'>Patch Version</th>
          </tr>
        </thead>
        <tbody>
          {updateData.map((patch) => (
            <tr key={patch.id} className=' h-8'>
                <td className="text-center">{patch.time}</td>
                <td className="text-center">{patch.name}</td>
                <td className="text-center">{patch.version}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
    )
}

export const PendingTable = ({pendingData}) => {
    // const {pendingData} = useContext(PatchContext)
    if (!pendingData|| !pendingData.length) return <p className="text-center">No record found.</p>;
    console.log(pendingData)
    return (
        <>
      <table className="w-full ">
        <thead className="uppercase border-t border-b dark:border-zinc-700 border-zinc-200">
          <tr className="text-center sm:text-md text-sm">
            <th className='px-2'>Hardware Name</th>
            <th className='px-2'>Current Version</th>
            <th className='px-2'>Latest Version</th>
          </tr>
        </thead>
        <tbody>
          {pendingData.map((patch) => (
            <tr key={patch.id} className=' h-8'>
                <td className="text-center">{patch.name}</td>
                <td className="text-center">{patch.current}</td>
                <td className="text-center">{patch.latest}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
    )
}
export const PatchAlert = ({alertData}) => {
  // const {alertData} = useContext(PatchContext)
  if (!alertData|| !alertData.length) return <p className="text-center">No record found.</p>;
  console.log(alertData)
  return (
      <>
      
    <table className="w-full ">
      <thead className="uppercase border-t border-b dark:border-zinc-700 border-zinc-200">
        <tr className="text-center sm:text-md text-sm">
        <th className='px-2'>Hardware ID</th>
          <th className='px-2'>Hardware Name</th>
          <th className='px-2'>Patch Version</th>
          <th className='px-2'>Release Date</th>
          <th className='px-2'>Update Status</th>
        </tr>
      </thead>
      <tbody>
        {alertData.map((patch) => (
          <tr key={patch.id} className=' max-h-8'>
              <td className="text-center py-2">{patch.id}</td>
              <td className="text-center py-2">{patch.name}</td>
              <td className="text-center py-2">{patch.version}</td>
              <td className="text-center py-2">{patch.date}</td>
              <td className='flex justify-center'><Button className=' h-6 text-xs font-medium mt-2 '>Update</Button></td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
  )
}

const PatchTable = () => {}
  

export default PatchTable