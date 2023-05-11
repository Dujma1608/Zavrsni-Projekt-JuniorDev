import { supabase } from "../../Persistence/databaseInstance";

export const getNotifications = async () => {
    const { data, error } = await supabase.from('notifications').select('*');
    if (error) {
        console.error(error);
    } else {
        return data;
    }
}
export const addNotification = async (newNotification) => {
    const { error } = await supabase.from('notifications').insert(newNotification);
    if(error) console.log(error);
}

export const deleteNotification = async (notificationId) => {
    const { error } = await supabase
        .from('notifications')
        .delete()
        .match({ id: notificationId })
    if (error) console.log(error);
}

export const NotificationService = {
    getNotifications,
    addNotification,
    deleteNotification
}