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
