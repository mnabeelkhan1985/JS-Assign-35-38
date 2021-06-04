function date(){var date=new Date();
document.write("Current Date is :",date)}

function name(){var firstName=prompt("Enter your first Name")
var lastName=prompt("Enter your last Name")
var fullName=firstName+" "+lastName;
document.write("<br/>your full Name is<b> ", fullName,"</b>")}


function sum(){var num1=+prompt("Enter first number")
var num2=+prompt("Enter second number")
var sumNum=num1+num2;
document.write("<br/>Sum of two numbers is <b> ", sumNum,"</b>")}



function calculator(par1,par2,par3){
   var numb1;
var numb2;
var operator;
numb1=prompt("Enter first number");
numb2=prompt("Enter second number");
operator=prompt("Enter Operator");

if(operator==="+"){
   return numb1+numb2;}

if(operator==="*"){
 return numb1*numb2;}

if(operator==="-")
{   return numb1-numb2;}
    
if(operator==="/")
{    return numb1/numb2;}
  
}

function square(a){
   var a=+prompt("Enter the number your want to square")
   return a*a;
   

}
function factorial(number){
var number = parseInt(prompt("Enter a positive integer to find it s factorial"))

// checking if number is negative
if (number < 0) {
    document.write("Error! Factorial for negative number does not exist.")         
}

// if number is 0
else if (number === 0) {
    console.log("The factorial of",number ,"  is 1");
}

// if number is positive
else {
    var fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
    }
    document.write("<br/>The factorial of  ",number," is ",fact,"<br/>");
}

}
function counting(a,b){
    for(i=a;i<=b;i++){
        document.write(i+",")

    }
}

function hypotenues(a,b)
{
    function squareOf(f){
        return f*f;

    }
var per = squareOf(a);
var base=squareOf(b);
return Math.sqrt(per+base);
    
}

function areaOfTriangle(w,h){
    return w*h;


}

function pelindrome(str1)
{   
    for (i=str1.length-1;i>=0;i--)
    
    {str2 += str1[i];
        }
        
    if(str1===str2){
        document.write("<br/>The word is pelindrom")}
        

    else{ document.write("<br>The word is not pelindrom")}
    console.log(str1)
        console.log(str2)

}
function titleCase(str3){var str4=str3.split(" ");
var str5=[];
str5=str4.split();
for(i=0;i<str5.length;i++){
    str5[i]=str5[i].charAt(0).toUpperCase()
}
console.log(str4);
console.log(str5);


}

date();
name();
sum();
var a=calculator(3,3,"+");
document.write("</br>Answer is ",a)
var b=square();
document.write("</br>square of number is ",b)
factorial();
counting(3,10);
var e=hypotenues(4,6);
document.write("<br/>Value of hypotenues is  ", e);
var area =areaOfTriangle(4,5);
document.write("<br/>Area of triangl is ", area);
var width=75;
var height=80;
console.log(areaOfTriangle(width,height))
var str2="";
var string1=prompt("Enter the word to assess is it pelindrome or not")
pelindrome(string1);
var string2=prompt("Enter the sentence to make all words title case in it")
titleCase(string2);




