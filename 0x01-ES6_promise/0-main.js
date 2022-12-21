//Task 0
import getResponseFromAPI from "./0-promise.js";

const response = getResponseFromAPI();
console.log(response instanceof Promise);
//Task 1
// import getFullResponseFromAPI from './1-promise';

// console.log(getFullResponseFromAPI(true));
// console.log(getFullResponseFromAPI(false));
//Task 2
// import handleResponseFromAPI from "./2-then";

// const promise = Promise.resolve();
// handleResponseFromAPI(promise);
// //Task 3
// import handleProfileSignup from "./3-all";

// handleProfileSignup();
// //Task 4
// import signUpUser from "./4-user-promise";

// console.log(signUpUser("Bob", "Dylan"));
// //Task 5
// import uploadPhoto from './5-photo-reject';

// console.log(uploadPhoto('guillaume.jpg'));
// //Task 6
// import handleProfileSignup from './6-final-user';

// console.log(handleProfileSignup("Bob", "Dylan", "bob_dylan.jpg"));
//Task 7
// import loadBalancer from "./7-load_balancer";

// const ukSuccess = 'Downloading from UK is faster';
// const frSuccess = 'Downloading from FR is faster';

// const promiseUK = new Promise(function(resolve, reject) {
//     setTimeout(resolve, 100, ukSuccess);
// });

// const promiseUKSlow = new Promise(function(resolve, reject) {
//     setTimeout(resolve, 400, ukSuccess);
// });

// const promiseFR = new Promise(function(resolve, reject) {
//     setTimeout(resolve, 200, frSuccess);
// });

// const test = async () => {
//     console.log(await loadBalancer(promiseUK, promiseFR));
//     console.log(await loadBalancer(promiseUKSlow, promiseFR));
// }

// test();
// //Task 8
// import divideFunction from './8-try';

// console.log(divideFunction(10, 2));
// console.log(divideFunction(10, 0));
//Task 9
import guardrail from './9-try';
import divideFunction from './8-try';

console.log(guardrail(() => { return divideFunction(10, 2)}));
console.log(guardrail(() => { return divideFunction(10, 0)}));

//Advanced I
import asyncUploadUser from "./100-await";

const test = async () => {
    const value = await asyncUploadUser();
    console.log(value);
};

test();