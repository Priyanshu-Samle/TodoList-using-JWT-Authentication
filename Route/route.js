import { create,readOne,update, deleteUser } from "../Controller/controller.js";

import express from "express"
import {isAuthoriztion} from ".././jwt.js";

const route = express();

route.post("/create",create);
route.get("/readOne/:id",isAuthoriztion,readOne);
route.post("/update/:id",isAuthoriztion,update);
route.post("/delete/:id",isAuthoriztion,deleteUser);
route.get("/readAll",isAuthoriztion,readAll);

export default route;

