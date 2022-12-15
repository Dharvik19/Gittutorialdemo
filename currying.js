// let multiply = function (x,y){
//     console.log(x * y);
// }

let multiply = function(x){
    return function(y){
        console.log(x*y);
    }
}

// let multiplyTwo = multiply.bind(this,2);
// multiplyTwo(4);

// let multiplyThree = multiply.bind(this,3);
// multiplyThree(5);

let multiplyFive = multiply(5);
multiplyFive(3);