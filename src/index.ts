import express from "express";
import sequelize from "./config/db";
import router from "./routes/Router";
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());
app.use("/api", router);

const startServer = async () => {
    try {
        await sequelize.authenticate();
        console.log("Database connected");
        await sequelize.sync({ force: false });
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        })
    } catch (error) {
        console.error("Unable to connect to database", error);
    }
}

startServer();