/*
  Написать функцию, которая принимает на вход
  
  строку с суммой средств  1000, 
  валютой средств - руб
  целевой валютой - $

  Возвращает число в новой валюте, если конвертация
  поддерживается или null, если нет. Ставки конвертации
  храняться внутри функции
*/

const isValidCurrency = (startingСurrency, targetCurrency) => (
  (startingСurrency === 'RUB')
    ? (targetCurrency === 'USD')
    : false
)

const currencyConverter = (money, startingСurrency = 'RUB', targetCurrency) => {

  const RUB_TO_USD = 0.010912;

  return (
    isValidCurrency(startingСurrency, targetCurrency)
      ? money * RUB_TO_USD
      : false
  )
}

console.log(currencyConverter('100', 'RUB', 'USD'));