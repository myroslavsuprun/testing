const isSuccess = Math.random() > 0.5;

console.log(isSuccess);

const fetchUser = (user) => {
  return (promise = new Promise((resolve, reject) => {
    console.log("Adding data for the user:", user);
    if (isSuccess) {
      resolve("Succesful addition of the user");
    }
  }));
};
