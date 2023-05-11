import { supabase } from "../../Persistence/databaseInstance";

export const getDonations = async () => {
    const { data, error } = await supabase.from('donations').select('*');
    if (error) {
        console.error(error);
    } else {
        return data;
    }
}
export const addDonation = async (newDonation) => {
    const { error } = await supabase.from('donations').insert(newDonation);
    if (error) console.log(error);
}
export const deleteDonation = async (donationId) => {
    const { error } = await supabase
        .from('donations')
        .delete()
        .match({ id: donationId })
    if (error) console.log(error);
}

export const updateDonation = async (donationId, typeValue) => {
     await supabase
        .from('donations')
         .update({ type: typeValue })
         .eq('id', donationId);
}

export const DonationService = {
    getDonations,
    addDonation,
    deleteDonation,
    updateDonation
}