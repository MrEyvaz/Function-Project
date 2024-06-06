//Task 1

let sentence = 'Salam dunya'

function word(names) {
    console.log(names);
}

word(sentence)

//Task 2

let numeral = 5

function number(variable) {
    console.log(variable);
}

number(numeral)

//Task 3

let digit = +prompt('choose the number')

function num(multiply) {

    console.log(multiply*2);
}

num(digit)

//Task 4

let integer1 = +prompt('choose the number')

let integer2 = +prompt('choose the number')

function numbers(mult1, mult2) {

    console.log(mult1 * mult2);
}

numbers(integer1, integer2)

//Task 5

let b1 = prompt('Enter your name')

let b2 = prompt('Enter your lastname')

let b3 = prompt('Enter your age')

function info(n,l,a) {

    console.log(`My name is ${n}, my lastname is ${l}, my age is ${a}`);
}

info(b1, b2, b3)


//Task 6

let n1 = +prompt('choose the first number')

let n2 = +prompt('choose the second number')

let n3 = prompt('choose the operator')

function numbers(num1, num2, num3) {

    if (num3 == '*') {
        console.log(num1 * num2);
    }

    if (num3 == '/') {
        console.log(num1 / num2);
    }

    if (num3 == '-') {
        console.log(num1 - num2);
    }

    if (num3 == '+') {
        console.log(num1 + num2);
    }
}

numbers(n1, n2, n3)


//Task 7

let number1 = +prompt('choose the number')

function num(operator) {

    console.log(operator ** 3);
}

num(number1)


//Task 8 

let z = +prompt('Choose the length of a rectangle')

let v = +prompt('Choose the width of a rectangle')

function rec(w,l) {

    console.log(`Perimeter is ${2*(w+l)}, Area is ${w*l}`);

}

rec(z,v)


//Task 9

let l = +prompt('Choose the first angle of a triangle')

let e = +prompt('Choose the second angle of a triangle')

function angle(angle_1,angle_2) {

    if (angle_1+angle_2 > 180) {
        alert('choose the sum of angles under 180')
    }

    else if (angle_1+angle_2  < 180) {
        alert(`${180 - (angle_1+angle_2 )}`)
    }

}

angle(l,e)


//Task 10 

let d = [45, 67, 89, 23, 55, 88, 93]

let prom = +prompt('choose the number what you want')

function arr(array_1, array_2) {

    for (let i = 0; i < d.length; i++) {
        if (array_1[i] == array_2) {
            console.log(`${array_2} is in the array`);break
        } else {
            console.log(`${array_2} isn't in the array`);break
        }
    }
}

arr(d, prom)


//Task 11

let c = +prompt('Choose the number')

function formula(x) {

console.log((8*x+45)/25-9);

}

formula(c)


//Task 12

let a = +prompt('choose the number')

let b = +prompt('choose the percent(%)')

function percentage(x, y) {

console.log(`The percentage of your number is ${x*y/100}`);

console.log(`Finding the number based on your percentage is ${x*100/y}`);
}

percentage(a, b)