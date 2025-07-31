// console.log("JavaScript Connected");

// TASK NO 1

// var arr = [[ ],[ ],[ ]
//     ];
    
//  TASK NO 2

// var multiDimensionArr = [
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1]
// ];

// document.writeln(multiDimensionArr[1] ,"<br>");
// document.writeln(multiDimensionArr[2] ,"<br>");
// document.writeln(multiDimensionArr[0] ,"<br>");

//   TASK NO 3

// for(var i = 1; i <= 10; i++){
    //     document.writeln(i + "<br>")
    // }
    
//     TASK NO 4


// var table = +prompt("Enter a number to show its multiplication table here");
// var tableLength = +prompt("Enter length multiplication table here");

// document.writeln("Multiplication table of " , table ,"<br>");
// document.writeln("Length " , tableLength + "<br><br>");

// for(var i = table; i <= table; i++ ){
//  for(var j = 1 ; j <= tableLength; j++){
// document.writeln(i + " x " + j + " = " + i * j + "<br>" );
//  }   
// }


//      TASK NO 5

// var fruits = ["Apple","Banana","Mango","Orange","Strawbery"];

// for(var i = 0; i < fruits.length; i++){
//     document.writeln("Element at index ",i , " is ", fruits[i] , "<br>")
// }

//      TASK NO 6

//  (a: Counting)

// document.writeln("<b>Counting:</b>");
// for(var i = 1; i <= 10; i++){
//     document.writeln(i);
// }

//  (b: Reverse Counting)

// document.writeln("<b>Reversing Counting:</b>")

// for(var i = 10; i > 0; i--){
//     document.writeln(i);
// }

//  (c: Even)

// document.writeln("<b>even</b> ");
// for(i = 0; i <= 20; i++){
// if(i % 2 === 0){
//  document.writeln(i)
// }
 //  }
     
//  (d: Odd)

// document.writeln("<b>Odd</b> ")
// for(var i = 0; i < 20; i++){
//     if(i % 2 === 1){
//         document.writeln(i)
//     }
// }

//  (e: Series)

// document.writeln("<b>Series</b> ");
// for(i = 2; i <= 20; i++){
//         if(i % 2 === 0){
//            document.writeln(i+"k,")
//             }
//         }
        

//      TASK NO 7

// var items = ["cake","buscut","slice","cookie","chips","patties"];
// var order = prompt("Wellcome to yaseen bakery what do u want to order Sir/Ma'am?");
// var flag = false;

// for(var i = 0; i < items.length; i++){
//     if(order === items[i] ){
//         document.writeln(order , " is available at index ", i ," in our bakery");
//         var index = i;
//         flag = true;
// break;
//     }
// }

// if(flag){
//     document.writeln(order , " is available at index ", index ," in our bakery");
// }
// else{
//         document.writeln("We are sorry. ", order ," is not available in our bakery");
// }

//      TASK NO 8

// var numbers = [24,53,78,91,12];
// var largeNumber = numbers[0];

// document.writeln("<b>Array items: </b> ",numbers , "<br/>")

// for(var i = 0; i < numbers.length; i++){
//     if(numbers[i] > largeNumber){
//         largeNumber = numbers[i];
//     }
// }
// document.writeln("<b> Large Number is " , largeNumber , "</b>");


//      TASK NO 9

// var numbers = [23,53,78,91,12];
// var smallNumber = numbers[0];

// document.writeln("<b>Array items: </b> ",numbers , "<br/>")

// for(var i = 0; i < numbers.length; i++){
//     if(numbers[i] < smallNumber){
//         smallNumber = numbers[i];
//     }
// }
// document.writeln("<b> Small number is " , smallNumber , " </b>");


//      TASK NO 10

// for(var i = 1; i <= 100; i++){
//     if(i % 5 === 0){
//         document.writeln(i + ", ");
//     }
// }