import React from "react";

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
      <label htmlFor="{title}">{title}</label>

      <div>
        <select>
          {currencies?.map((currency: any) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
export default Dropdowns;
