import React from "react";
import Main from "./component";
import { DataContextProvider } from "./store";

function App() {
  return (
    <DataContextProvider>
      <Main />
    </DataContextProvider>
  );
}

export default App;
