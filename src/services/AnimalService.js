import { supabase } from "../../Persistence/databaseInstance";

export const getAnimals = async () => {
    const { data, error } = await supabase.from('animals').select('*');
    if (error) {
        console.error(error);
    } else {
        return data;
    }
}
export const getAnimal = async (animalId) => {
    const { data, error } = await supabase.from('animals').select('*').eq('id', animalId).single();
    if (error) {
        console.error(error);
    } else {
        return data;
    }
}
export const addAnimal = async (newAnimal) => {
    const { error } = await supabase.from('animals').insert(newAnimal);
    if (error) console.log(error);
}
export const deleteDonation = async (animalId) => {
    const { error } = await supabase
        .from('donations')
        .delete()
        .match({ id: animalId })
    if (error) console.log(error);
}

export const updateAnimalAdoption = async (animalId, value) => {
    await supabase
        .from('animals')
        .update({ isAdopted: value })
        .eq('id', animalId);
}

export const updateAnimal = async (animalId, value) => {
    await supabase
        .from('animals')
        .update( value )
        .eq('id', animalId);
}
export const AnimalService = {
    getAnimals,
    getAnimal,
    addAnimal,
    updateAnimalAdoption,
    deleteDonation,
    updateAnimal
}