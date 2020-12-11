import {Express} from "express";
import express = require("express");
import confirmationRouter from "./user-confirmation/route";



export class Server {
    private app: Express;
    private readonly port: number = 3000;

    constructor() {
        this.app = express();
        this.initMiddlewares();
        this.initRoutes();
    }

    private initMiddlewares() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: true}));
    }

    private initRoutes() {
        this.app.use("/Confirmation", confirmationRouter);
    }

    public start() {
        this.app.listen(this.port, () => {
            console.info('Express server started on port: ' + this.port);
        });
    }
}

