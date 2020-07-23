////////////////////////   Alerts ( Chapter 1 )  /////////////////////////////////////////////////////

// 1.
// alert("Welcome to Our Page");

// 2.
// alert("Error! Please enter a valid password");

// 3.
// alert("Welcome to JS Land \n Happy Coding!");

// // 4. not completed
// alert("Welcome to JS Land");
// alert("Happy Coding! \n <input type="checkbox"> ");

// 5. 
// do in console
// alert("Hello... I can run JS through my web browser console");


////////////////////////////   Variables for strings ( Chapter 2 )   ///////////////////////


// 1.
// var username;

// 2.
// var myName;
// myName = "Bisma Naz";

// 3.
// var message;
// message ="Hello World";
// alert(message);

// 4.
// var studentName ="Johne Doe";
// var studentAge="15 years old";
// var studentProfession = "Certified Mobile Application Development";
// alert(studentName);
// alert(studentAge);
// alert(studentProfession);

// 5. 
// alert("PIZZA \nPIZZ \nPIZ \nPI \nP");

// 6.
// var email = "Bisma.Naz99@gmail.com"
// var someString ="My email address is "
// var add = someString + email;
// alert(add);

// 7.
// var book = "A smarter way to learn JavaScript" ;
// var x = "I am trying to learn from the Book ";
// var z= x + book;
// alert(z);

// 8.
// document.write("Yah! I can write HTML content through JavaScript");

// 9.
// var x="▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(x);


///////////////////////      Variables for numbers ( Chapter 3 )    ///////////////////////////////////////////////////


// 1.
// var age = 21;
// alert("i am " + age + " years old");

// 2.
// var a=14;
// alert("you have visited. This site "+a+"times");


// 3.
// var birthYear = 1998;
// document.write("My Birth Year is " + birthYear + " <br>" + "Datatype of my declare varible is number");

// 4.
// var VisitorName = "John Doe";
// var ProductTitle = "T-shirt(s)";
// var Quantity = 5;
// document.write("<b>" + VisitorName + "</b>" + " ordered " + "<b>" + Quantity + "</b> " + " <b> " + ProductTitle + "</b>" + " on XYZ Clothing store");



//////////////////////////   Legal and illegal ( Chapter 4 )   ///////////////////////////

// 1. 
// var a ,b, c;

// 2.
// var a, $b, _c, bismaNaz , bisma1 ; // legal variable
// var 1a, ?b, stu dent, alert, function ; // illegal variable

// 3.
// var a= "numbers";
// var b= $;
// var c= _;
// document.write("<h2>" + "Rules for naming JS variables" +"</h2>");
// document.write("Variable names can only contain , and For example $my_1stVariable");
// document.write("<br> Variables must begin with a letter, $ or _. For example $name, _name or name");
// document.write("<br> Variable names are case sensitive");
// document.write("Variable names should not be JS keywords");


///////////////////////////// Math Expression ( Chapter 5 )  ///////////////////////////////////////////////////////////////////////////////////



// 1.
// var num1 = +prompt("enter a number");
// var num2 = +prompt("enter second number");
// var result = num1 + num2;
// document.write("Sum of " +num1+"and"+num2+"is"+result);

// 2.
// var num1 = +prompt("enter a number");
// var num2 = +prompt("enter second number");
// var result = num1 - num2;
// document.write("Subtraction of " +num1+"and"+num2+"is"+result);

// var result = num1 * num2;
// document.write("Mult of " +num+"and"+num2+"is"+result);

// var result = num1 / num2;
// document.write("Div of " +num1+"and"+num2+"is"+result);

// var result = num1 % num2;
// document.write("Mod of " +num1+"and"+num2+"is"+result);

// 3.
// var x;
// document.write("Value after variable declaration is:" + x);
// x = 5;
// document.write("<br> Initial value: "+ x);
// x++;
// document.write("<br> Value after increment is: "+ x);
// x=x+7;
// document.write("<br> value after addition is:" + x);
// x--;
// document.write("<br> Value after decrement is: "+ x);
// x= x%3;
// document.write("<br> the remainder is "+ x);

// 4.
// var ticketPrice = 600;
// var x=5;
// document.write("Total cost of Buying "+ x + "tickets to a movie is " + ticketPrice*x +"PKR");

// 5.
// var j;
// for (var i =1 ; i<=10 ; i++)
// {
//  j=i*2;
//     document.write("<br> 2 *" +i+ "=" + j);   
// }

// 6.
// var celciusTemp = +prompt("enter temperature");
// var farenheit = (celciusTemp * (9/5)+32);
// document.write("<br> temperature in "+celciusTemp+ " oC is " + farenheit+ " oF");
// var farenheitTemp = +prompt("enter temperature");
// var celcius = ((farenheitTemp-32)*(5/9));
// document.write("<br> temperature in "+farenheitTemp+ " oF is " + celcius+ " oc");

// 7.
// var Price_of_item_1 = 650;
// var Price_of_item_2 =100;
// var Ordered_quantity_of_item_1 = 3;
// var Ordered_quantity_of_item_2 = 7;
// var Shipping_charges =100;
// var totalCost = ((Price_of_item_1*Ordered_quantity_of_item_1) + (Price_of_item_2*Ordered_quantity_of_item_2) + Shipping_charges);

// document.write("Price_of_item_1 is: " + Price_of_item_1);
// document.write(" <br> Ordered_quantity_of_item_1: "+ Ordered_quantity_of_item_1);

// document.write(" <br> Price_of_item_2 is: " + Price_of_item_2);
// document.write(" <br> Ordered_quantity_of_item_2: "+ Ordered_quantity_of_item_2);
// document.write(" <br> Shipping_charges: "+ Shipping_charges);
// document.write("<br> Total cost of your order is: "+ totalCost);

// 8.
// var student1 = +prompt("enter marks");
// var student2 = +prompt("enter marks");
// var totalMarks = 980;
// var marksObtained = student1+student2;
// var per = ((marksObtained / totalMarks) * 100);
// document.write(" <br> total marks : "+totalMarks);
// document.write(" <br> marks obtained:" +marksObtained);
// document.write(" <br> percentage:" +per + "%");

