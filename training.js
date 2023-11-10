// сумма двух чисел
let a,b,c;
a=2;
b=5;
c=a+b;
console.log("Сложить два числа - ",c);

// наиболшее из трех числел
if ((a>b) && (a>c)) {
    console.log("Вернуть наиболшее из 3х числел - ",a)
} else 
if ((b>a) && (b>c)) {
    console.log("Вернуть наиболшее из 3х числел - ",b)
} else 
if ((c>b) && (c>a)) {
    console.log("Вернуть наиболшее из 3х числел - ",c)
} 



// самая длинная строка
let Text_1="это самая длинная строка";
let Text_2="нет, это строка самая длинная";
let Text_3="а я томат";
if ((Text_1.length>Text_2.length) && (Text_1.length>Text_3.length)) {
    console.log("Вернуть самую длинную строку - ",Text_1)
} else 
if ((Text_2.length>Text_1.length) && (Text_2.length>Text_3.length)) {
    console.log("Вернуть самую длинную строку - ",Text_2)
} else 
if ((Text_3.length>Text_1.length) && (Text_3.length>Text_2.length)) {
    console.log("Вернуть самую длинную строку - ",Text_3)
} 