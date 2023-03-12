import express from "express";
import cors from "cors";
import { sample_foods, sample_tags } from "./data";

const app = express();
app.use(cors({
    origin: ["http://localhost:4200"],
    credentials: true
}));

app.get("/api/foods", (req, res) => {
    res.send(sample_foods);
});

app.get("/api/foods/search/:searchTerm", (req, res) => {
    const searchTerm = req.params.searchTerm;
    const results = sample_foods.filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()));
    res.send(results);
});

app.get("/api/foods/tags", (req, res) => {
    res.send(sample_tags);
});

app.get("/api/foods/tag/:tagName", (req, res) => {
    const tagName = req.params.tagName;
    const results = sample_foods.filter(food => food.tags?.includes(tagName));
    res.send(results);
});

app.get("/api/foods/:foodId", (req, res) => {
    const foodId = req.params.foodId;
    const result = sample_foods.find(food => food.id === foodId);
    res.send(result);
});

const port = 5000;
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});