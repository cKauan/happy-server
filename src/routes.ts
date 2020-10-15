import { Router } from "express";
import OrphanagesController from "./controllers/OrphanagesController";
import multerConfig from "./config/upload";

import multer from "multer";
const routes = Router();
const upload = multer(multerConfig);

routes.get("/orphanages", OrphanagesController.index);
routes.get("/orphanages/:id", OrphanagesController.find);
routes.post("/orphanages", upload.array("images"), OrphanagesController.create);

export default routes;
