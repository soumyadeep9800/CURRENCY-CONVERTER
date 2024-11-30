// import React, { useState, useEffect } from 'react';
// import './indx.css';

// export default function Ixx() {
//   const countrylist = {
//     AED: 'AE', AFN: 'AF', XCD: 'AG', ALL: 'AL', AMD: 'AM', ANG: 'AN', AOA: 'AO', AQD: 'AQ',
//     ARS: 'AR', AUD: 'AU', AZN: 'AZ', BAM: 'BA', BBD: 'BB', BDT: 'BD', XOF: 'BE', BGN: 'BG',
//     BHD: 'BH', BIF: 'BI', BMD: 'BM', BND: 'BN', BOB: 'BO', BRL: 'BR', BSD: 'BS', NOK: 'BV',
//     BWP: 'BW', BYR: 'BY', BZD: 'BZ', CAD: 'CA', CDF: 'CD', XAF: 'CF', CHF: 'CH', CLP: 'CL',
//     CNY: 'CN', COP: 'CO', CRC: 'CR', CUP: 'CU', CVE: 'CV', CYP: 'CY', CZK: 'CZ', DJF: 'DJ',
//     DKK: 'DK', DOP: 'DO', DZD: 'DZ', ECS: 'EC', EEK: 'EE', EGP: 'EG', ETB: 'ET', EUR: 'FR',
//     FJD: 'FJ', FKP: 'FK', GBP: 'GB', GEL: 'GE', GGP: 'GG', GHS: 'GH', GIP: 'GI', GMD: 'GM',
//     GNF: 'GN', GTQ: 'GT', GYD: 'GY', HKD: 'HK', HNL: 'HN', HRK: 'HR', HTG: 'HT', HUF: 'HU',
//     IDR: 'ID', ILS: 'IL', INR: 'IN', IQD: 'IQ', IRR: 'IR', ISK: 'IS', JMD: 'JM', JOD: 'JO',
//     JPY: 'JP', KES: 'KE', KGS: 'KG', KHR: 'KH', KMF: 'KM', KPW: 'KP', KRW: 'KR', KWD: 'KW',
//     KYD: 'KY', KZT: 'KZ', LAK: 'LA', LBP: 'LB', LKR: 'LK', LRD: 'LR', LSL: 'LS', LTL: 'LT',
//     LVL: 'LV', LYD: 'LY', MAD: 'MA', MDL: 'MD', MGA: 'MG', MKD: 'MK', MMK: 'MM', MNT: 'MN',
//     MOP: 'MO', MRO: 'MR', MTL: 'MT', MUR: 'MU', MVR: 'MV', MWK: 'MW', MXN: 'MX', MYR: 'MY',
//     MZN: 'MZ', NAD: 'NA', XPF: 'NC', NGN: 'NG', NIO: 'NI', NPR: 'NP', NZD: 'NZ', OMR: 'OM',
//     PAB: 'PA', PEN: 'PE', PGK: 'PG', PHP: 'PH', PKR: 'PK', PLN: 'PL', PYG: 'PY', QAR: 'QA',
//     RON: 'RO', RSD: 'RS', RUB: 'RU', RWF: 'RW', SAR: 'SA', SBD: 'SB', SCR: 'SC', SDG: 'SD',
//     SEK: 'SE', SGD: 'SG', SKK: 'SK', SLL: 'SL', SOS: 'SO', SRD: 'SR', STD: 'ST', SVC: 'SV',
//     SYP: 'SY', SZL: 'SZ', THB: 'TH', TJS: 'TJ', TMT: 'TM', TND: 'TN', TOP: 'TO', TRY: 'TR',
//     TTD: 'TT', TWD: 'TW', TZS: 'TZ', UAH: 'UA', UGX: 'UG', USD: 'US', UYU: 'UY', UZS: 'UZ',
//     VEF: 'VE', VND: 'VN', VUV: 'VU', YER: 'YE', ZAR: 'ZA', ZMK: 'ZM', ZWD: 'ZW',
//   };

//   const BASE_URL = 'https://v6.exchangerate-api.com/v6/050c530bd9d54964660c2bbf/latest';
  
//   const [amount, setAmount] = useState(100);
//   const [fromCurr, setFromCurr] = useState('USD');
//   const [toCurr, setToCurr] = useState('INR');
//   const [rateMessage, setRateMessage] = useState('1 USD = 80 INR');

