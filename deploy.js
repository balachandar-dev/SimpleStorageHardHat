async function hi() {
  await console.log("Hi");
}

hi()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

let variable = 5;
console.log(variable);
