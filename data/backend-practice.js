// const xhr = new XMLHttpRequest();

// xhr.addEventListener('load', () => {
//   console.log(xhr.response);
// });

// xhr.open('GET', 'https://supersimplebackend.dev');
// xhr.send();

const xhr = new XMLHttpRequest();

// xhr.addEventListener('load', () => {
//   console.log(xhr.response);
// });

// xhr.open('GET', 'https://supersimplebackend.dev/greeting');
// xhr.send();


// const test = fetch(
//   'https://supersimplebackend.dev/greeting'
// ).then((response) => {
//   return response.text();
// });

// console.log(test);

// async function asyncTest() {
//   const promise = await fetch(
//     'https://supersimplebackend.dev/greeting'
//   );

//   const text = await promise.text();

//   console.log(text);
// }
// asyncTest();

// async function nameCall(yourName) {
//   const promise = await fetch(
//     'https://supersimplebackend.dev/greeting'
//   , {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json' 
//     },
//     body: JSON.stringify({
//       name: yourName
//     })
//   });
//   const text = await promise.text();
//   console.log(text);
// }

// nameCall("Ervindo");

// async function callAmazon() {
//   const promise = await fetch (
//     'https://amazon.com'
//   ).catch((error) => {
//     console.log('CORS error. Your request was blocked by the backend.');
//   });
//   const text = await promise.text();
//   console.log(text);
// }
// callAmazon();

// async function callError() {
//   try{
//     const promise = await fetch(
//       'https://supersimplebackend.dev/greeting'
//     , {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });

//     if(promise.status >= 400){
//       throw promise;
//     }

//     const text = await promise.text();
//     console.log(text);
//   } catch(error){
//     if(error.status === 400){
//       const errorMessage = await error.json();
//       console.log(errorMessage);
//     } else {
//       console.log('Network error. Please try again later.');
//     }
//   }
// }
// callError();