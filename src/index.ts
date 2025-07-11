import Express from "express";
import router from "./router";
const app = Express();

app.use(Express.json());

app.use("/", router);

app.listen(1000, ()=>{});