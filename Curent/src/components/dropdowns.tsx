import React from "react";
import { FaRegStar } from "react-icons/fa";
import { HiStar } from "react-icons/hi2";

const Dropdowns = ({
  currencies,
  currency,
  setCurrency,
  favorites,
  hadleFavorite,
  title = "",
}) => {
  const isFavorite = (curr) => favorites.includes(currency);

  return (
    <div>
      <label
        htmlFor="{title}"
        className="block text-sm font-medium text-gray-700"
      >
        {title}
      </label>

      <div className="mt-1 relative">
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="w-full p-2 border bg-gray-300 border-gray-300 rounded-md shadow-sm
        focus:outline-none focus:ring-2 focus:border-indigo-500"
        >
          {favorites.map((currency: any) => (
            <option className="bg-gray-200" key={currency} value={currency}>
              {currency}
            </option>
          ))}
          <hr />

          {currencies
            .filter((c) => !favorites.includes(c))
            .map((currency: any) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
        </select>

        <button
          onClick={() => hadleFavorite(currency)}
          className="absolute inset-y-0 right-0 flex items-center pr-5 text-sm leading-5"
        >
          {isFavorite(currency) ? <HiStar /> : <FaRegStar />}
        </button>
      </div>
    </div>
  );
};
export default Dropdowns;
