import { NextApiRequest, NextApiResponse } from "next";
// import { jwtMiddleware } from "./jwt-middleware";

type handlerProps = {
    get: () => void;
    post: () => void;
    put: () => void;
    _delete: () => void;
}

const apiHandler = (handler: any) => {
    return async (req: NextApiRequest, res: NextApiResponse) => {
        const method = req.method ? req.method.toLowerCase() : ''
        // check handler supports HTTP method
        if (!handler[method])
            return res.status(405).end(`Method ${req.method} Not Allowed`);

        try {
            // global middleware
            // await jwtMiddleware(req, res);

            // route handler
            await handler[method](req, res);
        } catch (err) {
            // global error handler
            errorHandler(err, res);
        }
    }
}

export { apiHandler }