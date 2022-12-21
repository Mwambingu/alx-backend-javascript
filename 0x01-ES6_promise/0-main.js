//Task 0
import getResponseFromAPI from "./0-promise.js";

const response = getResponseFromAPI();
console.log(response instanceof Promise);
//Task 1
// import getFullResponseFromAPI from './1-promise';

// console.log(getFullResponseFromAPI(true));
// console.log(getFullResponseFromAPI(false));
//Task 2
import handleResponseFromAPI from "./2-then";

const promise = Promise.resolve();
handleResponseFromAPI(promise);
//Task 3
import handleProfileSignup from "./3-all";

handleProfileSignup();
//Task 4
import signUpUser from "./4-user-promise";

console.log(signUpUser("Bob", "Dylan"));
//Task 5
import uploadPhoto from './5-photo-reject';

console.log(uploadPhoto('guillaume.jpg'));