//   // This effect runs once after the component mounts to initialize the dropdowns
//   useEffect(() => {
//     // Populate the dropdowns with currency codes
//     const fromSelect = document.querySelector('.from select');
//     const toSelect = document.querySelector('.to select');
    
//     for (let currCode in countrylist) {
//       let option = document.createElement('option');
//       option.value = currCode;
//       option.innerText = currCode;
      
//       if (currCode === 'USD') option.selected = true;
//       if (currCode === 'INR') option.selected = true;
      
//       if (fromSelect) fromSelect.appendChild(option);
//       if (toSelect) toSelect.appendChild(option);
//     }
//   }, []);

//   const updateExchangeRate = async () => {
//     const URL = `${BASE_URL}/${fromCurr}`;
//     try {
//       const response = await fetch(URL);
//       const data = await response.json();
//       const rate = data.conversion_rates[toCurr];
//       const finalAmount = amount * rate;
//       setRateMessage(`${amount} ${fromCurr} = ${finalAmount} ${toCurr}`);
//     } catch (error) {
//       setRateMessage(`Error: ${error.message}`);
//     }
//   };

//   const handleAmountChange = (e) => {
//     setAmount(e.target.value);
//   };

//   const handleFromCurrencyChange = (e) => {
//     setFromCurr(e.target.value);
//   };

//   const handleToCurrencyChange = (e) => {
//     setToCurr(e.target.value);
//   };

//   return (
//     <div className="container">
//       <h2>Currency Converter</h2>
//       <form onSubmit={(e) => { e.preventDefault(); updateExchangeRate(); }}>
//         <div className="amount">
//           <p>Enter Amount-</p>
//           <input
//             type="number"
//             value={amount}
//             onChange={handleAmountChange}
//             min="1"
//           />
//         </div>
//         <div className="dropdown">
//           <div className="from">
//             <p>From</p>
//             <div className="select-container">
//               <select name="from" onChange={handleFromCurrencyChange}>
//                 {Object.keys(countrylist).map((currCode) => (
//                   <option key={currCode} value={currCode}>
//                     {currCode}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>
//           <div className="to">
//             <p>To</p>
//             <div className="select-container">
//               <select name="to" onChange={handleToCurrencyChange}>
//                 {Object.keys(countrylist).map((currCode) => (
//                   <option key={currCode} value={currCode}>
//                     {currCode}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>
//         </div>
//         <div className="msg">{rateMessage}</div>
//         <button type="submit">Get Exchange Rate</button>
//       </form>
//     </div>
//   );
// }
import React, { useState, useEffect } from 'react';
import './indx.css';

