/* ***** Ödev 1 ***** */
/* ASAL SAYI BULMA */
console.log("Asal Sayı Bulma")

let findPrime = function(...numbers){
  let counter = 0;
  let result = {dividend:0,isPrime:"",factors:[]};
  for(let i = 0; i < numbers.length; i++){
    result.dividend = 0;
    result.factors = [];
    if(numbers[i] == 1){
      result.isPrime = "Hayır";
      result.dividend = numbers[i];
      result.factors.push(numbers[i]);
      console.log(`Bölünen : ${result.dividend}  Bölenler : ${result.factors}  Asal mı : ${result.isPrime}`);
      continue;
    }
    for(let j = 1; j <= numbers[i]; j++){
      if(numbers[i] % j == 0){
        result.dividend = numbers[i];
        result.factors.push(j);
        counter++
      }
   }
   if(counter > 2){
        result.isPrime = "Hayır";
        console.log(`Bölünen : ${result.dividend}  Bölenler : ${result.factors}  Asal mı : ${result.isPrime}`);
        counter = 0;
      }else{
        result.isPrime = "Evet";
        // console.log(result.dividend);
        // console.log(...result.factors);
        // console.log(result.isPrime);
        console.log(`Bölünen : ${result.dividend}  Bölenler : ${result.factors}  Asal mı : ${result.isPrime}`);
        counter = 0;
      }
  }
}

findPrime(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23);

//findPrime(46,47,48,49,50,51,52,53,54,55,56,57,58,59,60);

/* ************************* */

console.log();

/* ***** Ödev 2 ***** */
/* ARKADAŞ SAYILAR */
console.log("Arkadaş Sayılar")

let amicableNumbers = function(number1, number2){
  if(number1 === number2){
    console.log(`(${number1}, ${number2}) eşit sayılar olduğu için arkadaş sayı olamazlar.`)
  }else{
    let totalNumber1Factors = 0;
  let totalNumber2Factors = 0;

  for(let i = 1, j = 1; i <= number1, j <= number2; i++, j++){
    if(number1 % i == 0){
      totalNumber1Factors += i;
    }
    if(number2 % j == 0){
      totalNumber2Factors += j;
    }
  }

  if(totalNumber1Factors == totalNumber2Factors){
    console.log(`${number1} ve ${number2} sayıları Arkadaş Sayıdır.`);
  }
  else{
    console.log(`${number1} ve ${number2} arkadaş sayı değildir.`);
  }
  } 
}

//amicableNumbers(220,284);
//amicableNumbers(2620,2924);
//amicableNumbers(3680,3890);
//amicableNumbers(7980,7980);


/* ************************* */

console.log();
/* ***** Ödev 3 ***** */
/* 1000 e kadar olan MÜKEMMEL SAYILAR */
console.log("1000 e kadar olan MÜKEMMEL SAYILAR")

let perfectNumbers = function(){
  let pNumbers = [];
  for(let i = 1; i <= 1000; i++){
    let total = 0;
    for(let j = 1; j < i; j++){
      if(i % j == 0){
        total += j;
      }
    }
    if(total == i){
      pNumbers.push(i);
    }
  }
  return pNumbers;
}

//console.log(perfectNumbers());


/* ************************* */

console.log();

/* ***** Ödev 4 ***** */
/* 1000 e Kadar Olan ASAL SAYILAR */
console.log("1000 e Kadar Olan ASAL SAYILAR");

let primeNumbersUpToThousand = function(){
  let primeNumbers = [];
  let counter = 0;
  for(let i = 2; i <= 1000; i++){
    for(let j = 1; j <= i; j++){
      if(i % j == 0){
        counter++;
      }
    }
    if(counter > 2){
      counter = 0;
      continue;
    }else{
      primeNumbers.push(i);
      counter = 0;
    }
  }
  return primeNumbers;
}

//console.log(primeNumbersUpToThousand());