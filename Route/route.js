import { create,readOne,update, deleteUser } from "../Controller/controller.js";

import express from "express"
import {webToken} from ".././jwt.js";

const route = express();

route.post("/create",create);
route.get("/readOne/:id",webToken,readOne);
route.post("/update/:id",webToken,update);
route.post("/delete/:id",webToken,deleteUser);

export default route;

