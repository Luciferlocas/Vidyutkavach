import React from 'react'
import { Card, CardHeader, CardBody, Divider,  Button } from "@nextui-org/react";
import CompMonitorTable from '../../Components/Tables/CompMonitorTable';
const ComponentMonitoring = () => {
  return (
    <div className="grid grid-cols-12 gap-[1em] lg:pl-[16.5rem] px-4 lg:pr-[1rem] my-[1em] h-screen">
      <Card className='col-span-12'>
        <CardHeader className="flex gap-3">
          <p className="text-md">Power Generation Components</p>
        </CardHeader>
        <CardBody>
         <CompMonitorTable  generated={[
            {
              id: "1",
              energy: "44 KW",
              type: "Smart Meter",
              active: "Solar plant A, Solar plant B, Solar plant C, Solar plant D",
            },
          ]}/>
         <Button  className=' w-24 text-xs font-medium self-end '>More Details</Button>
        </CardBody>
      </Card>
    </div>
  )
}

export default ComponentMonitoring
