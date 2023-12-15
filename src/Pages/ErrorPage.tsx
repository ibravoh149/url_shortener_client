import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError() as any;
  console.error(error);

  return (
    <div
      id="error-page"
      className="bg-[#0E131E] h-screen flex flex-col items-center justify-center text-white"
    >
      <h1 className="text-transparent text-4xl min-h-[3.5rem] my-4 font-bold text-center bg-gradient-to-br from-[#144EE3] to-[#EB568E] bg-clip-text">
        Oops!
      </h1>
      <p className="text-[#EB568E] bg-clip-text text-2xl  my-4">Sorry, an unexpected error has occurred.</p>
      <p className="text-transparent bg-gradient-to-br to-[#144EE3] from-[#EB568E] bg-clip-text text-2xl">This is not from You but from us.</p>
    </div>
  );
}
