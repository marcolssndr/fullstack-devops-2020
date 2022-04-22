import {CmykToRgb} from '../service/Service';
import {Express} from 'express';

class HttpController {
    constructor(server: Express) {
        server.get('/', (req, res) => {
            console.log(req.query.color);
            const color = (req.query.color as any);
            const convertedColor = CmykToRgb(color);

            res.send(convertedColor);
        });
    }
}

export default HttpController;
