import { } from './config/dotenv'
import createApp from './config/express'

const app = createApp();

const startExpress = () => app.listen(process.env.PORT, () =>
    console.log(`server is listening on port ${process.env.PORT}`)
);

startExpress();