import React from 'react';
import CurrencyConvertor from './components/currency-convertor';

import './App.css';

function App() {

  // https://api.frankfurter.app/latest?amount=1&from=USD&to=EUR
  return ( 
    <div className='min-h-screen bg-gray-300 flex flex-col items-center justify-center'>
      <CurrencyConvertor />
    </div>
   );
}

export default App;