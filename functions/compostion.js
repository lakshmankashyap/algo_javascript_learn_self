/* 
Function composition is an approach where the result of one function is passed on to the next function, which is passed to another until the final function is executed for the final result. Function compositions can be composed of any number of functions.
 */


// Traditional approach

const double = x => x * 2
const square = x => x * x
// Tradition approach
var output1 = double(2);
var output2 = square(output1);
console.log(output2);//16
// variant two
var output_final = square(double(2));
console.log(output_final); //16

// Alternate approach
    // compose function

    // function composition of any number of functions
    const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x); 
    const double = x => x * 2
    const square = x => x * x

    // function composition
    var output_final = compose(square, double)(2);
    console.log(output_final); //16

    // pipe function
    // function composition using pipe of any number of functions
    const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x); 
    const double = x => x * 2
    const square = x => x * x

    // function pipe
    var output_final = pipe(square, double)(2);
    console.log(output_final);//8
/* 
    In the code above, we can see that the pipe function is implemented using a general approach on line 2, so it can now take any number of functions. This is similar to the previous compose function, except that it uses reduce instead of the reduceRight method. The output is different in this case because the square function is invoked before the double function while, ​in our compose function, it was in the opposite order.
 */
