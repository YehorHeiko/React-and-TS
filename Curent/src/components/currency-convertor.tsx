import React from 'react';

function CurrencyConvertor() {
    return ( 
        <div className='max-w-xl mg-auto my-10 p-5 bg-white rounded-lg shadow-md'>
            <h2 className='mb-5 text-2xl font-semibold text-gray-700'>
                Currency-Convertor
            </h2>

            <div>Dropdowns</div>


            <div className='mt-4'>
                <label htmlFor="amount">Amount</label>
                <input type="number" />
            </div>
        </div>
     );
}

export default CurrencyConvertor;