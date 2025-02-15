import React from "react";
import TransferList from "./TransferList";
import SelectAllTransferList from "./SelectAllTransferList";

const Transfer = () => {
  return (
    <section>
      <h3>Transfer</h3>
      <TransferList />
      <SelectAllTransferList />
    </section>
  );
};

export default Transfer;
