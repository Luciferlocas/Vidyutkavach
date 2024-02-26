import React from "react";
import AlertTable from "../../Components/Tables/AlertTable";

const HoneypotAlerts = () => {
  return (
    <div className="grid grid-cols-12 gap-[1em] lg:pl-[16.5rem] px-4 lg:pr-[1rem] my-[1em] h-[calc(100vh-6em)]">
      <AlertTable heading="Threat Category"/>
    </div>
  );
};

export default HoneypotAlerts;
