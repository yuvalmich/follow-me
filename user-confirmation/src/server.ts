import cookieParser from 'cookie-parser';
import express, {Express} from 'express';


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
        this.app.use(cookieParser());
    }

    private initRoutes() {
    }

    public start() {
        this.app.listen(this.port, () => {
            console.info('Express server started on port: ' + this.port);
        });
    }
}

