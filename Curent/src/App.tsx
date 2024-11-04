import React from "react";
import CurrencyConvertor from "./components/currency-convertor";

import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-300 flex flex-col items-center justify-center">
      <div className="container max-w-2xl mx-auto">
        <CurrencyConvertor />
      </div>
    </div>
  );
}

export default App;
