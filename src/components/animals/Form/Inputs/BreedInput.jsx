import { arrays } from "../../../../utils/arrays";
const BreedInput = ({ handleChange, form, animalType }) => {
  return (
    <select name="typeBreed" value={form.typeBreed} onChange={handleChange}>
      <option>--select breed--</option>
      {animalType === "dog" ? (
        <>
          {arrays.dogs.map((dog) => (
            <option key={dog}>{dog}</option>
          ))}
        </>
      ) : animalType === "cat" ? (
        <>
          {arrays.cats.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </>
      ) : animalType === "bird" ? (
        <>
          {arrays.birds.map((parrot) => (
            <option key={parrot}>{parrot}</option>
          ))}
        </>
      ) : (
        <>
          {arrays.fishes.map((fish) => (
            <option key={fish}>{fish}</option>
          ))}
        </>
      )}
    </select>
  );
};
export default BreedInput;
