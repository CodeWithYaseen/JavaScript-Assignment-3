// console.log("JavaScript Connected");


// Q#1

// var studentsName = [];

// Q#2

// var studentsData = {
//     names:[]
// };

// Q#3

// var fruits = ["Mango" , "Orange", "Peach", "Graps", "Banana"];

// Q#4

// var num = [1,2,3,4,5,6,7,8,9,10];

// Q#5

// var boolean = [true,false];

// Q#6

// var mixArr = ["Muhammad Yaseen", 18, null,undefined, true, false, [],{}];

// Q#7

// var educationQualification = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PHD"];

// console.log(educationQualification);

// Q#8

// studentsName = ["Yaseen","Hassan","Ali"];

// var score = [420, 290,480];

// var totalMarks = 500;

// console.log("Score of",studentsName[0], "is" ,score[0]+".","Percentage: "+ (score[0]*100)/500+"%");
// console.log("Score of",studentsName[1], "is" ,score[1]+".","Percentage: "+ (score[1]*100)/500+"%");
// console.log("Score of",studentsName[2], "is" ,score[2]+".","Percentage: "+ (score[2]*100)/500+"%");

// Q#9

// var colorName =["orange","purple"];
// console.log(colorName);

// part (a)

// var userColorStart = prompt("Enter a color which u want at the begning of the array");
// colorName.unshift(userColorStart);

// part (b)

// var userColorEnd = prompt("Enter a color which u want at the end of the array");
// colorName.push(userColorEnd);
// console.log(colorName);

// part (c)

// colorName.unshift("golden","aqua")
// console.log(colorName);

// part (d)

// var deleteFirst = ["golden","aqua","bluevoilet","grey","purple"]
// deleteFirst.shift();
// console.log(deleteFirst);

// part (e)

// var arrColors = ["blue","white","gray","brown","green"];
// arrColors.pop()
// console.log(arrColors);

// part (f)

// var colors = ["green","yellow","orangered","aqua"];
// console.log(colors); 
// var addIndexColor = +prompt("At which Index you want to add a color?");
// var newColor = prompt("Enter the color name:");
// colors.splice(addIndexColor,0,newColor);
// console.log(colors); 

// part (g)

// var color = ["red","orange","purple","gray","black","pink"];
// console.log(color);
// var deleteIndex = +prompt('At which index you want to delete a color?');
// var deleteCount = +prompt('how many colors you want to delete ?');
// color.splice(deleteIndex,deleteCount); 
// console.log(color);

// var studentScore = [320,230,90,50,480,120];
// studentScore.sort(function(a,b){
//     return a-b;
// })
// console.log(studentScore);


// var stuScore = [320,230,480,120];
// stuScore.sort();
// console.log(stuScore);

// var cityNames = ["Karachi","Islamabad","Lahore","Multan","Quetta","Peshawar","Faisalabad"]
// console.log(cityNames);
// var selectedCities =cityNames.slice(1,4);
// console.log(selectedCities);

// var array = ["This","is","my","cat"];
// console.log(array);
// var result = array.join(" ");
// console.log(result);


    //     var arr = ["keyboard","mouse","Printer","monitor"];
    //     document.writeln("<b>Devices:<br/>",arr.join(", ") ,"</b><br/>");

    // document.writeln("<b>Out: <br> ",arr.shift(),"</b><br>");
    // document.writeln("<b>Out: <br> ",arr.shift(),"</b><br>");
    // document.writeln("<b>Out: <br> ",arr.shift(),"</b><br>");
    // document.writeln("<b>Out: <br> ",arr.shift(),"</b><br>");


        // var device = ["keyboard","mouse","Printer","monitor"];
        // document.writeln("<b>Devices:<br/>",device.join(", ") ,"</b><br/>");

    // document.writeln("<b>Out: <br> ",device.pop(),"</b><br>");
    // document.writeln("<b>Out: <br> ",device.pop(),"</b><br>");
    // document.writeln("<b>Out: <br> ",device.pop(),"</b><br>");
    // document.writeln("<b>Out: <br> ",device.pop(),"</b><br>");


// var phoneCompany = ["Apple","Samsung","Motorola","Nokia","Sony","Haier"];

// document.writeln("<select name='PhoneManufactor' id='phone'>,<option selected disabled >Select your phone:</option>,<option value='Apple'>"+phoneCompany.shift()+"</option>,<option value='Samsung'>"+phoneCompany.shift()+"</option>,<option value='Motorola'>"+phoneCompany.shift()+"</option>,<option value='Nokia'>"+phoneCompany.shift()+"</option>, <option value='sony'>"+phoneCompany.shift()+"</option>,<option value='Haier'>"+phoneCompany.shift()+"</option></select>");

