import { AsyncRouter } from 'express-async-router'

import { get } from './gallery.controller'

const router = AsyncRouter();

router.get('/', get);

export default router;