const filterBy = (array, nameOfDataType) =>
  array.filter((item) => {
    if (nameOfDataType === "null") {
      return item !== null;
    } else if (nameOfDataType === "object") {
      return (
        item === null ||
        (typeof item !== nameOfDataType && typeof item !== "function")
      );
    } else {
      return typeof item !== nameOfDataType;
    }
  });

const allTypesValues = [
  5,
  "rew",
  null,
  undefined,
  true,
  53n,
  53,
  {},
  [],
  function () {},
  Symbol(),
];

console.log(allTypesValues);
console.log(filterBy(allTypesValues, "some type"));
