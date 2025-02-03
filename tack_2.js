// alert("Привет, ВКСиИТ! Остальным соболезную");

// //  Сложение:
// let a = 1 + 2;
// alert(a);
// // Вычитание:
// let b = 3 - 2;
// alert(b); 

// // Умножение:
// let c = 3 * 2;
// alert(c); 

// // Деление:
// let d = 4 / 2;
// alert(d); 

// // Остаток от деления в JavaScript
// alert(10 % 3); // выведет 1
// alert(10 % 2); // выведет 0

// // Возведение в степень в JavaScript
// let g= 10;
// alert(g ** 3); 

// let str = "abc" + "def"; // складываем две строки
// console.log(str); // выведет 'abcdef'
// Строки также могут хранится в переменных:
// let str1 = "abc";
// let str2 = "def";
// console.log(str1 + str2); // выведет 'abcdef'

// // Можно также складывать переменные и строки:
// let str1 = "abc";
// let str2 = "def";
// console.log(str1 + "!!!" + str2); // выведет 'abc!!!def'

// // Пусть две строки хранятся в переменных, а при их сложении мы хотим вставить между ними пробел. Это делается так:
// let str1 = "abc";
// let str2 = "def";
// console.log(str1 + " " + str2); // выведет 'abc def'

// // Пусть переменная только одна:
// let str = "abc";
// console.log(str + " " + "def"); // выведет 'abc def'

// // В этом случае нет смысла выделять пробел, как отдельную строку - вставим его как часть второго слагаемого:
// let str = "abc";
// // console.log(str + " def"); // выведет 'abc def'
// let str = "abcde";
// console.log(str.length); // выведет 5

// // Свойство length можно применять непосредственно к строке:
// console.log("abcde".length); // выведет 5

// // Пробел также является символом:
// console.log("ab de".length); // выведет 5

// let str = `abc`;
// console.log(str); // выведет 'abc'

// В косых кавычках можно выполнять вставку переменных. Для этого имя переменной нужно написать в конструкции ${}.

// // Давайте посмотрим на примере. Пусть мы хотим выполнить сложение строк и переменной:
// let str = "xxx";
// let txt = "aaa " + str + " bbb";
// // Этот код можно переписать следующим образом:
// let str = "xxx";
// let txt = `aaa ${str} bbb`;

// console.log(123);
// console.log("123");

// console.log(eee); // Uncaught ReferenceError: eee is not defined

// console.log(myVar); // ReferenceError: myVar is not defined
// let myVar = 10;

// if (true {   // SyntaxError: Unexpected token {
//     console.log("Hello");
//   }

//   let num = 42;
// num(); // TypeError: num is not a function

// let obj = null;
// console.log(obj.property); // TypeError: Cannot read property 'property' of null

// let arr = new Array(-1); // RangeError: Invalid array length

// function recursive() {
// 	return recursive();
// }
// recursive(); // Вызовет RangeError: Maximum call stack size exceeded (переполнение стека)

// let a = "123";
// console.log("2" * "3"); // выведет 6`

// console.log("2" * "3s"); // выведет    NaN

// let a = "1" + "2";
// console.log(a); // выведет    '12' - произошло    сложение строк

// let a = 1 + "2";
// console.log(a); // выведет '12'

// let a = "1" + (2 + 3);
// console.log(a); // выведет '15'

// let a = "1" + 2 + 3;
// console.log(a); // выведет '123'

// let a = 2 + 3 + "1";
// console.log(a); // выведет '51'

// let a = Number("2"); // в переменную запишется число 2
// let b = Number("3"); // в переменную запишется число 3
// console.log(a + b); // выведет 5

// let a = +"2"; // в переменную запишется число 2
// let b = +"3"; // в переменную запишется число 3
// console.log(a + b); // выведет 5

// // Вот еще пример:
// let a = "2";
// let b = +a; // в b запишется число 2

// let a = "2";
// let b = "3";
// console.log(+a + +b); // выведет 5

// let num = parseInt("12px");
// console.log(num); // выведет 12

// let num = parseInt("12.5px");
// console.log(num); // все равно выведет 12

// let num = parseFloat("12.5px");
// console.log(num); // выведет 12.5

// let num = parseFloat("12px");
// console.log(num); // выведет 12

// let str = String(123); // теперь в переменной строка '123'

// // Еще пример:
// let num1 = 1;
// let num2 = 2;

// console.log(String(num1) + String(num2)); // выведет '12'

// alert(String(true)); // выведет 'true'
// alert(String(false)); // выведет 'false'

// alert("a" + true); // выведет 'atrue'

// // При приведении к числу значение true преобразуется в число 1, а значение false - в число 0:
// alert(Number(true)); // выведет 1
// alert(Number(false)); // выведет 0

// // Во всех математических операциях логические значения вначале преобразуются к числу. Пример:
// alert(true + 1); // выведет 2
// alert(true + true); // выведет 2

// let str = "abcde";

// console.log(str[0]); // выведет 'a'
// console.log(str[1]); // выведет 'b'
// console.log(str[2]); // выведет 'c'

// // Номер символа также может хранится и в переменной:
// let str = "abcde";
// let num = 3; // номер символа в переменной

// console.log(str[num]); // выведет 'd'

// let str = "abcde";
// str[0] = "!";

// let str = "abcde";
// let last = str.length - 1; // номер последнего символа

// // Используем найденный номер для вывода символа на экран:
// let str = "abcde";
// let last = str.length - 1; // номер последнего символа
// console.log(str[last]); // выведет 'e'

// // Промежуточную переменную last можно и не вводить:
// let str = "abcde";
// console.log(str[str.length - 1]); // выведет 'e'

// let num = 1;
// num += 3; // эквивалентно num = num + 3;
// // Существуют аналогичные операторы для остальных математических операций:

// let num = 2;
// num -= 3; // эквивалентно num = num - 3;
// let num = 2;
// num *= 3; // эквивалентно num = num * 3;
// let num = 2;
// num /= 3; // эквивалентно num = num / 3;

// let num = 0;
// num++; // прибавляем к переменной a число 1
// console.log(num); // выведет 1

// // Есть также операция декремент --, уменьшающая значение переменной на 1. Смотрите пример:
// let num = 0;
// num--; // отнимаем от переменной num число 1
// console.log(num); // выведет -1

// let num = 0;
// console.log(num++); // выведет 0
// console.log(num); // выведет 1

// // А теперь переменная вначале увеличится, а уже затем будет вывод на экран:
// let num = 0;
// console.log(++num); // выведет 1 - переменная увеличилась сразу

// // Такое поведение справедливо не только для вывода на экран, но и для присваивания:
// let num1 = 0;
// let num2 = num1++; // в переменную num2 запишется 0
// console.log(num2); // выведет 0
// console.log(num1); // выведет 1 - переменная num1 поменялась после записи в num2

// // А теперь поменяем постфиксную форму на префиксную:
// let num1 = 0;
// let num2 = ++num1; // в переменную num2 запишется 1
// console.log(num2); // выведет 1

// // Если наша операция выполняется на отдельной строке, то разницы между префиксной и постфиксной формами нет:
// let num = 0;
// ++num;
// num++;
// console.log(num); // выведет 2