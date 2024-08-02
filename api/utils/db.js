import mongoose from "mongoose";

export default async function connect() {
    try {
        await mongoose.connect(process.env.MONGO)
        console.log("Conectado ao Banco.");
    } catch (error) {
        console.error("Erro ao conectar-se ao MongoDB:", error);
        throw error;
    }
}
