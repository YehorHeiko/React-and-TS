import React, { useEffect, useState } from "react";
import Dropdowns from "./dropdowns";
import { HiArrowsRightLeft } from "react-icons/hi2";

function CurrencyConvertor() {
  const [currencies, setCurrencies] = useState([]);
  const [amount, setAmount] = useState(1);

  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [convertedAmount, setconvertedAmount] = useState(null);
  const [converting, setConverting] = useState(false);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || ["USD", "EUR"]
  );

  const convertCurrencies = async () => {
    if (!amount) return;
    setConverting(true);
    try {
      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`
      );
      const data = await res.json();

      setconvertedAmount(data.rates[toCurrency] + " " + toCurrency);
    } catch (error) {
      console.log("error", error);
    } finally {
      setConverting(false);
    }
  };

  const hadleFavorite = (currency) => {
    let udatedFavorites = [...favorites];
    if (favorites.includes(currency)) {
      udatedFavorites = favorites.filter((curr) => curr !== currency);
    } else {
      udatedFavorites = [...favorites, currency];
    }
    setFavorites(udatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(udatedFavorites));
  };

  const swapCurencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const fetchCurrencies = async () => {
    try {
      const res = await fetch("https://api.frankfurter.app/currencies");
      const data = await res.json();

      setCurrencies(Object.keys(data));
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchCurrencies();
  }, []);

  return (
    <div className="max-w-xl my-10 p-5 bg-white rounded-lg shadow-md">
      <h2 className="mb-5 text-2xl font-semibold text-gray-700">
        Currency-Convertor
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
        <Dropdowns
          favorites={favorites}
          currencies={currencies}
          title="From:"
          currency={fromCurrency}
          setCurrency={setFromCurrency}
          hadleFavorite={hadleFavorite}
        />
        <div className="flex justify-center -mb-5 sm:mb-0">
          <button
            onClick={swapCurencies}
            className="p-2 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300"
          >
            <HiArrowsRightLeft className="text-xl text-gray-700" />
          </button>
        </div>
        <Dropdowns
          favorites={favorites}
          currencies={currencies}
          title="To:"
          currency={toCurrency}
          setCurrency={setToCurrency}
          hadleFavorite={hadleFavorite}
        />
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
          onClick={convertCurrencies}
          className={`px-5 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 
                focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
                
                  ${converting ? "animate-pulse" : ""}
                `}
        >
          Convert
        </button>
      </div>

      {convertedAmount && (
        <div className="mt-4 text-lg font-medium text-right text-green-600">
          Conerted Amount: {convertedAmount}
        </div>
      )}
    </div>
  );
}
export default CurrencyConvertor;
