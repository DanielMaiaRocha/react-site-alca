import mongoose from "mongoose";

export default async function connect() {
    try {
        await mongoose.connect(process.env.MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Conexão com MongoDB estabelecida com sucesso.");
    } catch (error) {
        console.error("Erro ao conectar-se ao MongoDB:", error);
        throw error;
    }
}
