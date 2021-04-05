import express from 'express'
import compression from 'compression'
import helmet from 'helmet'
import cors from 'cors'
import { join } from 'path'

import galleryRoute from '../../api/gallery'

export default () => {
    const app = express();

    app.use(cors());
    app.use(helmet());
    app.use(compression());
    app.use(express.static(join(__dirname, '..', '..', 'client')));

    app.use('/api/gallery', galleryRoute);

    app.get('/*', (req, res) => res.sendFile(join(__dirname, '..', '..', 'client', 'index.html')));

    return app;
}