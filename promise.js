let pets = [
  { id: 1, name: "Ruby", age: 1 },
  { id: 2, name: "Bean", age: 2 },
];

const getPets = () => {
  setTimeout(() => {
    pets.map((pet) => console.log(pet.name));
  }, 1000);
};

const addPets = (pet) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      pets = [...pets, pet];
      const error = false;
      if (error) {
        reject(new Error("error"));
      } else {
        resolve();
      }
    }, 3000);
  });
};

addPets({ id: 3, name: "coco", age: 3 })
  .then(getPets)
  .catch((err) => console.log(err.message));

const promise1 = Promise.resolve("promise 1");

const promise2 = new Promise((resolve, reject) =>
  setTimeout(resolve, 5000, "promise 2")
);
const promise3 = new Promise((resolve, reject) =>
  setTimeout(resolve, 2000, "promise 3")
);

Promise.all([promise1, promise2, promise3]).then((result) =>
  console.log(result)
);
const promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "one");
});

const promise5 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "two");
});

Promise.race([promise4, promise5]).then((value) => {
  console.log(value);
  // Both resolve, but promise2 is faster
});
