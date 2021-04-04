import express from 'express'
import compression from 'compression'
import helmet from 'helmet'
import { join } from 'path'

export default () => {
    const app = express();

    app.use(helmet())
    app.use(compression());
    app.use(express.static(join(__dirname, '..', '..', 'client')));

    app.get('/*', (req, res) => res.sendFile(join(__dirname, '..', '..', 'client', 'index.html')));

    return app;
}