// 9.
// var US_dollars = 10;
// var SaudiRiyals = 25;
// var pakistaniRupees = ((104.80*US_dollars)+(28*SaudiRiyals));
// document.write("<h2>" + "Currency in PKR" + "</h2>")
// document.write("Total Currency in PKR: "+pakistaniRupees);

// 10.
// var num = 2;
// num  = ((num +5)*10)/2 ;

// 11.
// var currentYear = 2016;
// var  birthYear = 1992;
// var age = currentYear - birthYear ;
// document.write("Current Year: "+currentYear);
// document.write("Birth Year: "+birthYear);
// document.write("Your Age is : "+age);

// 12.
// var radius = 20;
// const pi = 3.142
// document.write( " <br> Radius of a circle is "+radius);
// document.write("<br> Circumference: "+(2*pi*radius));
// var Area = (pi*(radius*radius));
// document.write(" <br> Area: "+Area);

// 13.
// var snack ="lays";
// var c_age = 15;
// var maxAge = 65;
// var estimatedAmount = 3;
// var total =( maxAge - c_age) * estimatedAmount;
// document.write("Favourite snack:" + snack);
// document.write(" <br> current age : "+c_age);
// document.write("  <br> max age; "+maxAge);
// document.write("  <br> amount f snacks per day"+estimatedAmount);
// document.write(" <br> you will need "+ total + " lays to last you until the ripe old age of " +maxAge);




//////////////////////////////////////////    math  expressions ( Chapter 6 - 9 )    //////////////////////////////////////////////////////////////





// 1.
// var a = +prompt("enter the number");
// document.write("Result : <br> the value of a is :"+a);
// document.write("<br> the value of ++a is :"+ (++a));
// document.write(" <br> Now the value of a is :"+a);

// document.write("<br> <br> the value of a++ is :"+(a++));
// document.write("<br> Now the value of a is :"+a);

// document.write("<br> <br> the value of --a is :"+(--a));
// document.write("<br> Now the value of a is :"+a);

// document.write("<br> <br> the value of a-- is :"+(a--));
// document.write("<br> Now the value of a is :"+a);

// 2.
// var a= 2;
// var b=1;
// document.write("<br> the value of a is :"+a);
// document.write("<br> the value of b is :"+b);
// var result = --a - --b + ++b + b--;
// // //         1  -  0  +  1  +  1;
// document.write("<br> Result is :"+result);

// 3.
// var name = prompt("enter your name");
// alert("welcome "+name);

// 5.
// var number = +prompt("enter a number");
// var j;
// var num = number;
// if (num===number) {
//     for (var i =1 ; i<=10 ; i++)
// {
//  j=i*number;
//     document.write("<br>" +number+ " * " +i+ " = " + j);   
// }
// }

// else {
//     var j;
// for (var i =1 ; i<=10 ; i++)
// {
//  j=i*5;
//     document.write("<br> 5 *" +i+ "=" + j);   
// }
// }

// 6.
// var subject1 = prompt("enter subject1");
// var subject2 = prompt("enter subject2");
// var subject3 = prompt("enter subject3");
// var totalMarks1 = 100;
// var totalMarks2 = 100;
// var totalMarks3 = 100;
// var totalMarks = 300;
// var obtainedMarks1 = +prompt("enter obtained marks of first subject1");
// var obtainedMarks2 = +prompt("enter obtained marks of  subject2");
// var obtainedMarks3 = +prompt("enter obtained marks of  subject3");
// var marksObtained = obtainedMarks1+obtainedMarks2+obtainedMarks3;
// var per1 = (obtainedMarks1 / totalMarks1 ) *100;
// var per2 = (obtainedMarks2 / totalMarks2 ) *100;
// var per3 = (obtainedMarks3 / totalMarks3 ) *100;
// var per = (marksObtained / totalMarks ) *100;
// document.write(" <table><tr><th>Subject</th><th>Total marks</th><th>Obtained Marks</th><th>Percentage</th></tr><tr><td>English</td><td>"+totalMarks1+"</td><td>"+obtainedMarks1+"</td><td>"+per1+"%</td></tr><tr><td>Math</td><td>"+totalMarks2+"</td><td>"+obtainedMarks2+"</td><td>"+per2+"%</td></tr><tr><td>Urdu</td><td>"+totalMarks3+"</td><td>"+obtainedMarks3+"</td><td>"+per3+"%</td></tr><tr><td></td><td>"+totalMarks+"</td><td>"+marksObtained+"</td><td>"+per+"%</td></tr></table>");






////////////////////////////////  User input and conditional statements ( Chapter 9 - 11 )  //////////////////////////////////////////////////////////////////



// 1.
// var city = prompt("Enter city name");
// if (city === "karachi"){
//     alert("Welcome to city of lights")

// }

// 2.
// var gender = prompt("Enter gender");
// if (gender==="male"){
//     alert(" Good Morning Sir.")
// }
// else{
//     alert(" Good Morning Maam.")
// }

// 3.
// var color =  prompt("Enter traffic signal color");
// if (color === "red"){
//     alert("Must Stop")
// }
// else if (color===yellow){
//     alert("Ready to move")
// }
// else if (color ===green){
//     alert("Move now")
// }

// 4.
// var remFuel = +prompt("Enter remaining fuel in car ");
// if (remFuel < 0.25 ){
//     alert("Please refill the fuel in your car")
// }

// 5a
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// 5b
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

// 5c
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }

// 5d
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// 5e
// if (true){
//     alert("True");
//     }
//     if (false){
//     alert("False");
//     }    

// 5f
// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }

// 6.
// var obtainedMarks1 = +prompt("enter obtained marks of first subject1");
// var obtainedMarks2 = +prompt("enter obtained marks of  subject2");
// var obtainedMarks3 = +prompt("enter obtained marks of  subject3");
// var marksObtained = obtainedMarks1+obtainedMarks2+obtainedMarks3;
// var totalMarks = +prompt("enter total marks");
// var per = (marksObtained / totalMarks ) *100;
// document.write("Total Marks :"+totalMarks);
// document.write("<br> Marks Obtained:"+marksObtained+"<br>");

