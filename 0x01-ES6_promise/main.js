import signUpUser from './4-user-promise.js';

export default function handleProfileSignup(firstName, lastName) {
  return signUpUser(firstName, lastName)
    .then((data) => {
      console.log(data);
    })
    .catch(() => console.log('Signup system offline'));
}


console.log(await signUpUser("Olanrewaju", "Oluwafemi"));