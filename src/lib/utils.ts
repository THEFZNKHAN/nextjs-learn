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
            console.log("Using existing connection");
            return;
        }
        const db = await mongoose.connect(process.env.MONGO_URI || "");
        connection.isConnected = db.connections[0].readyState === 1;
        console.log("Connected to MongoDB");
    } catch (err: any) {
        console.error(err);
        throw new Error(String(err));
    }
};
