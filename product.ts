//task 4:
interface product{
    name:string;
    price:number
}

function getPrice(products: product[]) {
    //the reduce method, goes through the products[] items
    //and each time it adds the current price to the total price.
    const total = products.reduce((total, current) => total + current.price, 0);
    return total;
}

//example usage
const products:product[] = [
    {name:"apple", price:20},
    {name:"banana", price:10},
    {name:"eggs", price:50}
]
console.log(getPrice(products));

//..........................


//task 5
function isValidEmail(email: string): boolean {
    //regular expression for validating the email structure
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //the text method ensures that the string provided follow the "emailRegex" structure
    return emailRegex.test(email);
}

//example usage
console.log(isValidEmail("abd@gmail.com"));
console.log(isValidEmail("not an email")); 

//...........................

/*
to run typescript code you need to have typescript installed, 
use typescript compiler to compile typescript to javascript with this command "tsc product.ts", 
this generates a new javascript file "product.js", 
then you can run the js file using node or include it in a script tag in your html file.
 */