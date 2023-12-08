/*
  Написать код, который при передаче пользователем языка en, ru, de, выводит
  в консоль приветствие на соответствующем языке.

  Пример: de -> Guten Tag!
*/

const chosenLang = prompt('Выберите язык, например: en, ru, de', '');

switch (chosenLang) {
  case 'en':
    console.log('Good day');
    break;
  case 'ru':
    console.log('Добрый день');
    break;
  case 'de':
    console.log('Guten Tag');
    break;
  default:
    console.log('Этот язык не поддерживается')
};