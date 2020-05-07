// Name:    Yusuf C
// Class:   27

// JavaScript1

/* 1. Create a function, named logObj, that:
    - Takes 1 argument: an object, with 3 properties
    - Loops over the object and put each value into a separate variable
    - Concatenates the values into a single string
    - Log to the console the string, including the following: '{NAME} is {AGE} and works as an {JOB}!'
    - Return the string

    Expected output:
    'Noer is 28 and works as an Education Director'

    
*/
// const logObj = (object) =>{
//     let object = {
//         NAME : '',
//         AGE : '',
//         JOB : ''
//     };
//     object.f
// }

/* 2. Create a function, named logNumbers, that:
      - Takes 2 arguments: a start number and an end number
      - Has a loop that starts from the start number and ends until the end number
      - Log to the console each number, however...
      - If the number is a multiple of 3 output the string “Fizz”,
      - If the number is a multiple of 5 output the string “Buzz”
      - If the number is a multiple of 3 AND 5 output the string “FizzBuzz”
      - Make use of the modulo operator and check for the remainder: %

      Expected output:
      logNumbers(1, 15);
      1
      2
      Fizz
      4
      Buzz
      6
      ...
      13
      14
      FizzBuzz

      Use the following values: 1 (start number) and 100 (end number)
*/
// const logNumbers = (startNum, endNum)=>{
//     for (let index = startNum; index <= endNum; index++) {
//         if(index % 3 === 0 && index % 5 === 0){
//             console.log('FizzBuzz');
//         }
//         else if (index % 3 === 0) {
//             console.log('Fizz');
//         }
//         else if(index % 5 === 0){
//             console.log('Buzz');
//         }
//         else{
//             console.log(index);
//         }
//     }
// };
// logNumbers(1,15);

// JavaScript2

/* 3. Create a function, named toNumbers, that:
      - Takes in 1 argument: an array of strings
      - Get the index position number of each value
      - Create a new array that includes all these numbers
      - Make use of the map() function
      - Log to the console the array of numbers
      - Return the array of numbers

      Expected output:
      [1, 2, 3, 4]

      Use the following array: const letters = ['a', 'b', 'c', 'd'];
*/
// const letters = ['a', 'b', 'c', 'd'];
// const toNumbers = (array) => {
//     newArray = array.map((index)=>{
//         return index;
//     })
// }

/* 4. Create a function, called injectBooksToDOM, that:
      - Takes 1 argument: an array of objects
      - Loops over the array
      - Injects each object's content into the DOM in an unordered list
      - Make use of the forEach() function
      - Returns true if it works, false if it doesn't

      Target the '#root' element in 'index.html'.
      Use the following object:
      const books = [
            {
                  bookName: "The Nature of Software Development",
                  author: "Ron Jeffries",
                  coverURL:
                        "https://cdn-images-1.medium.com/max/1200/1*CQRh-pFTZ97ReXogbefleQ.png"
            },
            {
                  bookName: "Clean Code",
                  author: "Robert Cecil Martin",
                  coverURL:
                        "https://images-na.ssl-images-amazon.com/images/I/515iEcDr1GL._SX258_BO1,204,203,200_.jpg"
            }
      ];
*/
// const root = document.querySelector('#root');
// const injectBooksToDOM = (array) => {
//     const bookList = document.createElement('ul');
//     array.forEach(element => {
//         const book = document.createElement('li');
//         book.textContent = element;
//         book.appendChild(bookList);
//     });
//     bookList.textContent('selam');
//     bookList.appendChild(root);
// };

// const books = [
//     {
//         bookName: "The Nature of Software Development",
//         author: "Ron Jeffries",
//         coverURL:
//             "https://cdn-images-1.medium.com/max/1200/1*CQRh-pFTZ97ReXogbefleQ.png"
//     },
//     {
//         bookName: "Clean Code",
//         author: "Robert Cecil Martin",
//         coverURL:
//             "https://images-na.ssl-images-amazon.com/images/I/515iEcDr1GL._SX258_BO1,204,203,200_.jpg"
//     }
// ];
// injectBooksToDOM(books);

/*
5. What's the output for this snippet? Is the output deterministic (always the same) or might it depend on the browser
we run this in?
Explain your answer in less than 150 words. (The 'yes or no' answer doesn't really matter to us,
the explanation why is the important part)

function test() {
    console.log('one');
    setTimeout(function() {
        console.log('two');
        setTimeout(function() {
            console.log('three');
        }, 0);
    }, 1000);
    setTimeout(function() {
        console.log('four');
        setTimeout(function() {
            console.log('five');
        }, 1000);
    }, 0);
    console.log('six');
}
test(); // ?

the output is:
one
six
four
two
three
five

because test function has setTimeout functions. 
that means all the lines will launch one by one but if any line has a time delay by setTimeout functions, function will pass to next line. 
as a result first line of output will be 'one', then function will pass 2 setTimeout functions because of 1000ms, 
second line will be 'six', then function will turn back to shortest setTimeout function which is second one,
inside of it third output will be 'four', then it will apply that to others in this way.  */