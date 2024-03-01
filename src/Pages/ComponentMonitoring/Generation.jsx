import {Card, CardHeader } from '@nextui-org/react'
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Divider,Button} from "@nextui-org/react";
import React from 'react'

const Generation = () => {
    const [selectedKeys, setSelectedKeys] = React.useState(new Set(["All"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );
  const [selectedTimeKeys, setSelectedTimeKeys] = React.useState(new Set(["Last 24 Hours"]));
  const selectedTimeValue = React.useMemo(
    () => Array.from(selectedTimeKeys).join(", ").replaceAll("_", " "),
    [selectedTimeKeys]
  );
  return (
    <div className="grid grid-cols-12 gap-[1em] lg:pl-[16.5rem] px-4 lg:pr-[1rem] my-[1em] h-screen">
   <Card className='col-span-12'>
    <CardHeader>Power Generation Components</CardHeader>
    <Divider />
    <div>
    <Dropdown>
      <DropdownTrigger>
        <Button 
          variant="bordered" 
          className="capitalize"
        >
          {selectedValue}
        </Button>
      </DropdownTrigger>
      <DropdownMenu 
        aria-label="Single selection example"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
      >
        <DropdownItem key="All">All</DropdownItem>
        <DropdownItem key="Solar Plant">Solar Plant</DropdownItem>
        <DropdownItem key="Wind Plant">Wind Plant</DropdownItem>
        <DropdownItem key="Hydroelectric Power Plant">Hydroelectric Power Plant</DropdownItem>
        <DropdownItem key="Biomass Power Plant">Biomass Power Plant</DropdownItem>
        <DropdownItem key="Utility Grid">Utility Grid</DropdownItem>
      </DropdownMenu>
    </Dropdown>
    <Dropdown>
      <DropdownTrigger>
        <Button 
          variant="bordered" 
          className="capitalize"
        >
          {selectedValue}
        </Button>
      </DropdownTrigger>
      <DropdownMenu 
        aria-label="Single selection example"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedTimeKeys}
        onSelectionChange={setSelectedTimeKeys}
      >
        <DropdownItem key="Last 24 hours">Last 24 hours</DropdownItem>
        <DropdownItem key="Last 7 days">Last 7 Days</DropdownItem>
        <DropdownItem key="Last 30 days">Last 30 Days</DropdownItem>
      </DropdownMenu>
    </Dropdown>
    </div>
   </Card>
   </div>
  )
}

export default Generation