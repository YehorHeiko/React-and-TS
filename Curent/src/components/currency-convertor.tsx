import React, { useEffect, useState } from "react";
import Dropdowns from "./dropdowns";

function CurrencyConvertor() {
  const [currencies, setCurrencies] = useState([]);
  const [amount, setAmount] = useState(1);

  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");

  const fetchCurrencies = async () => {
    try {
      const res = await fetch("https://api.frankfurter.app/currencies");
      const data = await res.json();

      setCurrencies(data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchCurrencies();
  }, []);

  const currencyConvertor: any = (amount: number, from: string, to: string) => {}
    return (
      <div className="max-w-xl mg-auto my-10 p-5 bg-white rounded-lg shadow-md">
        <h2 className="mb-5 text-2xl font-semibold text-gray-700">
          Currency-Convertor
        </h2>

        <div>
            <Dropdowns  currencies={currencies} title="From:"/>
:           <Dropdowns currencies={currencies} title="To:"/>
        </div>

        <div className="mt-4">
          <label
            htmlFor="amount"
            className="block text-sm font-medium text-gray-700"
          >
            Amount
          </label>
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type="number"
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 mt-1:"
          />
        </div>

        <div className="flex justify-end mt-6">
          <button
            onClick={currencyConvertor}
            className="px-5 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 
                focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Convert
          </button>
        </div>

        <div className="mt-4 text-lg font-medium text-right text-green-600">
          Conerted Amount: 69 USD
        </div>
      </div>
    );
  };
export default CurrencyConvertor;
