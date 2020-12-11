import {Router, Request, Response} from 'express';

const confirmationRouter = Router();

confirmationRouter.get('/Mail', (request: Request, response: Response) => {
    console.log(request);

    response.send();
});

export default confirmationRouter;
