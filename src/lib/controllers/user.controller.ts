import User from "../models/user.model";
import { connectDB } from '../mongoDB/db';

interface UserProps {
    id: string;
    first_name: string;
    last_name: string;
    image_url: string;
    email_addresses: { email_address: string }[];
    username: string;
}

export const createOrUpdateUser = async (
    id: string,
    first_name: string,
    last_name: string,
    image_url: string,
    email_addresses: { email_address: string }[],
    username: string
): Promise<UserProps | null> => {
    try {
        await connectDB();

        const user = await User.findOneAndUpdate(
            { clerkId: id },
            {
                $set: {
                    firstName: first_name,
                    lastName: last_name,
                    avatar: image_url,
                    email: email_addresses[0]?.email_address,   
                    username
                }
            },
            { upsert: true, new: true }
        );

        return user;
    } catch (error) {
        console.error("Error creating or updating user:", error);
        return null; 
    }
};
