import React from "react";
import ControlledSwitches from "./ControlledSwitches";
import BasicSwitches from "./BasicSwitch";
import SwitchesGroup from "./SwitchesGroup";
import CustomizedSwitches from "./CustomizedSwitches";
import Label from "./Label";

const Switch = () => {
  return (
    <section>
      <BasicSwitches />
      <ControlledSwitches />
      <SwitchesGroup />
      <CustomizedSwitches />
      <Label />
    </section>
  );
};

export default Switch;