export default function Ixx() {
  const countrylist = {
    AED: "AE", AFN: "AF", XCD: "AG", ALL: "AL", AMD: "AM", ANG: "AN",
    AOA: "AO", AQD: "AQ", ARS: "AR", AUD: "AU", AZN: "AZ", BAM: "BA",
    BBD: "BB", BDT: "BD", XOF: "BE", BGN: "BG", BHD: "BH", BIF: "BI",
    BMD: "BM", BND: "BN", BOB: "BO", BRL: "BR", BSD: "BS", NOK: "BV",
    BWP: "BW", BYR: "BY", BZD: "BZ", CAD: "CA", CDF: "CD", XAF: "CF",
    CHF: "CH", CLP: "CL", CNY: "CN", COP: "CO", CRC: "CR", CUP: "CU",
    CVE: "CV", CYP: "CY", CZK: "CZ", DJF: "DJ", DKK: "DK", DOP: "DO",
    DZD: "DZ", ECS: "EC", EEK: "EE", EGP: "EG", ETB: "ET", EUR: "FR",
    FJD: "FJ", FKP: "FK", GBP: "GB", GEL: "GE", GGP: "GG", GHS: "GH",
    GIP: "GI", GMD: "GM", GNF: "GN", GTQ: "GT", GYD: "GY", HKD: "HK",
    HNL: "HN", HRK: "HR", HTG: "HT", HUF: "HU", IDR: "ID", ILS: "IL",
    INR: "IN", IQD: "IQ", IRR: "IR", ISK: "IS", JMD: "JM", JOD: "JO",
    JPY: "JP", KES: "KE", KGS: "KG", KHR: "KH", KMF: "KM", KPW: "KP",
    KRW: "KR", KWD: "KW", KYD: "KY", KZT: "KZ", LAK: "LA", LBP: "LB",
    LKR: "LK", LRD: "LR", LSL: "LS", LTL: "LT", LVL: "LV", LYD: "LY",
    MAD: "MA", MDL: "MD", MGA: "MG", MKD: "MK", MMK: "MM", MNT: "MN",
    MOP: "MO", MRO: "MR", MTL: "MT", MUR: "MU", MVR: "MV", MWK: "MW",
    MXN: "MX", MYR: "MY", MZN: "MZ", NAD: "NA", XPF: "NC", NGN: "NG",
    NIO: "NI", NPR: "NP", NZD: "NZ", OMR: "OM", PAB: "PA", PEN: "PE",
    PGK: "PG", PHP: "PH", PKR: "PK", PLN: "PL", PYG: "PY", QAR: "QA",
    RON: "RO", RSD: "RS", RUB: "RU", RWF: "RW", SAR: "SA", SBD: "SB",
    SCR: "SC", SDG: "SD", SEK: "SE", SGD: "SG", SKK: "SK", SLL: "SL",
    SOS: "SO", SRD: "SR", STD: "ST", SVC: "SV", SYP: "SY", SZL: "SZ",
    THB: "TH", TJS: "TJ", TMT: "TM", TND: "TN", TOP: "TO", TRY: "TR",
    TTD: "TT", TWD: "TW", TZS: "TZ", UAH: "UA", UGX: "UG", USD: "US",
    UYU: "UY", UZS: "UZ", VEF: "VE", VND: "VN", VUV: "VU", YER: "YE",
    ZAR: "ZA", ZMK: "ZM", ZWD: "ZW"
  };

  const BASE_URL = "https://v6.exchangerate-api.com/v6/050c530bd9d54964660c2bbf/latest";
  
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [rate, setRate] = useState(null);
  const [msg, setMsg] = useState("1USD=80INR");
  const [fromFlag, setFromFlag] = useState("https://flagsapi.com/US/flat/64.png");
  const [toFlag, setToFlag] = useState("https://flagsapi.com/IN/flat/64.png");

  const updateExchangeRate = async () => {
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    if (amtVal === "" || amtVal < 1) {
      amtVal = 1;
      amount.value = "1";
    }

    const URL = `${BASE_URL}/${fromCurrency}`;
    try {
      let response = await fetch(URL);
      let data = await response.json();
      let conversionRate = data.conversion_rates[toCurrency];
      let finalAmount = amtVal * conversionRate;
      setMsg(`${amtVal} ${fromCurrency} = ${finalAmount} ${toCurrency}`);
      setRate(finalAmount);
    } catch (error) {
      setMsg(`Error: ${error.message}`);
    }
  };

  const updateFlag = (currency, flagType) => {
    const countryCode = countrylist[currency];
    const newFlagSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    if (flagType === "from") {
      setFromFlag(newFlagSrc);
    } else {
      setToFlag(newFlagSrc);
    }
  };

  const handleFromCurrencyChange = (event) => {
    setFromCurrency(event.target.value);
    updateFlag(event.target.value, "from");
  };

  const handleToCurrencyChange = (event) => {
    setToCurrency(event.target.value);
    updateFlag(event.target.value, "to");
  };

  useEffect(() => {
    updateExchangeRate();
  }, [fromCurrency, toCurrency]);

  return (
    <div className="container">
      <h2>Currency Converter</h2>
      <form>
        <div className="amount">
          <p>Enter Amount-</p>
          <input type="text" value="100" />
        </div>
        <div className="dropdown">
          <div className="from">
            <p>From</p>
            <div className="select-container">
              <img src={fromFlag} alt="From Flag" />
              <select name="from" value={fromCurrency} onChange={handleFromCurrencyChange}>
                {Object.keys(countrylist).map((currCode) => (
                  <option key={currCode} value={currCode}>
                    {currCode}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="to">
            <p>TO</p>
            <div className="select-container">
              <img src={toFlag} alt="To Flag" />
              <select name="to" value={toCurrency} onChange={handleToCurrencyChange}>
                {Object.keys(countrylist).map((currCode) => (
                  <option key={currCode} value={currCode}>
                    {currCode}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="msg">{msg}</div>
        <button onClick={(e) => { e.preventDefault(); updateExchangeRate(); }}>Get Exchange Rate</button>
      </form>
    </div>
  );
}
