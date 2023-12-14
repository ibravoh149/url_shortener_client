import React from "react";
import { Button, Input, SwitchInput } from "..";
import { GoLink } from "react-icons/go";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Form() {
  return (
    <form className="mt-11">
      <div className="border-4 border-tetiary rounded-full flex max-w-xl m-auto px-1 py-1 bg-secondary justify-between items-center min-w-full gap-2">
        <div className="flex flex-1 text-tableText items-center gap-1 ml-3 w-full">
          <span>
            <GoLink />
          </span>
          <Input
            className="flex-1 bg-transparent border-0 w-full sm:min-w-[350px] md:min-w-[400px] flex text-pink-200 focus:border-transparent focus:ring-0"
            placeholder="Enter the link here"
          />
        </div>
        <Button className="!rounded-[999px] sm:rounded-3xl w-11 h-11 sm:h-auto sm:w-auto flex items-center justify-center">
          <span className="hidden sm:block">Shorten Now!</span>
          <span className="block sm:hidden">
            <FaArrowRightLong />
          </span>
        </Button>
      </div>
      <div className="flex justify-center items-center my-5 text-red-50">
        <SwitchInput
          label="Auto Paste from Clipboard"
          labelClass="!text-tableText !text-sm"
        />
      </div>
      <p className="text-tableText text-center text-sm">You can create as <span className="text-[#EB568E]"> many</span> links as you want!</p>
    </form>
  );
}
