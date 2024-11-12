import User from "../models/user.model";
import {connectDB} from '../mongoDB/db';

interface UserProps {
    id: string;
    first_name: string;
    last_name: string;

}
export const createOrUpdateUser = async (
    id,
    first_name,
    last_name,
    image_url,
    email_addresses,
    username
    
    
) => {
    try {
        await connectDB();
        const user = await User.findOneAndUpdate({clerkId: id},{
            $set: {
                firstName: first_name,
                lastName: last_name,
                avatar: image_url,
                email: email_addresses[0].email_address,
                username
            }
        }, {upsert: true, new: true});

    
    } catch (error) {
        console.error(error);
    }
}