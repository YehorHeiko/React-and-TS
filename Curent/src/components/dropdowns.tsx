import React from "react";
import { FaRegStar } from "react-icons/fa";

const Dropdowns = ({
  currencies,
  currency,
  setCurrency,
  favorites,
  hadleFavorite,
  title = "",
}) => {
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
        value={currency} onChange={(e) => setCurrency(e.target.value)}
          className="w-full p-2 border bg-gray-200 border-gray-300 rounded-md shadow-sm
        focus:outline-none focus:ring-2 focus:border-indigo-500"
        >
          <hr />
          {currencies?.map((currency: any) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>

        <button
          onClick={() => hadleFavorite(currency)}
          className="absolute inset-y-0 right-0 flex items-center pr-5 text-sm leading-5"
        >
          <FaRegStar />
        </button>
      </div>
    </div>
  );
};
export default Dropdowns;
