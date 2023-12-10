// Написать две функции
// - Шифратор пароля - функция принимает пароль
// разбивает по символам, меняет по символам какие-то буквы 
// по заданному алгоритму и возвращает строку
// - Проверка пароля - принимает зашифрованный пароль и 
// второй пароль. Воспроизводит алгоритм назад на 
// зашифрованном пароле и возвращает true, если он
// совпадает со вторым паролем и false, если нет

// crypto('password') -> ssapdorw
// check('ssapdorw', 'password') -> true
// check('ssapdorw', 'wrong') -> false

const crypto = (string) => {
  const result = [];
  // некий ключ, по которому будет генерироваться
  // пароль, длина масива с ключом должна равняться длине
  // входящей строки
  const cryptoKey = [0,7,6,2,3,4,1,5];
  const stringToArr = string.split('');

  cryptoKey.forEach(el => {
    result.push(stringToArr[el]);
  });

  return(result.join(''));
}

const check = (encrypted, target) => {
  // разбивает строки на массивы для сортировки
  const encryptedArr = encrypted.split('');
  const targetArr = target.split('');
  // сортирует массив, соединяет в строку
  const sortedEncryptedArr = encryptedArr.sort().join('');
  const sortedTargetArr = targetArr.sort().join('');

  // если длина строк !== это разные слова
  // если сортированные слова не равны, то это разные слова
  return (encrypted.length === target.length 
    && sortedEncryptedArr === sortedTargetArr)
}

const encrypted1 = crypto('password');

console.log(encrypted1);
console.log(check(encrypted1,'password'));
console.log(check(encrypted1,'pa4swoyd'));
console.log(check(encrypted1,'wrong'));