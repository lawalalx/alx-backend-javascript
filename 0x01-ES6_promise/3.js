// In this file, import uploadPhoto and createUser from utils.js

// Knowing that the functions in utils.js return promises, use the prototype below to collectively resolve all promises and log body firstName lastName to the console.

// function handleProfileSignup()
// In the event of an error, log Signup system offline to the console

export default function handleProfileSignup() {
  const promise1 = uploadPhoto();
  const promise2 = createUser();

  return Promise.all([promise1, promise2])
    .then((values) => {
      console.log(values[0].body, values[1].firstName, values[1].lastName);
    })
    .catch(() => console.log('Signup system offline'));
}

