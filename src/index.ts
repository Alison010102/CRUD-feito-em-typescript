import express from "express";
import router from "express";

const app = express();

app.use(express.json());

app.use("/user", router);

app.listen(777, ()=>{});