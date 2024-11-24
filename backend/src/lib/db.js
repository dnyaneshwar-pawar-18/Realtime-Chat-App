import mongoose from 'mongoose'

export const connectDB = async () => {
    try {

        mongoose.connection.on('connected', () => {
            console.log('Database Connected')
        })
        const conn = await mongoose.connect(`${process.env.MONGODB_URI}/chat_db`);
        console.log(`MongoDB connected: ${conn.connection.host}`)
    } catch (error) {
        console.log("MongoDB connection error: ", error)
    }
};
