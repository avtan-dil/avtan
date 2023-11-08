import React from "react";
import Index from ".";

import CountContextProvider from "./provider/CountContextProvider";

console.log("updated 1")
function App() {
  return (
    <CountContextProvider>
     <Index/>
    </CountContextProvider>
  );
}

export default App;