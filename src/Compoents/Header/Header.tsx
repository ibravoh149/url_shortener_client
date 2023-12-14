import React from "react";
import { Button } from "..";
import { CiLogin } from "react-icons/ci";

export default function Header() {
  return (
    <div className="flex justify-between items-center">
      <h4 className="bg-gradient-to-r from-[#EB568E] to-[#144EE3] bg-clip-text text-transparent text-4xl min-h-[3.5rem] py-8">
        Short.ly
      </h4>
      <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 gap-2">
        <Button className="!rounded-3xl bg-tetiary flex items-center gap-2">Login <CiLogin /></Button>
        <Button title="Register" className="!rounded-3xl hidden sm:block" />
      </div>
    </div>
  );
}
