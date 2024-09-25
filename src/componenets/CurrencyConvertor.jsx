import React from 'react';
import { Block } from './convertor/Block';
import { useState, useEffect } from 'react';
function CurrencyConvertor() {
  function touppercase(obj) {
    for (var prop in obj) {
        if(typeof prop === 'string'){
          obj[prop.toUpperCase()] = obj[prop];
          delete obj[prop];
        }
    }
  }



  const [rate, setRate] = useState([])

  const [fromCurrency, setFromCurrency] = useState('RUB')
  const [toCurrency, setToCurrency] = useState('USD')
  const [fromValue, setFromValue] = useState("")
  const [toValue, setToValue] = useState("")

  useEffect( () => {
    fetch("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json")
    .then((res) => res.json())
    .then((json) => {
        touppercase(json.eur)
        setRate(json.eur)
    })
    .catch((err) => console.warn(err))
  }, [])


  const onChangeFromValue = (value) => {
    const price = value / rate[fromCurrency]
    const result = price * rate[toCurrency]
    setToValue(result.toFixed(3))
    setFromValue(value)
  }
  const onChangeToValue = (value) => {
    const result = (rate[fromCurrency] / rate[toCurrency]) * value
    setFromValue(result.toFixed(3))
    setToValue(value)
  }

  useEffect(() => {
    onChangeFromValue(fromValue)
  }, [fromCurrency])
  useEffect(() => {
    onChangeToValue(toValue)
  }, [toCurrency])
  return (
    <div className='section section_4'>
        <div className="currency-convertor">
        <Block value={fromValue} currency={fromCurrency} onChangeCurrency={setFromCurrency} onChangeValue={onChangeFromValue} />
        <Block value={toValue} currency={toCurrency} onChangeCurrency={setToCurrency} onChangeValue={onChangeToValue}/>
        </div>
    </div>
  );
}

export default CurrencyConvertor;
