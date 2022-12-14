import { Router } from "express";
import AccountController from "../controller/account-controller";
import operationRouter from "./operation-routes";

const accountRouter = Router();

accountRouter.use('/operation', operationRouter);

accountRouter.get('/', AccountController.findAll);
accountRouter.get('/balance/:email', AccountController.getBalance);
accountRouter.get('/:accountNumber', AccountController.findByAccountNumber);

export default accountRouter;