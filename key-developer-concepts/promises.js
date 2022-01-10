import fetch from "node-fetch";

// DEMO 1

// const myPromise = new Promise((resolve, reject) => {
//     const TEST_BOOL = true;

//     if (TEST_BOOL) {
//         setTimeout(() => {
//             resolve('I have succeeded');
//         }, 1000);
//     } else {
//         reject('I have failed');
//     }
// });

// myPromise
//     .then(resolveValue => resolveValue + '!')
//     .then(newResolveValue => console.log(newResolveValue))
//     .catch(rejectValue => console.log(rejectValue));

// DEMO 2 (SLOWER THAN DEMO 3)

// const arr = [];

// for (let i = 0; i < 5; i++) {
//     arr.push(i);
// }

// const loadData = async () => {
//     const start = new Date();

//     for (let i = 1; i <= arr.length; i++) {
//         await fetch(`https://jsonplaceholder.typicode.com/todos/${i}`)
//             .then(response => response.json())
//             .then(todo => console.log(todo))
//             .catch(error => console.log(error));
//     }

//     const end = new Date();

//     console.log('Without Promise.all:', end - start);
// };

// loadData();

// DEMO 3 (FASTER THAN DEMO 2)

// const arr = [];

// for (let i = 1; i <= 5; i++) {
//     arr.push(i);
// }

// const loadDataWithPromiseAll = async () => {
//     const start = new Date();

//     const promises = arr.map(i => fetch(`https://jsonplaceholder.typicode.com/todos/${i}`).then(response => response.json()));

//     const results = await Promise.all(promises);

//     console.log(results);

//     const end = new Date();

//     console.log('With Promise.all:', end - start);
// };

// loadDataWithPromiseAll();