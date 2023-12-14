import React from "react";
import { Button, Input, SwitchInput, Table } from "../Compoents";

function App() {
  return (
    // <div className='bg-gradient-to-br from-[#1F89DB] to-[#0E131E] h-screen'>
    <div className="bg-[#0E131E] h-screen">
      <h3 className="text-green-300">
        Linkly is an efficient and easy-to-use URL shortening service that
        streamlines your online experience.
      </h3>
      <Button title="click me" className="rounded-[3rem]" />
      <SwitchInput />
      <Input
        label="ENter text here"
        className="bg-secondary text-pink-200"
        title="Enter some text"
        labelStyle="text-white"
      />

      <Table
        column={[
          { accessor: "firstName", value: "First name" },
          { accessor: "lastName", value: "Last Name" },
          { accessor: "email", value: "Email" },
        ]}
        data={[
          {
            firstName: { value: "James" },
            lastName: { value: "Bond" },
            email: { value: "Bond@jame.com" },
          },

          {
            firstName: { value: "Jame" },
            lastName: { value: "Doe" },
            email: { value: "jane@Jay.com" },
          },

          {
            firstName: { value: "Blong" },
            lastName: { value: "Gist" },
            email: { value: "gist@brow.com" },
          },
        ]}
      />
    </div>
  );
}

export default App;
