let pets = [
  { id: 1, name: "Ruby", age: 1 },
  { id: 2, name: "Bean", age: 2 },
];

const getPets = () => {
  setTimeout(() => {
    pets.map((pet) => console.log(pet));
  }, 1000);
};

const addPets = (pet, callback) => {
  setTimeout(() => {
    pets = [...pets, pet];
    callback();
  }, 3000);
};

addPets({ id: 3, name: "jim", age: 3 }, getPets);
