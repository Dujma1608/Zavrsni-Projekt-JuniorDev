import { useContext, useState, useEffect } from "react";
import { AnimalsContext } from '../../../context/AnimalsContext'
import AnimalCard from "../../animals/Card/AnimalCard";
import { AnimalService } from '../../../services/AnimalService'
import './HomePageAnimals.css'
const HomePageAnimals = () => {
    
    const { animals, setAnimals } = useContext(AnimalsContext);
 
    const [loading, setLoading] = useState(true);
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(3);
    const [allNotAdoptedAnimals,setAllNotAdopted] = useState([])

    useEffect(() => {
      AnimalService.getAnimals()
        .then((response) => {
          setAnimals(response);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }, []);

    useEffect(() => {
        setAllNotAdopted(animals.filter(
          (animal) => animal.isAdopted === false
        ));
    }, [animals, loading]);
    
    if (loading) {
      return <div>Loading...</div>;
    }

    const showRight = () => {
      if(endIndex <= allNotAdoptedAnimals.length - 1){
        setStartIndex(startIndex + 3);
        setEndIndex(endIndex + 3);
        console.log(startIndex, endIndex);
      }
    }
    const showLeft = () => {
      if(startIndex >= 3){
      setStartIndex(startIndex - 3);
      setEndIndex(endIndex - 3);
      console.log(startIndex, endIndex);
    }
    };

    return (
      <div className="home-animals">
        <button onClick={showLeft}>&lt;</button>
        {allNotAdoptedAnimals.slice(startIndex, endIndex).map((animal) => (
          <AnimalCard animal={animal} setAnimals={setAnimals} key={animal.id}>
            {animal}
          </AnimalCard>
        ))}
        <button onClick={showRight}>&gt;</button>
      </div>
    );
}

export default HomePageAnimals;