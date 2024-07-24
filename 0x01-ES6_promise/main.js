// import signUpUser from './4-user-promise.js';

// export default function handleProfileSignup(firstName, lastName) {
//   return signUpUser(firstName, lastName)
//     .then((data) => {
//       console.log(data);
//     })
//     .catch(() => console.log('Signup system offline'));
// }


// console.log( signUpUser("Olanrewaju", "Oluwafemi"));

import add from "./ind.js"

console.log(await add(1, 2));