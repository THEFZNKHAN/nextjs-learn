import mongoose, { Connection } from "mongoose";

interface ConnectionStatus {
    isConnected: boolean;
}

let connection: ConnectionStatus = {
    isConnected: false,
};

export const connectToDb = async (): Promise<void> => {
    try {
        if (connection.isConnected) {
            return;
        }
        const db = await mongoose.connect(process.env.MONGO_URI || "");
        connection.isConnected = db.connections[0].readyState === 1;
    } catch (err: any) {
        console.error(err);
        throw new Error(String(err));
    }
};
