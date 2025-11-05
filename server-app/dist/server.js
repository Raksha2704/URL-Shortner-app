import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/dbConfig.js";
import shortUrl from "./routes/shortUrl.js";
dotenv.config();
connectDB();
const port = process.env.PORT || 5001;
const app = express();
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: "http://localhost:3002",
    credentials: true,
}));
app.use("/api/", shortUrl);
app.listen(port, () => {
    console.log(`Server started successfully on port : ${port}`);
});
//# sourceMappingURL=server.js.map