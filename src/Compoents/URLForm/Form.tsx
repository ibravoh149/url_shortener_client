import React, { useState } from "react";
import { Button, ErrorField, Input, ListURL, SwitchInput } from "..";
import { GoLink } from "react-icons/go";
import { FaArrowRightLong } from "react-icons/fa6";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDataStore } from "../../Hooks";
import { timeout } from "../../utils";
import CopyBox from "../Common/Copy";

export default function Form() {
  const { addEntry } = useDataStore();
  const [recent, setRecent] = useState<ListURL>();

  const schema = yup.object({
    link: yup.string().url("Invalid url").required("Please provide url"),
  });
  const {
    formState: { errors, isValid },
    handleSubmit,
    register,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { link: "" },
    mode: "onChange",
  });

  const submit = async (payload: any) => {
    const res = addEntry(payload.link);
    navigator.clipboard.writeText(res.shortLink);
    setRecent(res);
    await timeout(500);
    reset();
    await timeout(3000);
    setRecent(undefined)
  };

  return (
    <form className="mt-11" onSubmit={handleSubmit(submit)}>
      <div className="border-4 border-tetiary rounded-full flex max-w-xl m-auto px-1 py-1 bg-secondary justify-between items-center min-w-full gap-2">
        <div className="flex flex-1 text-tableText items-center gap-1 ml-3 w-full">
          <span>
            <GoLink />
          </span>
          <Input
            className="flex-1 bg-transparent border-0 w-full sm:min-w-[350px] md:min-w-[400px] flex text-pink-200 focus:border-transparent focus:ring-0"
            placeholder="Enter the link here"
            register={register}
            name="link"
          />
        </div>
        <Button
          className="!rounded-[999px] sm:rounded-3xl w-11 h-11 sm:h-auto sm:w-auto flex items-center justify-center"
          disabled={!isValid}
        >
          <span className="hidden sm:block">Shorten Now!</span>
          <span className="block sm:hidden">
            <FaArrowRightLong />
          </span>
        </Button>
      </div>
      <>{ErrorField(errors.link?.message as string)}</>
      <div className="flex justify-center items-center my-5 text-red-50">
        {/* <SwitchInput
          label="Auto Paste from Clipboard"
          labelClass="!text-tableText !text-sm"
        /> */}
        {recent && (
          <span className="text-pink-400 text-lg flex items-center">
            Hurray! You link has been automatically copied to clipboard
          </span>
        )}
      </div>
      <p className="text-tableText text-center text-sm">
        You can create as <span className="text-[#EB568E]"> many</span> links as
        you want!
      </p>
    </form>
  );
}
