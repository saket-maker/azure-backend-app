import "dotenv/config";
import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Backend is running 🚀🚀");
});

app.get("/api/users", (req, res) => {
  res.json([
    { id: 1, name: "Saket" },
    { id: 2, name: "EY ready dev 👻👻" },
  ]);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
