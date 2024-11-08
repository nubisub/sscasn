import mongoose from "mongoose";


export const setupDatabase = async () => {
    const mongoString = process.env.DB_URI;

    if (!mongoString) {
        throw new Error("DB_URI is not defined in the environment variables");
    }

    await mongoose.connect(mongoString);
    const database = mongoose.connection;

    database.on("error", (error) => {
        console.log(error);
    });

    database.once("open", () => {
        console.log("Connected to database");
    });
};