// if (per >=80){
//     document.write("Grade: A-one <br>")
//     document.write("Remarks: Excellent")

// }
// else if (per >=70){
//     document.write("Grade: A <br>")
//     document.write("Remarks: Good")
// }
// else if (per >=60){
//     document.write("Grade: B <br>")
//     document.write("Remarks: You need to improve")
// }
// else{
//     document.write("Fail <br>")
//     document.write("Remarks: Sorry")
// }

// 7.
// var  secretNumber = 7;
// var guess = +prompt("guess the number (ranging from 1 to 10)");
// if (secretNumber===guess){
//     alert("Bingo! Correct answer.")
// }

// else if (secretNumber===++guess){
//     alert("Close enough to the correct answer");
// }

// 8.
// var number =  +prompt("Enter the number ");
// if (number % 3 == 0){
//     alert("number is divisible by 3")
// }

// 9.
// var number =  +prompt("Enter the number ");
//  if(number % 2 == 0) {
//     document.write('Number is even!');
// } 
// else {
//    document.write('Number is odd!');
// }
 
// 10.
// var temp =  +prompt("Enter the temperature ");
// if (temp>40){
//     alert("“It is too hot outside.”")
// }
// else if(temp>30){
//     alert("“The Weather today is Normal.”")
// }
// else if (temp>20){
//     alert("“Today’s Weather is cool.”")
// }
// else if (temp>10){
//     alert("“OMG! Today’s weather is so Cool.”")
// }

// 11.
// var number1 =  +prompt("Enter the number1 ");
// var number2 =  +prompt("Enter the number 2");
// var operator =  prompt("Enter the operator ");
// if (operator==="+"){
//     document.write(number1+ "+"+number2+"="+(number1+number2))
// }
// else if (operator==="-"){
//     document.write(number1+ "-"+number2+"="+(number1-number2))
// }
// else if (operator==="*"){
//     document.write(number1+ "*"+number2+"="+(number1*number2))
// }
// else if (operator==="/"){
//     document.write(number1+ "/"+number2+"="+(number1/number2))
// }
// else if (operator==="%"){
//     document.write(number1+ "%"+number2+"="+(number1%number2))
// }



//////////////////////////////////     IF Else , else if ,testing condition  ( Chapter 12 - 13 ) //////////////////////////////////////


// 1.
// var ch = prompt("eneter character");
// if (ch >= 'A' && ch <= 'Z') {
//         document.write(ch +" is an UpperCase character\n"); 
// }
//     else if (ch >= 'a' && ch <= 'z') {
//     document.write(ch +" is an LowerCase character\n"); 
//     }
  
//     else{
//           document.write(ch +" is a number \n"); 
//     }

// 2.
// var number1 =  +prompt("Enter the number1 ");
// var number2 =  +prompt("Enter the number 2");
// if (number1>number2){
//     document.write(""+number1+">"+number2)

// }
// else if (number1<number2){
//     document.write(""+number1+"<"+number2)

// }
// else if (number1===number2){
//     document.write(""+number1+"="+number2)

// }

// 3.
// var number =  +prompt("Enter the number ");
// if(number>0){
//     document.write("num is +ve")
// }
// else if(number<0){
//     document.write("num is -ve")
// }
// if(number==0){
//     document.write("num is 0")
// }

// 4.
// var char =  prompt("Enter the character");
// if (char==="a" | char==="e" |char==="i" | char==="o" | char==="u")
// {
//     document.write("true");
// }
// else{
//     document.write("false");

// }

// 5.
// var password = "pakistan";
// var user_paswd = prompt("enter password");
// if (user_paswd===password){
//     alert("Correct! The password you entered matches the original password")
// }

// else if (user_paswd===""){
//     alert("Please enter your password")
// }
// else{
//     alert("“Incorrect password”")
// }

// 6.
// var greeting ;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";}
// else {
// greeting = "Good evening";
// }

// 7.
// var time =  +prompt("Enter the time in formal of 00000 to 2359 ");
// // var time = 1900;

// if(time>=0000  && time <1200){
//     alert("Good Morning")
// }
// else if (time>= 1200 && time <1700){
//     alert("Good afternoon")
// }
// else if (time>= 1700 && time<2100){
//     alert("Good evening")
// }
// else if (time>=2100 && time<=2359){
//     alert("Good night")
// }




/////////////////////////////////   Arrays( Chapter 14 - 16 )  ////////////////////////////////////////////////////////




// 1.
// var studentsNames = []; // literal method


// 2.
// var studentsNames = new Array(); // literal method
// studentsNames = ["arroba", "soiba"];

// 3.
// var studentsNames = [];
// var studentsNames = ["arroba", "soiba"];

// 4.
// var num = [];
// num =[1,2,3];

// 5.
// var boolean = [];
// boolean=[true,false];

// 6.
// var mixed_array = ["soiba", 10,true];

// 7.
// var qualification = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD"];
// document.write("Qualification");
// for (var i=0; i<qualification.length; i++){
//     document.write("<br>"+i+")  "+qualification[i] )
// }

// 8.
//  var studentsNames = ["Michael", "John","Tony"];
//  var score = [320,230,480];
//  var totalMarks = [500,500,500];
//  var per1 = (score[0]/totalMarks[0])*100;
//  var per2 = (score[1]/totalMarks[1])*100;
//  var per3 = (score[2]/totalMarks[2])*100;
// var per = [per1,per2,per3]
//  for (var i=0; i< studentsNames.length;i++){
//      document.write("<br>Score of "+studentsNames[i]+" is "+score[i]+". Percentage:"+per[i]+"%");
//  }

// 9.

// var color =[" red ", " blue ", " green "];
// document.write(color);
// // a
// var begColor = prompt("enter color what you wants to add in begining");
// color.unshift(begColor);
// document.write("<br>"+color);
// // b
// var endColor = prompt("enter color what you wants to add");
// color.push(endColor);
// document.write("<br>"+color);
// // c
// var begColor1 = prompt("enter color what you wants to add in begining");
// var begColor2 = prompt("enter color what you wants to add in begining");
// color.unshift(begColor1,begColor2);
// document.write("<br>"+color);
// // d
// color.shift();
// document.write("<br>"+color);
// // e
// color.pop();
// document.write("<br>"+color);
// // f
// var color_index = +prompt("enter index number");
// var Color1 = prompt("enter color what you wants to add");
// color.splice(color_index,0,Color1);
// document.write("<br>"+color);
// // g
// var color_index_del = +prompt("enter index number");
// var Color_many_del = +prompt("enter how many delete colors");
// color.splice(color_index_del,Color_many_del);
// document.write("<br>"+color);

