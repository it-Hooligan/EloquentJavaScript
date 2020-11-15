 //!Теория конспект



 //Цикл while
 var result = 1;
 var counter = 0;
 while (counter < 10) { //проходит  условие и потом решает выполнять тело цикла или не или остановить
     result = result * 2;
     counter = counter + 1;
 }
 console.log(result);


 //Цикл do
 do {
     var name = prompt("Who are you?"); // проходит тело цикла а потом условие 
 } while (!name);
 console.log(name);

 // Цикл for 
 for (var number = 0; number <= 12; number = number + 1) // ??? почему console.log выдает разное значение с ; и без ; !
     console.log(number);

 var result = 1;
 for (var counter = 0; counter < 10; counter = counter + 1) // вычисляем 2 ^10 степерни гле counret -счетчик
     result = result * 2;
 console.log(result);


 for (var current = 20;; current++) {
     if (current % 7 == 0)
         break;
 }
 console.log(current);

 // Обновление переменных в краткой форме 

 counter = counter + 1;
 counter += 1;

 counter *= 2; //удвоение 
 counter -= 1; // обратный отсчет

 counter++;
 counter--;

 for (var counter = 10; counter <= 30; counter++)
     console.log(counter);










 // !Домашка 

 /* Треугольник в цикле
  * Напишите цикл, который за 7 вызовов console.log выводит такой треугольник:
  #
  ##
  ###
  ####
  #####
  ######
  #######
 */

 let count = 0;
 let x = '#';

 while (count <= 10) {
     console.log(x);
     x = x + '#';
     count = count + 1;
 }


 /* FizzBuzz
  *Напишите программу, которая выводит через console.log все числа от 1 до 100, с двумя исключениями. Для чисел, нацело делящихся на 3, она должна выводить ‘Fizz’, а для чисел, делящихся на 5 (но не на 3) – ‘Buzz’.
  *Когда сумеете – исправьте её так, чтобы она выводила «FizzBuzz» для всех чисел, которые делятся и на 3, и на 5. */


 let number = 1;
 //let counter = 0;

 for (var counter = 1;; counter++) {

     if (counter % 3 == 0)
         console.log('Bazz');
     else if (counter % 5 == 0)
         console.log('Fizz');
     else
         console.log(counter);

     if (counter == 100)
         break;

 }





 for (var counter = 1;; counter++) {

     if (counter % 3 == 0 || counter % 5 == 0)
         console.log('FizzBazz');


     else
         console.log(counter);

     if (counter == 100)
         break;

 }

 /*
 *Шахматная доска
 *Напишите программу, создающую строку, содержащую решётку 8х8, в которой линии разделяются символами новой строки. На каждой позиции либо пробел, либо #. В результате должна получиться шахматная доска.
 # # # #
  # # # #
 # # # #
  # # # #
 # # # #
  # # # #
 # # # #
  # # # #
  */

 for (var counter = 1; counter <= 8; counter++) {

     if (counter % 2 == 0)
         console.log('# # # # ');
     if (counter % 2 !== 0)
         console.log(' # # # #');

 }




 /*var nubmer = 1;
 for (var counter = 0; counter <= 100; counter++) 
 number += 1;
 console
     if (number % 3 == 0) {
         
         console.log('Buzz');
     }
     */