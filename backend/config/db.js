import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect(process.env.MONGODB_URI, {
        family: 4 // Force IPv4
    }).then(() => console.log('DB Connected'))
}