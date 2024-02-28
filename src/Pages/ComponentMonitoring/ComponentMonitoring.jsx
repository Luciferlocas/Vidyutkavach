import React from 'react'
import { Card, CardHeader, CardBody, Divider,  Button } from "@nextui-org/react";
import { UpdateTable } from '../../Components/Tables/PatchTable';
const ComponentMonitoring = () => {
  return (
    <div className="grid grid-cols-12 gap-[1em] lg:pl-[16.5rem] px-4 lg:pr-[1rem] my-[1em]">
      <Card className='col-span-12'>
        <CardHeader className="flex gap-3">
          <p className="text-md">Power Generation Components</p>
        </CardHeader>
        <CardBody>
         <UpdateTable/>
        </CardBody>
      </Card>
    </div>
  )
}

export default ComponentMonitoring
