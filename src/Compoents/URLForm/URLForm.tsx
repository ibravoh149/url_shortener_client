import React from "react";
import Form from "./Form";

export default function URLForm() {

  return (
    <div className="w-full py-3 max-w-2xl m-auto">
      <h3 className="text-transparent text-4xl min-h-[3.5rem] my-4 font-bold text-center">
        <span className="bg-gradient-to-br from-[#144EE3] to-[#EB568E] bg-clip-text">
          Shorten
        </span>{" "}
        <span className="text-[#EB568E] bg-clip-text">Your really Loooong</span>{" "}
        <span className="bg-gradient-to-br to-[#144EE3] from-[#EB568E] bg-clip-text">
          Links :)
        </span>
      </h3>
      <p className="text-text-base text-tableText text-center justify-center">
        Linkly is an efficient and easy-to-use URL shortening service that
        streamlines your online experience.
      </p>
      <Form />
    </div>
  );
}
