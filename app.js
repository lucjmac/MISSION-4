import express from "express";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const root = path.resolve();

const PORT = process.env.PORT;

app.use(express.static("public"));

// app.get("/home", (req, res) => {
//     res.sendFile(path.join(root, "public", "index.html"));
// });

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
