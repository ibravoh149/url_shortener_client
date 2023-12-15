import React from "react";
import { Header, ListURLData, URLForm } from "../Compoents";

function App() {
  return (
    <div className="bg-[#0E131E] min-h-screen px-4 sm:px-12">
      <Header />
      <URLForm />
      <ListURLData />
    </div>
  );
}

export default App;