// 10.
// var score = [320,230,480,120];
// document.write("Scores of students :" +score);
// score.sort();document.write("<br>Ordered Scores of students :" +score);

// 11.
// var city = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
// document.write("Cities list:  "+city);
// document.write("<br>Selected Cities list:  "+city.slice(2,4));

// 12.
// var arr = [" This ", " is ", " my ", " cat "];
// document.write("Array:  "+arr);
// var a = arr.join(" ");
// document.write("<br>String:  "+a);

// 13.
// var arr = [];
// arr.push("keyboard");
// arr.push("mouse")
// arr.push("printer","monitor");
// document.write("Devices:"+arr);
// document.write("<br>Out:<br>"+arr.shift());
// document.write("<br>Out:<br>"+arr.shift());
// document.write("<br>Out:<br>"+arr.shift());
// document.write("<br>Out:<br>"+arr.shift());

// // 14.
// var arr = [];
// arr.push("keyboard");
// arr.push("mouse")
// arr.push("printer","monitor");
// document.write("Devices:"+arr);
// document.write("<br>Out:<br>"+arr.pop());
// document.write("<br>Out:<br>"+arr.pop());
// document.write("<br>Out:<br>"+arr.pop());
// document.write("<br>Out:<br>"+arr.pop());

// 15.
// var manufactures =["Apple", "Samsung", "Motorola", "Nokia", "Sony ", "Haier"];
// document.write("<select><option>"+manufactures[0]+"</option><option>"+manufactures[1]+"</option><option>"+manufactures[2]+"</option><option>"+manufactures[3]+"</option><option>"+manufactures[4]+"</option><option>"+manufactures[5]+"</option></select>");



/////////////////////////       Arrays And Loops ( Chapter 17 - 20 )  ////////////////////////////////////////////////////////





// 1.
// var matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ];


// 2. 
// var matrix = [
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1]
// ];
// var str1 = matrix[0].join(" ");
// var str2 = matrix[1].join(" ");
// var str3 = matrix[2].join(" ");

// document.write("<br>"+str1);
// document.write("<br>"+str2);
// document.write("<br>"+str3);

// 3.
// for(var i=1;i<=10;i++){
//     document.write("<br>",i);
// }

// 4.
// var number = +prompt("enter the number to show its multiplication table");
// var length = +prompt("enter the length multiplication table");

// for (var i =1 ; i<=length ; i++)
// {
//  j=i*number;
//     document.write("<br>" +number+ " * " +i+ " = " + j);   
// }

// 5.
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (var i =0; i<fruits.length;  i++){
//     document.write("<br>"+fruits[i]);
// }

// for (var j =0 ; j<fruits.length; j++){
//     document.write("<br>Elements at index"+j+ " is "+fruits[j])
// }

// 6.
// a
// document.write("Counting<br>");
// for (var i=1; i<=15;i++){
//     document.write(i+" , ")
// }
// // b
// document.write("<br> Reverse Counting<br>");
// for (var j=10; j>=1;j--){
//     document.write(j+" , ")
// }
// // c
// document.write("<br> Reverse Counting<br>");
// for (var j=10; j>=1;j--){
//     document.write(j+" , ")
// }
// d
// document.write("<br>Even Counting<br>");
// for (var k=0; k<=20;k=k+2){
//     document.write(k+" , ")
// }
// e
// document.write("<br>Odd Counting<br>");
// for (var k=1; k<=20;k=k+2){
//     document.write(k+" , ")
// }
// f
// document.write("<br>Series: <br>");
// for (var k=2; k<=20;k=k+2){
//     document.write(k+"k , ")
// }

// 7.
// var a = ["cake", "apple_pie", "cookie", "chips", "patties"];
// var search = prompt('what do you want to order?');

// var flag=0;
// if (search!=0){
//     for (var i=0; i<a.length;i++){
//         if (a[i]===search){
//                     document.write(a[i]+" is available at index "+i+" in our bakery")
//                     ++flag;
//                     break;
//                 }

//     }
// }

// if(flag===0){
//     document.write("We are sorry"+search+" is not available in our bakery");
// }

// 8.
// var a = [24, 53, 78, 91, 12];
// var suppose_largest = a[3];
// for (var i=0; i<a.length; i++){
//     if (a[i]===suppose_largest){
//         document.write("largest number is "+a[i])
//     }
// }

// 9. 
// var a = [24, 53, 78, 91, 12];
// var suppose_smallest = a[0];
// for (var i=0; i<a.length; i++){
//     if (suppose_smallest>a[i]){
//         document.write("smallest number is "+a[i])
//     }
// }

// 10.
// for (var i = 5 ; i<=100 ; i=i+5){
//     document.write(i+ " , ");   

// }




////////////////////   Chapter 21 - 25   /////////////////////////////////////////////////////////////////

// 1.
// var firstName = prompt("enter first name");
// var lastName = prompt("enter last name");
// var fullName = firstName+" "+lastName;
// alert("welcome "+fullName);
  

// 2.
// var mobile = prompt("enter your Favourite mobile model");
// document.write("My favourite phone is: "+mobile);
// document.write("<br>Length of string: "+mobile.length);


// 3.
// var string = "Pakistani";
// document.write("String: "+string);
// document.write("<br> Index of 'n': "+string.indexOf("n"));


// 4.
// var string = "Hello World";
// document.write("String: "+string);
// document.write("<br> Index of 'n': "+string.lastIndexOf("l"));


// 5.
// var string = "Pakistani";
// document.write("String: "+string);
// document.write("<br>  character at Index 3: "+string.charAt(3));


// 6.
// var firstName = prompt("enter first name");
// var lastName = prompt("enter last name");
// var fullName = firstName.concat(lastName);
// alert("welcome "+fullName);


// 7.
// var str = "Hyderabad";
// document.write("city: "+str);
// for (var i=0; i<str.length;i++){

//     if (str.slice(i,i+9) === "Hyderabad"){
//         str2 = "Islam"+str.slice(i+5);
//         document.write("<br>After replacement: "+str2);
//     }
// }


// 8. 
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var msg = message.replace(/and/g,"&"); 
// document.write(msg);


// 9.
// var value = "472";
// document.write("Value: "+value+"<br> Type: String");
// document.write("<br>Value: "+Number(value)+"<br> Type: number");


// 10.
// var x = prompt("enter any string");
// var y= x.toUpperCase();
// document.write("user input: "+x);
// document.write("<br>Upper case: "+y);


// 11. 
// var str = prompt("enter any string");
// document.write("user input: "+str);
// var str1 = str.slice(0,1);
// var str2 = str.slice(1);
// document.write("<br>Title case: "+str1.toUpperCase()+""+str2.toLocaleLowerCase())


// 12. 
// var num = 35.36;
// var x = num.toString().replace(".","");
// document.write("Number:"+num);
// document.write("<br>Result:"+x);


// 13. 
// var string = prompt("Enter username");
// var matchfound = true;
// for (var i=0; i<string.length;i++)
// {
// var checkChar = string.charCodeAt(i)
// if (checkChar>=33 && checkChar<=64){
//     matchfound=false;
//     alert("Please enter a valid username")
// break;
// }
// }
// if (matchfound===true){
//     alert("hello "+string)
// }


// 14.
// var arr = ["cake", "applepie", "cookie","chips","patties"];
// var str = prompt("Welcome to ABC Bakery, what do you want to order");
// var strcon = str.toLowerCase();
// var matchfound = false;
// for (var i = 0; i<arr.length; i++){
//     if (arr[i]===strcon){
//         matchfound= true;
//         document.write(strcon+" is available at index "+i+" in our bakery");
//     }
// }
// if (matchfound===false){
//     document.write("We are sorry . "+strcon+" is not available in our bakery");
// }


// 15. 
// var input = prompt("Enter password");
// document.write("Enter password: "+input)
// if (isNaN(parseInt(input[0]))) {

//   if (input.length>=6){
                
//                     var passw1= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
//                     if(input.match(passw1)) 
//                     { 
//                     document.write('<br>Correct , Hello World! ')
                
//                     }
//                     else{
//                         document.write("<br>your password should contain alphabets and numbers")
//                     }
                
//             }
//             else{
//                 document.write("<br>Your password alteast 6 character long")
//             }
//         }

// else {
//     document.write("<br> Password cannot begin with a number")
//  document.write("<br>Please enter a valid password")
// }



// 16. 
// var str = "University of Karachi";
// var arr = str.split("");
// var text = "";
// var i;
// for (i = 0; i < arr.length; i++) {
//   text += arr[i] + "<br>"
// }
// document.write(text);


// 17. 
// var string = prompt("user input");
// document.write("user input: "+string);
// var x = string.charAt(string.length-1);
// document.write("<br> Last character of input: "+x);


// 18.
// function count(main_str, sub_str) 
//     {
//     main_str += '';
//     sub_str += '';
//     if (sub_str.length <= 0) 
//     {
//         return main_str.length + 1;
//     }
//        subStr = sub_str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
//        return (main_str.match(new RegExp(subStr, 'gi')) || []).length;
//     }
// document.write("Text: The quick brown fox jumps over the lazy dog")
// var result = count("The quick brown fox jumps over the lazy dog","the");
// document.write("<br>There are "+result+" occurence(s) of word 'the'");



//////////////    Chapter 26 - 30    //////////////////////////////////////////////////////////////////////////////////////

// 1.
// var num = +prompt("enter postive integer");
// document.write("number: "+num);
// document.write("<br>rounf off value: "+Math.round(num));
// document.write("<br>floor value: "+Math.floor(num));
// document.write("<br>ceil value: "+Math.ceil(num));


// 2.
// var num = +prompt("enter negative integer");
// document.write("number: "+num);
// document.write("<br>rounf off value: "+Math.round(num));
// document.write("<br>floor value: "+Math.floor(num));
// document.write("<br>ceil value: "+Math.ceil(num));


// 3.
// var num = +prompt("enter integer");
// document.write("the absolute value of "+num+" is "+Math.abs(num));


// 4.
// var num = Math.random() *6;
// var num1 = Math.floor(num);
// var num2 = Math.ceil(num);
// document.write("random dice value: "+num1);
// document.write("<br>random dice value: "+num2)


// 5.
// var toss = Math.random()*2;
// var floor = Math.ceil(toss);
// if (floor===2){
//     document.write(floor+"<br> random coin value: Heads")
// }
// else{
//     document.write(floor+"<br> random coin value: Tails")
// }


// 6.
// var rand = Math.random()*100;
// var num = Math.ceil(rand);
// document.write("random number between 1 and 100 : "+num);


// 7.
// var wegt = prompt("Enter your weight in kilograms");
// document.write("the weight of user is "+parseInt(wegt)+" kilograms")


// 8.
// var num = +prompt("Enter a number between 1 and 10");
// var rand = Math.random()*10;
// var rand2 = Math.ceil(rand);
// if (rand2===num){
//     alert("Congraulate");
// }
// else{
//     alert("Try again!");
// }


////////////// Chapter 31 - 34   //////////////////////////////////////////////////////////////////////////////

// 1.
// var a = new Date();
// document.write(a);


// 2.
// var months = ["January","Feburary","March","April","May","June","July","August","September","October","November","December"];
// var now = new Date();
// var theMonth = now.getMonth();
// var nameOfMonth = months[theMonth];
// document.write("Current month: "+nameOfMonth);


// 3.
// var a = new Date();
// var b = a.toString();
// var  c = b.slice(0,3);
// document.write("Today is "+c);


// 4.
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date();
//  var theDay = now.getDay();
//  var nameOfToday = dayNames[theDay];
//  if (nameOfToday==="Sat"|| nameOfToday==="Sun"){
//      document.write("It’s Fun day")
//  }
// else{
//     document.write("Busy day")
// }


// 5.
// var a = new Date();
// var b = a.getDate();

// if (b<16){
//     document.write("first fifteen days of the month")
// }
// else{
//     document.write("last days of the month");
// }


// 6.
// var today = new Date();
// document.write("Current Date: "+today);
// var msToday = today.getTime();
// document.write("<br>Elapsed miliseconds since January 1, 1970: "+msToday);
// var minToday = msToday /(1000*60*60);
// document.write("<br>Elapsed minutes since January 1, 1970: "+minToday); 


// 7.
// var today = new Date();
// var x = today.getHours();
// if (x<=12){
// document.write("Its AM ")
// }
// else{
//     document.write("Its PM ")   
// }


// 8.
// var LaterDate = new Date();
// var x = LaterDate.setMonth(11);
// var y = LaterDate.setFullYear(2020);
// var z = LaterDate.setDate(31);
// document.write("Later Date: "+LaterDate);


// 9.
// var ramadan = new Date("Jun 18, 2015");
// var today = new Date();
// var ramadanMs = ramadan.getTime();
// var todayMs = today.getTime();
// var diff = todayMs-ramadanMs;
// var days = diff /(1000*60*60*24);
// var daysFloor = Math.floor(days);
// document.write(""+daysFloor+" days have passed since 1st ramadan 2015");


// 10.
// var x = new Date("Dec 05, 2015");
// var TodayDate = new Date();
// var xMs = x.getTime();
// var TodayMs = TodayDate.getTime();
// var diff = TodayMs- xMs;
// var sec = diff /(1000*60);
// var secfl = Math.floor(sec);
// document.write("On reference date: "+TodayDate+", "+secfl+" seconds had passed since begining of 2015");


// 11.
// var TodayDate = new Date();
// document.write("current date: "+TodayDate);
// var hr = TodayDate.getHours();
// var x= hr -1;
// var y = TodayDate.setHours(x);
// document.write("<br>1 hour ago it was : "+TodayDate);


// 12.
// var TodayDate = new Date();
// document.write("current date: "+TodayDate);
// var y = TodayDate.setFullYear(1920);
// document.write("<br>100 years back it was : "+TodayDate);


// 13.
// var age = +prompt("enter age");
// var today = new Date();
// var currYear = today.getFullYear();
// var diff = currYear - age;
// document.write("your age is:"+age);
// document.write("<br>your birth year is:"+diff);


// // 14.
// var CustomerName = prompt("Enter customer name");
// var CurrentMonth = prompt("Enter month");
// var  NumberofUnits = +prompt("Enter units");
// var ChargesPerUnit = +prompt("Enter per unit charges");
// var NetAmountPayable = NumberofUnits*ChargesPerUnit;
// var LatePaymentSurcharge = 350;
// var GrossAmountPayable = NetAmountPayable +LatePaymentSurcharge;
// document.write("<br>Customer Name: <b>"+CustomerName+"</b>");
// document.write("<br>Month: <b>"+CurrentMonth+"</b>");
// document.write("<br>Number of units: <b>"+NumberofUnits+"</b>");
// document.write("<br>Charges per units: <b>"+ChargesPerUnit+"</b>");
// document.write("<br><br> Net Amount Payable (within Due Date): <b>"+NetAmountPayable+"</b>");
// document.write("<br> Late Payment Surcharge: <b>"+LatePaymentSurcharge+"</b>");
// document.write("<br> gross Amount Payable (after Due Date): <b>"+GrossAmountPayable+"</b>");





////////////////////   Chapter 35 - 38   /////////////////////////////////////////////////////////////////////////

// 1.
// function date(){
//     var a = new Date()
//     return a
// }
// var b = date();
// document.write(""+b);


// 2.
// function greet(firstName,lastName){
//     alert("hello "+firstName+" "+lastName)
// }
// greet(prompt("enter your first name"),prompt("enter your last name"))


// 3.
// function add(a,b){
//     return a+b
// }
// var result = add(+prompt("enter first number"),+prompt("enter second number"))
// document.write(" ",result)


// 4.
// function calc(num1,opr,num2){
//     if (opr==="+"){
//         return num1+num2
//     }
//     else if (opr==="-"){
//         return num1-num2
//     }

//     else if (opr==="*"){
//         return num1*num2
//     }
//     else if (opr==="/"){
//         return num1/num2
//     }
// }
// var result = calc(+prompt("enter first number"),prompt("enter operator"),+prompt("enter second number"));
// document.write(" "+result);


// 5.
// function square(a){
//     return a*a
// }
// var result = square(4);
// document.write(" "+result);


// // 6.
// function factorial(num) {
//     if (num < 0) 
//           return -1;
//     else if (num == 0) 
//         return 1;
//     else {
//         return (num * factorial(num - 1));
//     }
//   }
// var result = factorial(4);
// document.write(" "+result);


// 7. 
// function counting(a,b){
//     document.write(""+a)
//     for(var i=a;i<b;i++){
        
//         var x =i+1;
//         document.write(" <br> "+x)
//     }
// }
// counting(+prompt("enter start number"),+prompt("enter end number"));


// 8. 
// var x , y;
// function hypotenuse(base,perpendicular){
     
//     function square(base,perpendicular){
//      return   (Math.pow(base, 2) + Math.pow(perpendicular, 2))
//     }
// res= square(x,y)
//    return  Math.sqrt(res);
// }
// x= +prompt("enter base");
// y= +prompt("enter perpendicular");
// var z = hypotenuse(x,y);
// document.write("hypotenuse of a right angle triangle: "+z);


// 9.
// function area(width,height){
//     return width*height
// }
// // i.
// var result = area(4,4);
// document.write(" "+result);
// // ii.
// var a=4;
// var b=4;
// var result1 = area(a,b);
// document.write(" <br>"+result1);


// 10.
// function palindrome(word){
//     var check = "";
//     for (var i= word.length - 1; i>=0; i--){
//         check += word[i]
//     }
//    if( word===check) {
//         document.write(word+" is palindrme word");}
// }
// palindrome( prompt("Enter your word "));


// 11.
// function uppercase(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];
    
//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }
// document.write("Example string: the quick brown fox")
// document.write("<br>Expected Output: "+uppercase("the quick brown fox"));


// 12.
// function find_longest_word(str)
// {
//   var arr = str.match(/\w[a-z]{0,}/gi);
//   var result = arr[0];

//   for(var i = 1 ; i< arr.length ; i++)
//   {
//     if(result.length < arr[i].length)
//     {
//     result = arr[i];
//     } 
//   }
//   return result;
// }
// document.write("Example String: Web Development Tutorial")
// document.write("<br>Expected output: "+find_longest_word('Web Development Tutorial'));


// 13.
// function characterCount(str, letter) 
// {
//  var letterCount = 0;
//  for (var i = 0; i < str.length; i++) 
//  {
//     if (str.charAt(i) == letter) 
//       {
//       letterCount += 1;
//       }
//   }
//   return letterCount;
// }
// document.write(" "+characterCount( 'JSResourceS.com', 'o'));


// 14.
// const pi = 3.14;
// function  calcCircumference(radius){
//     return 2*pi*radius
// }

// document.write("The circumference is : "+calcCircumference(4));

// function calcArea(radius){
//     return pi*radius*radius
// }

// document.write("<br>the Area is : "+calcArea(4));




//////////////////  Chapter 38 - 42 (Functios , switch statements, while ... do-while loops)   ////////////////////////////////////////////////////////////////

// 1.
// function power(a,b)
// {
// var val=a;
// for(var i=1;i<b;i++)
// {
// val=val*a;
// }
// return val
// }
// var result = power(3,3);
// document.write(result)


// 2.
// function leapyear(year)
// {
// return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
// }
// var x = leapyear(+prompt("Enter year to check leap year or not"));
// if (x===true){
//     console.log(x+" yes this is leap year")
// }
// else{
//     console.log(x+" no, this is not leap year")
// }


// 3.
// function avg(val1,val2,val3){
//     var z = (val1+val2+val3)/2
//     return z
// }

// function area(s){
//   var  areaTriangle = Math.sqrt(s*(s - a)*(s - b)*(s - c));
//   return areaTriangle
// }

// var a = +prompt("enter value of a");
// var b = +prompt("enter value of b");
// var c = +prompt("enter value of c");
// var res = avg(a,b,c)
// var result = area(res);
// document.write("the area of triangle is "+result)


// 4.
// function mainFunction(){
//  var res = average(sub1,sub2,sub3);
//  document.write("the average marks of 3 subjects are: "+res)
//  var ObtainedMarks = sub1+sub2+sub3;
//  var result = Math.floor(percentage(ObtainedMarks));
//  document.write("<br>the percentage is "+result+" %")
// }

// function average(a,b,c){
// var avg = (a+b+c)/3
// return avg
// }

// function percentage(obtMarks){

//     var totalMarks = 300;
//     var z = (obtMarks / totalMarks) *100
//     return z
// }

// var sub1 =+prompt("enter marks of subject 1 out of 100")
//  var sub2 =+prompt("enter marks of subject 2 out of 100")
//  var sub3 =+prompt("enter marks of subject 3 out of 100")
//  mainFunction();


// 5.
// function indexOf(str, char) {
//     var i=0;
//     while(i < str.length){
//         if(str[i] == char){  
//             return i
//         }
//         i++                          
//     }
//     return -1;                       
// }
// console.log(indexOf("Bisma Naz", "B"))
// console.log(indexOf("Bisma Naz", "N"))


// 6.
// function vowelsRemover(str){
//     const vowels = /[aeiouAEIOU]+/g;
//     return str.replace(vowels, "");
//   }
//  var result = vowelsRemover("what Is your name")
//  document.write(result)


// 7.
// function findOccurrences() {
//     var str = "Pleases read this application and give me gratuity";
//     var chars = str.toLowerCase().split("");
//     var count = 0;
    
//     for(let i = 0; i < chars.length - 1; i++) {
//       var char = chars[i];
//       var next = chars[i + 1];

//       if(isCorrectCharacter(char) && isCorrectCharacter(next)) {
//         count++
//         document.write("<br> Such occurrences are: "+char+next)
//       }
//     }
//     return count;
//   }

//   function isCorrectCharacter(char) {
//     switch (char) {
//       case 'a':
//       case 'e':
//       case 'i':
//       case 'o':
//       case 'u':
//         return true;
//       default:
//         return false;
//     }
//   }
//   var found = findOccurrences();
//   console.log(found);


// 8.
// var distance = +prompt("Enter distance between two cities (in km.)");
// function distanceMeter(distance){
//     return distance*1000
// }
// function distanceFeet(distance){
//     var a = distance*1000;
//     return a*3.2808
// }
// function distanceInches(distance){
//     var b = distance*1000;
//     return b*39.370
// }
// function distanceCentimeter(distance){
//     var c = distance*1000;
//     return c/0.01
// }
// var m = distanceMeter(distance)
// var inches = distanceInches(distance);
// var feet = distanceFeet(distance);
// var cm = distanceCentimeter(distance);
// document.write("<br>distance in kilometer: "+distance)
// document.write("<br>distance in meter: "+m)
// document.write("<br>distance in feet: "+feet)
// document.write("<br>distance in inches: "+inches)
// document.write("<br>distance in centimeter: "+cm)


// 9.
// var overTime, overtimePay = 0;
// var workingHours =	+prompt("Enter the time employee worked in hr ");
// 		if (workingHours>40)
// 		{
// 			overTime = workingHours - 40;
//             overtimePay = overtimePay + (12 * overTime);
//             document.write("Total Overtime Pay Of Employees Is: "+overtimePay);
// 		}
// else{
// document.write("You have to work for more than 40 hours to get over time pay\n");
// }


// 10.
// var amount = +prompt("Please input amount for withdraw : ");
//     var hun = Math.floor(amount / 100)
//     var fif = Math.floor((amount % 100) / 50);
//     var ten = Math.floor((((amount % 100) % 50) / 10));
//     var remaining = Math.floor((((amount % 100) % 50) % 10));
// document.write("you will have "+hun +" hundred notes "+fif+" fifty notes "+ten+" ten notes and remaining Rs."+remaining)
 

///////////////////////////// Chapter 43 - 48 (Events)  //////////////////////////////////////////////////

// 1.
// function show(){
//     alert("Hello world");
// }


// 2.
// function thank(){
//     alert("thanks for purchasing a phone for us")
// }


// 3. 
// function DeleteRowFunction() {
//     // event.target will be the input element.
//     var td = event.target.parentNode; 
//     var tr = td.parentNode; // the row to be removed
//     tr.parentNode.removeChild(tr);
// }


// 4.
// function changeImage(id,src){
//     var image = document.getElementById(id)
//     image.src = src
// }



// 5.
// var buttonTarget = document.getElementsByClassName("btn")[0];
// var counter = 1;
// function incrementer(){

// document.getElementById("showcounter").value = counter.toString();
//   counter++;
//   return counter;
// }

// var buttonTarget1 = document.getElementsByClassName("btn1")[0];

// // var counter = incrementer();
// function decrementer(){
    
//   document.getElementById("showcounter").value = counter.toString();

//   counter--;
//   return counter;
// }


//////////////////////////////////////    chapters 49 - 52  (Events)  ////////////////////////////////////

// 1.
// function testVariable() {
//     var strText = document.getElementById("FirstName").value;          
//     var strText1 = document.getElementById("LastName").value;
//     var strText2 = document.getElementById("Email").value;
//     var result = strText + ' ' + strText1 + ' <br> ' + strText2;
//     document.getElementById('spanResult').innerHTML = result;  
    
// }


// 2.
// function seeMore(){

//     var text = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque cumque labore tenetur alias exercitationem repellendus, officia quisquam sint perspiciatis vitae magnam blanditiis ad provident, ea tempore. Qui dolorem ex fuga! <ol><li>Slow loris</li><li>Fast loris</li><li>Just-right loris</li></ol>";
//     var pera = document.getElementById('pera');
//     pera.innerHTML = text

// }


// 3.
//     function SomeDeleteRowFunction() {
//             // event.target will be the input element.
//             var td = event.target.parentNode; 
//             var tr = td.parentNode; // the row to be removed
//             tr.parentNode.removeChild(tr);
//         }


// function edit_row(no)
// {
//  document.getElementById("edit_button"+no).style.display="none";
//  document.getElementById("save_button"+no).style.display="block";
	
//  var name=document.getElementById("name_row"+no);
//  var course=document.getElementById("course_row"+no);
 
	
//  var name_data=name.innerHTML;
//  var course_data=course.innerHTML;
	
//  name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
//  course.innerHTML="<input type='text' id='course_text"+no+"' value='"+course_data+"'>";
// }

// function save_row(no)
// {
//  var name_val=document.getElementById("name_text"+no).value;
//  var course_val=document.getElementById("course_text"+no).value;


//  document.getElementById("name_row"+no).innerHTML=name_val;
//  document.getElementById("course_row"+no).innerHTML=course_val;

//  document.getElementById("edit_button"+no).style.display="block";
//  document.getElementById("save_button"+no).style.display="none";
// }


///////////////////////////////////////////   chapters 53 - 58  /////////////////////////////

// 1.
// // Get the modal
// var modal = document.getElementById("myModal");
// var modal1 = document.getElementById("myModal1");
// var modal2 = document.getElementById("myModal2");

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");
// var btn1 = document.getElementById("myBtn1");
// var btn2 = document.getElementById("myBtn2");
// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];
// var span1 = document.getElementsByClassName("close1")[0];
// var span2 = document.getElementsByClassName("close2")[0];

// // When the user clicks on the image, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// btn1.onclick = function() {
//     modal1.style.display = "block";
//   }

//   btn2.onclick = function() {
//     modal2.style.display = "block";
//   }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// span1.onclick = function() {
//     modal1.style.display = "none";
//   }

//   span2.onclick = function() {
//     modal2.style.display = "none";
//   }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

// window.onclick = function(event) {
//     if (event.target == modal1) {
//       modal1.style.display = "none";
//     }
//   }

//   window.onclick = function(event) {
//     if (event.target == modal2) {
//       modal2.style.display = "none";
//     }
//   }


// 2.
// function increaseFontSizeBy10px() {
//     txt = document.getElementById('b');
//     style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
//     currentSize = parseFloat(style);
//     txt.style.fontSize = (currentSize + 10) + 'px';
// }

// function decreaseFontSizeBy10px() {
//     txt = document.getElementById('b');
//     style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
//     currentSize = parseFloat(style);
//     txt.style.fontSize = (currentSize - 10) + 'px';
// }




///////////////////////////////////////////////  chapters 58 - 67 (DOM) //////////////////////////

// 1.

// i.
// var a = document.getElementById('main-content')

// ii.
// console.log(a.childNodes)

// iii.
// var a = document.getElementsByClassName('render');
// console.log(a)
// for(var i =0;i<4;i++){
//     var contents = a[i].innerHTML;
//     console.log("<br>"+contents)
// }


// iv.
// var a = document.getElementById('first-name')
// a.value = "Alex"

// v.
// var b = document.getElementById('last-name')
// b.value = "Bank"
// var c = document.getElementById('email')
// c.value = "alexbank@example.com"

// 2.

// i.
// var a = document.getElementById('form-content')
// var nType = a.nodeType;
// console.log(nType)

// ii.
// var a = document.getElementById('lastName')
// var nType = a.nodeType;
// console.log(nType)
// var ch = a.childNodes[0];
// var nT = ch.nType
// console.log(nT)


// iii. 
// document.getElementById("lastName").innerHTML = "Last Name: LOL";


// iv.
// var a = document.getElementById('main-content')
// var fstCh = a.firstChild;
// console.log(fstCh);
// var laCh = a.lastChild;
// console.log(laCh)

// v.
// var a = document.getElementById('lastName')
// var pSib = a.previousSibling;
// console.log(pSib);
// var nSib = a.nextSibling;
// console.log(nSib)

// vi.
// var a = document.getElementById('email');
// var pNode = a.parentNode;
// console.log(pNode)
// var nType = a.nodeType;
// console.log(nType)

